function getDayOfWeek(number) {
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return daysOfWeek[number - 1] || "Invalid number";
}

console.log(getDayOfWeek(1)); // Monday
