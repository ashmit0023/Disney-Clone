let movies = [
    {
      name: "falcon and the winter soldier",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atquemagnamSoluta accusamus praesentium hic officiis numquam velit",
      image: "images/slider 2.PNG"
    },
    {
      name: "Loki",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atquemagnamSoluta accusamus praesentium hic officiis numquam velit",
      image: "images/slider 1.PNG"
    },
    {
      name: "Wanda Vision",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atquemagnamSoluta accusamus praesentium hic officiis numquam velit",
      image: "images/slider 3.PNG"
    },
    {
      name: "Raya and the Last dragon",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atquemagnamSoluta accusamus praesentium hic officiis numquam velit",
      image: "images/slider 4.PNG"
    },
    {
      name: "Luca",
      des:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, atquemagnamSoluta accusamus praesentium hic officiis numquam velit",
      image: "images/slider 5.PNG"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // create dom elements
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all the elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting up the elements classnames
    slide.className = "slider";
    content.className = "slider-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  // Video Card
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((items) => {
    items.addEventListener("mouseover", () => {
      let video = items.children[1];
      video.play();
    });
    items.addEventListener("mouseleave", () => {
      let video = items.children[1];
      video.pause();
    });
  });
  
  // card sliders
  
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  