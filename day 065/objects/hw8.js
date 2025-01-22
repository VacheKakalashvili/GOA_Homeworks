for (const property in person) {
    if (person.hasOwnProperty(property)) {
        console.log(`${property}: ${person[property]}`);
    }
}
