function daysUntilNextBirthday(birthdate) {
    const now = new Date();
    const birth = new Date(birthdate);
    birth.setFullYear(now.getFullYear());
    if (now > birth) {
        birth.setFullYear(now.getFullYear() + 1);
    }
    const diffTime = birth - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

console.log(daysUntilNextBirthday('1990-07-10'));
