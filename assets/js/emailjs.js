emailjs.init("_eZL6SN5G4v0Iukf2");

var submit = document.getElementById("contact-form");

submit.addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    subject: form.subject.value,
    message: form.message.value,
    time: new Date().toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  const serviceID = "service_vo7cxx6";
  const templateID = "template_iy9e2yh";

  emailjs
    .send(serviceID, templateID, formData)
    .then(() => {
      alert("Message sent successfully!");
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for your message! I'll get back to you soon.",
        icon: "success",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
      }).then(() => {
        form.reset();
      });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      Swal.fire({
        title: "Error Sending",
        text: "Your message couldn't be sent. You can try again later or email me directly at diegobarreto@gmail.com",
        icon: "error",
        timer: 5000,
        timerProgressBar: true,
        confirmButtonText: "Understood",
      });
    });
});
