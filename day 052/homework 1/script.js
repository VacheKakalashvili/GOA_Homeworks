let firstName = "ვაჩე";
let lastName = "კაკალაშვილი";
let age = 13;
let residence = "თბილისი";
let hobby = "კალათბურთის თამაში";

function infoJoin(firstName, lastName, age, residence, hobby) {
    return `${firstName} ${lastName} ${age} ${residence} ${hobby}.`;
}

console.log(infoJoin(firstName, lastName, age, residence, hobby));
