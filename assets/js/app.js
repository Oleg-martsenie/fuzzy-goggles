const menuToggle = document.querySelector('.menu');
const menuArea = document.querySelector('.menu-area');
const demo = document.querySelector('.demo');

window.onscroll = () =>{
    menuArea.classList.remove('active');
}

menuToggle.onclick = () => {
    menuArea.classList.toggle('active');
}



let i = 0;
let txt = "I'm Filimonava Brosit.";
let speed = 130;

const typeWriter = () => {
  if (i < txt.length) {
    demo.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
