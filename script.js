const bookTableForm = document.querySelector("#book-a-table form");

bookTableForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Retrieve form data
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const date = document.querySelector("#date").value;
  const time = document.querySelector("#time").value;
  const guests = document.querySelector("#guests").value;

  // Do something with the form data (e.g. send it to a server, display a confirmation message)
  console.log(
    `Name: ${name}, Email: ${email}, Date: ${date}, Time: ${time}, Guests: ${guests}`
  );

  // Clear the form fields
  bookTableForm.reset();
});
