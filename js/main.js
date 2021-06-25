$(function () {
  /*======================= SHOW/HIDE NAV-MENU =========================*/
  const navMenu = $("#nav-menu");

  $("#nav-toggle").on("click", function () {
    navMenu.addClass("show-menu");
  });

  $("#nav-close").on("click", function () {
    navMenu.removeClass("show-menu");
  });

  $(".nav-link").each(function (index, element) {
    // element == this
    $(element).on("click", function () {
      navMenu.removeClass("show-menu");
    });
  });

  /*=========== CHANGE HEADER BACKGROUND WHEN SCROLLING ===================*/
  $(window).on("scroll", function () {
    if (window.scrollY >= 100) {
      $(".header").addClass("scroll-header");
    } else {
      $(".header").removeClass("scroll-header");
    }
  });

  /*------------------- TOGGLE SHOW SCROLLUP -------------------*/
  $(window).on("scroll", function () {
    if (window.scrollY >= 200) {
      $("#scrollup").addClass("show-scrollup");
    } else {
      $("#scrollup").removeClass("show-scrollup");
    }
  });

  /*=========================== SCROLL SECTION ACTIVE LINK ===========================*/
  // $(window).on("scroll", function () {
  //   document.querySelectorAll(".section").forEach((secToActive) => {
  //     if (
  //       window.scrollY >= secToActive.offsetTop - 50 &&
  //       window.scrollY < secToActive.offsetTop + secToActive.offsetHeight - 50
  //     ) {
  //       document.querySelectorAll(".section").forEach((secToDeactive) => {
  //         secToDeactive.classList.remove("active-section");
  //       });
  //       secToActive.classList.add("active-section");

  //       /*------------------- ACTIVE ASSOCIATED NAV-LINK -------------------*/
  //       document.querySelectorAll(".nav-link").forEach((link) => {
  //         link.classList.remove("active-link");
  //       });
  //       // check if there is a link into the the nav menu for this section
  //       const linkToActive = document.querySelector(
  //         `.nav-link[href="#${secToActive.getAttribute("id")}"]`
  //       );
  //       if (linkToActive) linkToActive.classList.add("active-link");
  //     }
  //   });
  // });

  // JQuery Version :) ------------------------------------
  $(window).on("scroll", function () {
    $(".section").each(function (index, sec) {
      const scroll = $(window).scrollTop();
      const secTop = $(sec).offset().top;
      const secHeight = $(sec).height();
      if (scroll >= secTop - 50 && scroll < secTop + secHeight - 50) {
        $(".section").each(function () {
          $(this).removeClass("active-link");
        });

        $(sec).addClass("active-link");

        $(".nav-link").each(function () {
          $(this).removeClass("active-link");
        });

        const link_to_active = $(`.nav-link[href="#${$(sec).attr("id")}"]`);
        if (link_to_active) {
          link_to_active.addClass("active-link");
        }
      }
    });
  });

  /*=========================== SWIPPER DISCOVER ================================*/
  var swiper = new Swiper(".discover-cards", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });

  /*=========================== VIDEO Play/Pause ==============================*/
  //NOTE: don't select video file with jquery, becuase it will not identify its props or methods.
  const video = document.getElementById("video-file");
  $(".video-button").on("click", function () {
    if (video.paused) {
      video.play();
      $(".video-icon").removeClass("ri-play-line");

      $(".video-icon").addClass("ri-pause-line");
    } else {
      video.pause();
      $(".video-icon").removeClass("ri-pause-line");
      $(".video-icon").addClass("ri-play-line");
    }
  });

  /*=========================== DARK THEME TOGGLE ===========================*/
  $(".theme-icon").on("click", function () {
    $(this).toggleClass("ri-moon-line ri-sun-line");
    $("body").toggleClass("dark-theme");
  });

});

/*=========================== SCROLL REVEAL ANIMATION ===========================*/
const sr = ScrollReveal({
  distance: "60px",
  duration: 2800,
  // reset: true,
});

sr.reveal(
  `.home-data ,.social-link, .home-info,
  .discover .container,
  .experience .data, .experience .img-mask,
  .video .desription,
  .places .image-group,
  .sponser,
  .footer > *`,
  {
    origin: "top",
    interval: 100,
  }
);

sr.reveal(
  `.about .data,
  .subscribe .description`,
  {
    origin: "left",
  }
);
sr.reveal(
  `.about .img-overlay,
  .video .video-group,
  .subscribe-form`,
  {
    origin: "right",
  }
);
