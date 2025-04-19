const express = require('express');
const multer = require('multer');
const path = require('path');
const Audio = require('../models/Audio');
const fs = require('fs');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

router.post('/upload', upload.single('audio'), async (req, res) => {
  const file = req.file;
  if (!file) return res.status(400).json({ message: 'No file uploaded' });

  const audio = new Audio({
    filename: file.filename,
    originalname: file.originalname,
  });

  await audio.save();
  res.status(201).json(audio);
});

router.get('/', async (req, res) => {
  const files = await Audio.find().sort({ uploadDate: -1 });
  res.json(files);
});

router.delete('/:id', async (req, res) => {
  const audio = await Audio.findById(req.params.id);
  if (!audio) return res.status(404).json({ message: 'File not found' });

  fs.unlink(path.join(__dirname, '../uploads', audio.filename), err => {
    if (err) console.error(err);
  });

  await audio.deleteOne();
  res.json({ message: 'File deleted' });
});

module.exports = router;