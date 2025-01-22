let person = {
    firstName: "Vache",
    lastName: "Kakalashvili",
    age: 14,
    gender: "Male",
    address: {
        street: "T.Tabidze 74",
        city: "Tbilisi",
        country: "Georgia"
    }
};

let newProperties = {
    houseName: "Vache's Residence",
    address: {
        street: "T.Tabidze 74",
        city: "Tbilisi",
        country: "Georgia",
        postalCode: "12345"
    }
};

Object.assign(person, newProperties);

console.log(person);
