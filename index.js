const buttons = document.querySelectorAll(".all button");
const bombList = document.getElementById("bomb_list");
const bombOrder = [];

buttons.forEach((button) => {
    button.addEventListener("click", () => pressed(button));
});

function pressed(button) {
    if (bombOrder.includes(button.id)) return;

    bombOrder.push(button.id);
    button.style.backgroundColor = "darkgray";
    button.disabled = true;

    displayList(button.id);
}

function displayList(buttonId) {
    const displayNames = {
        "dragon_command": "Dragon Command",
        "tank_station": "Tank Station",
        "infirmary": "Infirmary",
        "armoury": "Armoury",
        "supply_depot": "Supply Depot",
        "dept_store": "Dept. Store"
    };

    const listItem = document.createElement("li");
    listItem.textContent = `${displayNames[buttonId]}`;
    bombList.appendChild(listItem);
}