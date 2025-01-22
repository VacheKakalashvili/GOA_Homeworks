function ageCheck(age) {
    if (age > 18) {
        console.log(`${age} is greater than 18.`);
    } else if (age < 18) {
        console.log(`${age} is less than 18.`);
    } else {
        console.log(`${age} is equal to 18.`);
    }
}

// Call the function with different numerical values
ageCheck(20); // Example: greater than 18
ageCheck(16); // Example: less than 18
ageCheck(18); // Example: equal to 18
