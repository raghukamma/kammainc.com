$(document).ready(function () {
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

  // Add the content to the about-paragraph-content div
  if ($("#about-paragraph-content .container").length > 0) {
    return; // Exit the function if the content is already present
  }
  const container = $("<section>").addClass("container");
  const p = $("<p>").addClass("bio");
  const heading1 = $("<h1>")
    .addClass("about-title")
    .text("Hello! Welcome to Kamma Inc.")
    .css({
      "font-weight": "bold",
      "font-size": "25px",
      color: "var(--orange)",
    });
  const heading2 = $("<h3>").text("Hi, I'm Raghu Kamma (He/Him)");

  const paragraph = $("<p>").addClass("about-paragraph")
    .html(`I help build state of the art audio solutions at Skyworks Solutions. 
      Most of these audio solutions end up in the hands of consumers to 
      experience the lowest latency in the industry, noise 
      cancellation/suppression is done using AI/ML algorithms. <br><br>
      
      Developing these world class audio solutions has been an interesting 
      part of my career for the past couple of years. I'm a hardware and 
      firmware engineer. Being familiar with both the hardware and software 
      allows me to design both to work together seamlessly. <br><br>
      
      I also lead compliance efforts for various products - host software 
      stacks, applications, RF, Integrated Circuits designed for mixed signal 
      solutions. <br><br>
      
      I've worked as a project manager as well - responsible for managing the 
      cost, schedule, scope, risk, integration, quality, and resources. 
      Successfully delivered ~20 embedded products as a project manager within 
      the planned cost and schedule over the last 9 years of my professional 
      career. <br><br>
      
      Results oriented engineer with broad engineering experience and a proven 
      record of business achievements. Accomplished business objectives by 
      leading technical/business personnel and development/coaching of 
      collaborative teams. Interested in new product line development, product 
      strategy, organizational development, AI, and ML technologies. <br><br>
      
      I did my undergrad in Electrical & Electronics Engineering. I am 
      currently up-skilling my CS skills along with learning AI & ML concepts 
      in the CS department at the Portland State`);

  // Insert the generated content into the desired location
  $("#about-paragraph-content").append(container);
  container.append(p);
  p.append(heading1);
  p.append(heading2);
  p.append(paragraph);

  container.css({
    "margin-left": "auto",
    "margin-right": "auto",
    "padding-left": "10%",
    "padding-right": "10%",
  });

  p.css({
    "text-align": "left",
    margin: "20px auto",
    "max-width": "800px",
  });
});
