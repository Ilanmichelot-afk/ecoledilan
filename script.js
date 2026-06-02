const users = {
    "i.michelot": "#13092014Im#",
    "thymeo": "thymeo123",
    "mathieu": "mathieu123",
    "louison": "louison123",
    "liam": "liam123",
    "jael": "jael123",
    "nayan": "nayan123",
    "theo": "theo123",
    "kenzo": "kenzo123"
};

function login() {

    const username =
        document.getElementById("username")
        .value
        .toLowerCase()
        .trim();

    const password =
        document.getElementById("password")
        .value;

    if (users[username] === password) {

        document
            .getElementById("loginPage")
            .classList
            .add("hidden");

        document
            .getElementById("dashboard")
            .classList
            .remove("hidden");

        document
            .getElementById("welcome")
            .textContent =
            "Bienvenue " +
            username +
            " ! 👋";

    } else {

        document
            .getElementById("error")
            .textContent =
            "Identifiant ou mot de passe incorrect";

    }
}

function logout() {
    location.reload();
}

function saveNotes() {

    const notes =
        document
        .getElementById("notes")
        .value;

    localStorage.setItem(
        "notes",
        notes
    );

    alert("Notes sauvegardées !");
}

function addTask() {

    const input =
        document.getElementById("taskInput");

    const text =
        input.value.trim();

    if (text === "") return;

    const li =
        document.createElement("li");

    li.textContent = text;

    document
        .getElementById("taskList")
        .appendChild(li);

    input.value = "";
}

function updateClock() {

    const now = new Date();

    document
        .getElementById("clock")
        .textContent =
        now.toLocaleTimeString("fr-FR");
}

setInterval(updateClock, 1000);

window.onload = function () {

    updateClock();

    const notes =
        localStorage.getItem("notes");

    if (notes) {

        document
            .getElementById("notes")
            .value = notes;
    }
};

function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}
