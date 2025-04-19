const express = require("express");
const multer = require("multer");
const mongoose = require("mongoose");
const { Readable } = require("stream");
const File = require("../models/file");

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

let bucket;
mongoose.connection.once("open", () => {
  bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
    bucketName: "uploads",
  });
});

// Render upload form
router.get("/", (req, res) => {
  res.render("index");
});

// Upload route
router.post("/upload", upload.single("file"), async (req, res) => {
  const { originalname, mimetype, buffer, fieldname } = req.file;

  const newFile = new File({
    filename: originalname,
    contentType: mimetype,
    length: buffer.length,
  });

  const readBuffer = new Readable();
  readBuffer.push(buffer);
  readBuffer.push(null);

  const uploadStream = bucket.openUploadStream(fieldname);

  try {
    await new Promise((resolve, reject) => {
      readBuffer
        .pipe(uploadStream)
        .on("finish", () => resolve())
        .on("error", reject);
    });

    newFile.id = uploadStream.id;
    const savedFile = await newFile.save();

    res.send({
      message: "File uploaded successfully",
      file: savedFile,
      downloadURL: `/image/${savedFile.filename}`,
    });
  } catch (err) {
    res.status(500).send("Error uploading file");
  }
});

// Download by filename
router.get("/image/:filename", (req, res) => {
  const { filename } = req.params;

  const downloadStream = bucket.openDownloadStreamByName(filename);

  downloadStream.on("file", (file) => {
    res.set("Content-Type", file.contentType);
  });

  downloadStream.on("error", () => {
    res.status(404).send("File not found");
  });

  downloadStream.pipe(res);
});

module.exports = router;