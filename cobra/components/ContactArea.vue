<template>
  <!-- Start Contact Area -->
  <section class="contact-area section-padding" id="contact">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Contact Me</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <div class="row">
        <div class="col-lg-3 col-md-4 mb-5 mb-lg-0">
          <div class="contact-left">
            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-envelope-letter"></i>
              </div>
              <div class="media-body">
                <h4>Email</h4>
                <span>glkfreelance@gmail.com</span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-screen-smartphone"></i>
              </div>
              <div class="media-body">
                <h4>Phone</h4>
                <span>(541) 288 - 3502</span>
              </div>
            </div>

            <div class="media align-items-center">
              <div class="media-icon">
                <i class="icon-social-linkedin"></i>
              </div>
              <div class="media-body">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/grant-knaver/">Link</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7 offset-lg-2 col-md-8">
          <form
            id="contact-form"
            class="row contact-form"
            action="#"
            method="POST"
          >
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-6">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  placeholder="Your email address"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="subject"
                  placeholder="Enter the discussion title"
                  v-model="subject"
                />
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="form-group">
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  placeholder="Write your message"
                  v-model="message"
                ></textarea>
              </div>
            </div>
            <div class="col-xs-12 col-sm-12">
              <div class="button-field">
                <a href="mailto:indievision.dev@protonmail.com?subject={{subject}}&body={{ message }}">
                  <button type="button" class="btn radius-btn">
                  Send Message now
                </button>
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- End Contact Area -->
</template>

<script>
export default {
  name: "ContactArea",
  data() {
    return {
      subject: '',
      message: ''
    };
  }
};
</script>
