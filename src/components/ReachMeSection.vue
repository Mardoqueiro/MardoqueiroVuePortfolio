<template>
  <div class="container-1">
  <div class="row">
    <h1 class="display-1 text-center">Contact Me</h1>
  </div>
  <div class="row">
    <div class="col-lg-6">
      <div class="contact-info">
        <h2>Contact Details</h2>
        <p><i class="bi bi-telephone"></i> Phone: +27 69 587 2540</p>
        <p><i class="bi bi-envelope-at"></i> Email: mordecai.dimbu@gmail.com</p>
        <p><i class="bi bi-geo-alt"></i> Address: Parow, Cape Town 7500</p>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="contact-form">
        <form action="https://www.formbackend.com/f/8ef8442d15f3fa15" method="POST">
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Full Name" required>
          <label for="email"></label>
          <input type="email" id="email" name="email" placeholder="Email Address" required>
          <label for="message"></label>
          <textarea id="message" name="message" placeholder="Enter Message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</div>
</template>
