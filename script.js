$(document).ready(function () {
  $(".site-header").load("navigation.html");
  $(".banner-container").load("banner.html");
  $(".footer-element").load("footer.html");
  // Project 1
  const showMoreButton1 = document.getElementById("show-more-button1");
  const popupOverlay1 = document.getElementById("popup-overlay1");
  const popupContainer1 = document.getElementById("popup-container1");
  const closeButton1 = document.getElementById("close-button1");
  const projectDescription1 = document.querySelector(".project-description1");

  function showPopup1() {
    popupContainer1.innerHTML = projectDescription1.innerHTML;
    popupOverlay1.style.display = "flex";
  }

  function hidePopup1() {
    popupOverlay1.style.display = "none";
  }

  showMoreButton1.addEventListener("click", showPopup1);
  closeButton1.addEventListener("click", hidePopup1);
  popupOverlay1.addEventListener("click", function (event) {
    if (event.target === popupOverlay1) {
      hidePopup1();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup1();
    }
  });

  // Project 2
  const showMoreButton2 = document.getElementById("show-more-button2");
  const popupOverlay2 = document.getElementById("popup-overlay2");
  const popupContainer2 = document.getElementById("popup-container2");
  const closeButton2 = document.getElementById("close-button2");
  const projectDescription2 = document.querySelector(".project-description2");

  function showPopup2() {
    popupContainer2.innerHTML = projectDescription2.innerHTML;
    popupOverlay2.style.display = "flex";
  }

  function hidePopup2() {
    popupOverlay2.style.display = "none";
  }

  showMoreButton2.addEventListener("click", showPopup2);
  closeButton2.addEventListener("click", hidePopup2);
  popupOverlay2.addEventListener("click", function (event) {
    if (event.target === popupOverlay2) {
      hidePopup2();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup2();
    }
  });

  // Project 3
  const showMoreButton3 = document.getElementById("show-more-button3");
  const popupOverlay3 = document.getElementById("popup-overlay3");
  const popupContainer3 = document.getElementById("popup-container3");
  const closeButton3 = document.getElementById("close-button3");
  const projectDescription3 = document.querySelector(".project-description3");

  function showPopup3() {
    popupContainer3.innerHTML = projectDescription3.innerHTML;
    popupOverlay3.style.display = "flex";
  }

  function hidePopup3() {
    popupOverlay3.style.display = "none";
  }

  showMoreButton3.addEventListener("click", showPopup3);
  closeButton3.addEventListener("click", hidePopup3);
  popupOverlay3.addEventListener("click", function (event) {
    if (event.target === popupOverlay3) {
      hidePopup3();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup3();
    }
  });

  // Project 4
  const showMoreButton4 = document.getElementById("show-more-button4");
  const popupOverlay4 = document.getElementById("popup-overlay4");
  const popupContainer4 = document.getElementById("popup-container4");
  const closeButton4 = document.getElementById("close-button4");
  const projectDescription4 = document.querySelector(".project-description4");

  function showPopup4() {
    popupContainer4.innerHTML = projectDescription4.innerHTML;
    popupOverlay4.style.display = "flex";
  }

  function hidePopup4() {
    popupOverlay4.style.display = "none";
  }

  showMoreButton4.addEventListener("click", showPopup4);
  closeButton4.addEventListener("click", hidePopup4);
  popupOverlay4.addEventListener("click", function (event) {
    if (event.target === popupOverlay4) {
      hidePopup4();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup4();
    }
  });

  // Project 5
  const showMoreButton5 = document.getElementById("show-more-button5");
  const popupOverlay5 = document.getElementById("popup-overlay5");
  const popupContainer5 = document.getElementById("popup-container5");
  const closeButton5 = document.getElementById("close-button5");
  const projectDescription5 = document.querySelector(".project-description5");

  function showPopup5() {
    popupContainer5.innerHTML = projectDescription5.innerHTML;
    popupOverlay5.style.display = "flex";
  }

  function hidePopup5() {
    popupOverlay5.style.display = "none";
  }

  showMoreButton5.addEventListener("click", showPopup5);
  closeButton5.addEventListener("click", hidePopup5);
  popupOverlay5.addEventListener("click", function (event) {
    if (event.target === popupOverlay5) {
      hidePopup5();
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hidePopup5();
    }
  });
});
