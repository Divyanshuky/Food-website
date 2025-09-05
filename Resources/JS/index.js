$(document).ready(function () {

  $(".nav-links a, .btn").click(function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: $(this.hash).offset().top - 60,
        },
        800
      );
    }
  });


  function onEntry(entry) {
    entry.forEach((change) => {
      if (change.isIntersecting) {
        $(change.target).addClass("visible animate__animated animate__fadeInUp");
      }
    });
  }
  const options = { threshold: [0.2] };
  const observer = new IntersectionObserver(onEntry, options);
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });

  // Contact Form Submission with data collection
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }


    console.log("Contact Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thanks, " + name + "! We'll contact you soon.");
    this.reset();
  });

  setInterval(function () {
    let slider = $(".slider");
    if (slider.length) {
      slider.animate({ scrollLeft:
