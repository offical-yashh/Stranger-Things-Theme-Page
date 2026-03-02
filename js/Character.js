    // Background images for each character
const backgrounds = {
  steve: "../assets/steve-bg.png",
  dustin: "../assets/dustin-bg.png",
  will: "../assets/will-bg.jpeg",
  eleven: "../assets/el-bg.png",
  mike: "../assets/mike-bg.jpeg",
  lucas: "../assets/lucas-bg.png",
  max: "../assets/max-bg.png",
  demogorgan: "../assets/demo-bg.png",
  vecna:"../assets/vecnas-bg.jpeg"
};

// All radios
const radios = document.querySelectorAll('input[name="char"]');

// All panels
const panels = document.querySelectorAll('.panel');

// Main container
const container = document.body;


// Hide all panels
function hidePanels(){
  panels.forEach(panel=>{
    panel.classList.remove("active");
  });
}


// Default state → only poster background
hidePanels();
container.style.backgroundImage = 'url("../assets/poster.jpg")';


// Click event
radios.forEach(radio => {

  radio.addEventListener("change", function(){

    hidePanels();

    // Change background
    const bg = backgrounds[this.id];
    if(bg){
      container.style.backgroundImage = `url(${bg})`;
    }

    // Show panel
    const panel = document.querySelector("." + this.id + "-panel");
    if(panel){
      panel.classList.add("active");
    }

  });

});