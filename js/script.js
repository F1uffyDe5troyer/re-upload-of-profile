$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Musician", "Designer", "Freelancer",  "Gamer",  "Memer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "Developer", "Musician", "Designer", "Freelancer", "Gamer",  "Memer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

jQuery(document).ready(function($) {
    var $timeline_block = $('.cd-timeline-block');

    //hide timeline blocks which are outside the viewport
    $timeline_block.each(function() {
        if ($(this).offset().top > $(window).scrollTop() + $(window).height() * 0.75) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
    });

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function() {
        $timeline_block.each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden')) {
                $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
        });
    });
});

// works section
function NewTab() {
  window.open(
    "https://www.geeksforgeeks.org", "_blank");
}

let projects = [
    {
      imgURL: "images/projects/Dark theme.png",
      imgALT: "My Project 1",
      title: "Dark Theme",
      techStack: "HTML/CSS",
      description: "lorem ipsum hello world",
      githubURL: "https://github.com/F1uffyDe5troyer/Project-do-over",
      liveProjectURL: "https://friendly-jennings-1a27d9.netlify.app/",
      
    },
    {
      imgURL: "images/projects/Css animation.png",
      imgALT: "My Project 2",
      title: "CSS Animation",
      techStack: "HTML/CSS",
      description: "lorem ipsum Python",
      githubURL: "#",
      liveProjectURL: "https://eager-beaver-21dff1.netlify.app/"
    },
    {
      imgURL: "images/projects/First Site.png",
      imgALT: "My Project 3",
      title: "First Site",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Nav-bar-website",
      liveProjectURL: "https://sleepy-pare-db86c3.netlify.app/"
    },
    {
      imgURL: "images/projects/E-commerce.png",
      imgALT: "My Project 3",
      title: "Flower E-commerce",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Single-page-site",
      liveProjectURL: "https://quizzical-lumiere-12f95f.netlify.app/"
    },
    {
      imgURL: "images/projects/Calculator.png",
      imgALT: "My Project 3",
      title: "Calculator",
      techStack: "HTML/CSS",
      description: "lorem ipsum JS",
      githubURL: "https://github.com/F1uffyDe5troyer/Calculator",
      liveProjectURL: "https://sleepy-payne-35b730.netlify.app/"
    },
  ];
  
  function createCard(card) {
    let createdCard = `<div class="project-card" techStack=${card.techStack} >
        <img src="${card.imgURL}" alt="${card.imgALT}">
        <h4>${card.title}</h4>
        <h6>${card.techStack}</h6>
        <p>${card.description}</p>
        <a href="${card.githubURL}">Github</a>
        <a href="${card.liveProjectURL}">Live</a>
      </div>
    `;
    return createdCard;
  }
  
  function renderCards() {
    let projectContainer = document.querySelector(".project-container");
    for (project of projects) {
      let card = createCard(project);
      projectContainer.innerHTML += card;
    }
  }
  
  renderCards();
  
  function filterCards(category) {
    let cards = document.getElementsByClassName("project-card");
  
    if (category === "All") {
      for (card of cards) {
        card.style.display = "block";
      }
      return;
    }
  
    for (card of cards) {
      console.log(card);
      card.style.display = "none";
    }
  
    let selectedCards = document.querySelectorAll(`[techStack='${category}']`);
  
    for (card of selectedCards) {
      card.style.display = "block";
    }
  }
  