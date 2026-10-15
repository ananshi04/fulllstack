let firstNameInput = document.getElementById("first-name");
let favoriteNumberInput = document.getElementById("favorite-number");
let isStudentCheckbox = document.getElementById("isStudent");
let profileOutput = document.getElementById("profile");

function generateProfile() {
    let firstName = firstNameInput.value;
    let favoriteNumber = favoriteNumberInput.value;
    let isStudent = isStudentCheckbox.checked;

    if (!firstName) {
        profileOutput.textContent = "Please enter your name";
        return;
    }

    if (!favoriteNumber) {
        profileOutput.textContent = "Please enter your favorite number";
        return;
    }

    if (isNaN(favoriteNumber)) {
        profileOutput.textContent = "Please enter a valid number";
        return;
    }

    let profile = `Name: ${firstName}, Favorite Number: ${favoriteNumber}, Is Student: ${isStudent}`;
    profileOutput.textContent = profile;
}