function calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const monthDifference = now.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && now.getDate() < birth.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge('1990-07-10'));
