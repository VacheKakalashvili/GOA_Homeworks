function updateDateTime() {
    const dateTimeElement = document.getElementById('datetime');
    setInterval(() => {
        const now = new Date();
        dateTimeElement.textContent = now.toString();
    }, 1000);
}

updateDateTime();
