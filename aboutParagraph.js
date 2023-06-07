$(document).ready(function () {
  if ($("#about-paragraph-content .container").length > 0) {
    return;
  }
  const container = $("<section>").addClass("container");
  const heading1 = $("<h1>")
    .addClass("about-title")
    .text("Welcome to Kamma Inc.")
    .css({
      "font-weight": "bold",
      "font-size": "25px",
      color: "var(--orange)",
      "text-align": "center",
    });
  const introLine = $("<p>")
    .addClass("about-intro")
    .text("Hi, I'm Raghu Kamma (He/Him)")
    .css({
      "font-weight": "bold",
      "font-size": "16px",
      color: "var(--black)",
      "text-align": "left",
    });

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

  $("#about-paragraph-content").append(container);
  container.append(heading1);
  container.append(introLine);
  container.append(paragraph);

  container.css({
    "padding-left": "5%",
    "padding-right": "5%",
    "text-align": "left",
    margin: "20px auto",
    "max-width": "800px",
  });
});
