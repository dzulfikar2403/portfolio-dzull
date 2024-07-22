const data = [
  {
    name: "coffeList",
    desc: "",
  }
]

// original js
window.onscroll = ()=>{
  let nav = document.querySelector('header');
  let fixedNav = nav.offsetTop;
  // let sidenav = document.querySelector('#sidebar');
  // let fixedNav2 = nav.offsetHeight;

  if(window.scrollY > fixedNav ){
    nav.classList.add('nav-fixed');
  }else{
    nav.classList.remove('nav-fixed');
  }

  // if(window.scrollY == fixedNav2 ){
  //   sidenav.style.display = "block"
  // }else{
  //   sidenav.remove();
  // }
}


let btn = document.querySelector('#btn');
let darkToggle = document.querySelector('#dark-toggle');
let html = document.querySelector('html');

btn.addEventListener('click',()=>{
  html.classList.toggle('dark');
  if(btn.checked){
    darkToggle.style.transform = "translateX(100%)";
    localStorage.theme = 'dark';
  }else{
    darkToggle.style.transform = "translateX(0)";
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  btn.checked = true;
  darkToggle.style.transform = "translateX(100%)";
} else {
  btn.checked = false;
  darkToggle.style.transform = "translateX(0)";
}

// swipper js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:1,
  speed:2000,
  spaceBetween:15,
  autoplay:{
    duration:3000
  },
  // And if we need scrollbar
  breakpoints:{
    768: {
      slidesPerView: 2,
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable:true
  },
});


// particle js
window.addEventListener('DOMContentLoaded',(event)=>{

  particlesJS('particles-js',
    
    {
      "particles": {
        "number": {
          "value": 40,
          "density": {
            "enable": true,
            "value_area": 2700
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 4,
            "color": "#46bfd6"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.08,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 3.6,
            "opacity_min": 0.51,
            "sync": false
          }
        },
        "size": {
          "value": 10.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 20,
            "size_min": 7.77,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 3.2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 20,
            "duration": 2,
            "opacity": 8,
            "speed": 5
          },
          "repulse": {
            "distance": 200
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 1
          }
        }
      },
      "retina_detect": true,
    }
  
  );
  })

