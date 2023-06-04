$(document).ready(function () {
  if ($("#about-paragraph-content .container").length > 0) {
    return; // Exit the function if the content is already present
  }
  const container = $("<section>").addClass("container");
  const p = $("<p>").addClass("bio");
  const heading1 = $("<h1>")
    .addClass("about-title")
    .text("Hello! Welcome to Kamma Inc.")
    .css({ "font-weight": "bold", "font-size": "25px" });
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
  });

  p.css({
    "text-align": "left",
    margin: "20px auto",
    width: "500px",
  });
});
