// CHARACTER DATA
const characters = [

{
name: "Dragon Fly",
class: "Sorcerer",
img: "../assets/login_assets/dustin_for_login-removebg-preview.png",
desc: "A clever and strategic thinker who uses intelligence to win battles."
},

{
name: "Shadow Knight",
class: "Warrior",
img: "../assets/login_assets/steve.jpg",
desc: "A fearless fighter from the dark realm."
},

{
name: "Mind Walker",
class: "Mage",
img: "../assets/login_assets/eleven.jpg",
desc: "Controls psychic powers and hidden dimensions."
}

];


// BUTTON CLICK
document.getElementById("generateBtn").onclick = function(){

const random = characters[Math.floor(Math.random()*characters.length)];

document.getElementById("charName").innerText = random.name;
document.getElementById("charClass").innerText = random.class;
document.getElementById("charImg").src = random.img;
document.getElementById("charDesc").innerText = random.desc;


// SHOW USER SECTION
document.getElementById("userSection").style.display = "block";


// SCROLL DOWN
document.getElementById("userSection").scrollIntoView({
behavior: "smooth"
});

}