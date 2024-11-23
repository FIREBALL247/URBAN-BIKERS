const bikeData = [
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-1.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-2.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-3.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-4.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-5.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-6.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-7.png",
    tag: "Free Cancellation",
  },
  {
    name: "BMW R1300GS",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-8.png",
    tag: "Free Cancellation",
  },
];


let hamburger = document.querySelector('.hamburger');
let navbar = document.querySelector('.navbar');


hamburger.onclick = () => {
  navbar.classList.toggle('open-menu')
  hamburger.classList.toggle('move')
}

const createBikeBox = (bike) => `     <div class="bike-box">
                <img src="${bike.image}" alt="" class="box">
                <div class="title-price">
                    <div class="title-data">
                        <h2>${bike.name}</h2>
                        <p>${bike.type}</p>
                    </div>
                    <h3 class="bike-price"> $${bike.price}<span>hour</span></h3>
                </div>
                <a href="#" class="book-btn">Book Bike</a>
                <span class="tag">
                    ${bike.tag}
                </span>
            </div>
`;


const bikeContent = document.querySelector('.bikes-content');

bikeData.forEach((bike) => {
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend', bikeBoxHtml);
});


// Swiper
var swiper = new Swiper(".destination-container", {
  slidesPerview:1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets:true,
    clickable: true,
  },
  breakpoints:{
    280:{
      slidesPerview: 1,
      spaceBetween: 10,
    },

    320:{
      slidesPerview: 1,
      spaceBetween: 10,
    },

    510:{
      slidesPerview: 2,
      spaceBetween: 10,
    },

    750:{
      slidesPerview: 3,
      spaceBetween: 15,
    },

    900:{
      slidesPerview: 4,
      spaceBetween: 20,
    },
  }
});