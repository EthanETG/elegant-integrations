function getCurrentTimeFormatted() {
  const now = new Date();
  let hours = now.getHours(); // returns hour in 24-hour format (0-23)
  const minutes = now.getMinutes();

  // Determine AM/PM suffix
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours from 24-hour time to 12-hour time
  hours = hours % 12;
  hours = hours ? hours : 12; // if hours equals 0, set it to 12

  // Format minutes to ensure two digits
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  // Combine into final time string
  return hours + ":" + formattedMinutes + " " + ampm;
}

// TODO: Add spinner over form and make all inputs disabled to show loading.

function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
    time: getCurrentTimeFormatted(),
  };

  emailjs.send("service_96oupk5", "template_leintma", templateParams).then(() =>
    document
      .getElementById("success")
      .classList.remove("visually-hidden")
      .catch(() =>
        document.getElementById("fail").classList.remove("visually-hidden")
      )
  );
}
