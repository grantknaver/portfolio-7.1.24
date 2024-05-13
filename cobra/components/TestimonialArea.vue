<template>
  <!-- Start Testimonial Area -->
  <section class="testimonial-area section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 col-md-12">
          <!-- start testimonial carousel -->
          <div class="test-slider">
            <!-- start tetimonial item -->
            <div class="test-item">
              <p>
                "Produces quality, is easy to work with, and thinks outside the box."
              </p>
              <div class="author-info">
                <img src="https://via.placeholder.com/50x50" alt="client" />
                <h4>Lisa Copeland</h4>
                <div class="position">
                  Senior Developer - Democracy Now
                </div>
              </div>
            </div>
            <!-- end tetimonial item -->

            <!-- start tetimonial item -->
            <div class="test-item">
              <p>
                "Easy to corroborate with and picks up stuff fast."
              </p>
              <div class="author-info">
                <img src="https://via.placeholder.com/50x50" alt="client" />
                <h4>James Knippel</h4>
                <div class="position">
                  Senior Developer - Lockheed Martin
                </div>
              </div>
            </div>
            <!-- end tetimonial item -->

            <!-- start tetimonial item -->
            <div class="test-item">
              <p>
                "Dependable and fast, has no problems with deadlines."
              </p>
              <div class="author-info">
                <img src="https://via.placeholder.com/50x50" alt="client" />
                <h4>Bryce Morrison</h4>
                <div class="position">
                  CEO - MorrHeat
                </div>
              </div>
            </div>
            <!-- end tetimonial item -->

            <!-- start tetimonial item -->
            <!-- <div class="test-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur leo est, feugiat nec elementum id, suscipit id nulla.
                Nulla sit amet luctus dolor. Etiam finibus consequat ante ac
                congue. Quisque porttitor porttitor tempus.
              </p>
              <div class="author-info">
                <img src="https://via.placeholder.com/50x50" alt="client" />
                <h4>Karim Ezzat</h4>
                <div class="position">
                  Project Manager
                  <span>Facebook</span>
                </div>
              </div>
            </div> -->
            <!-- end tetimonial item -->
          </div>
          <!-- end testimonial carousel -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Testimonial Area -->
</template>

<script>
export default {
  name: "TestimonialArea",
  mounted() {
    /* ================================================= */
    /*	Testimonial Slider
       /* ================================================= */

    $(".test-slider").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });
  }
};
</script>
