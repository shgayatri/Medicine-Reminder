let reminders = [];

// Add reminder
function addReminder() {
    let name = document.getElementById("medicineName").value;
    let time = document.getElementById("medicineTime").value;
    let note = document.getElementById("medicineNote").value;

    if (!name || !time) {
        showPopup("Please enter medicine name & time!");
        return;
    }

    reminders.push({ name, time, note });
    displayReminders();
    clearInput();
    showPopup("Reminder added successfully!");
}

// Show popup
function showPopup(text) {
    document.getElementById("popupText").innerText = text;
    document.getElementById("popup").style.display = "flex";
}

// Close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Show list
function displayReminders() {
    let list = document.getElementById("reminderList");
    list.innerHTML = "";

    reminders.forEach((r, i) => {
        list.innerHTML += `
            <div class="reminder-box">
                <b>💊 ${r.name}</b><br>
                ⏰ Time: ${r.time}<br>
                📝 Note: ${r.note || "None"}<br>
                <button class="delete-btn" onclick="deleteReminder(${i})">
                    Delete
                </button>
            </div>
        `;
    });
}

// Delete
function deleteReminder(i) {
    reminders.splice(i, 1);
    displayReminders();
    showPopup("Reminder deleted!");
}

// Clear Input
function clearInput() {
    document.getElementById("medicineName").value = "";
    document.getElementById("medicineTime").value = "";
    document.getElementById("medicineNote").value = "";
}

// Check reminder time
setInterval(() => {
    let now = new Date();
    let time = now.toTimeString().slice(0, 5);

    reminders.forEach(r => {
        if (r.time === time) {
            showPopup("⏰ Time to take: " + r.name);
        }
    });

}, 1000);
