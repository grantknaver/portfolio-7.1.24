<template>
  <!-- Services Area Start -->
  <section class="service-area section-padding" id="services">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="process-block pl-4">
            <span class="text-uppercase text-sm letter-spacing"
              >My Services</span
            >
            <h2 class="service-title mb-4 mt-3">
              Make Us your Home For Development            
            </h2>
            <p>
              I have mastered the art of software development,
              creating captivating applications that stand out in the digital landscape. 
            </p>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mb-4 mb-lg-0">
                <img class="svg-icon" src="../assets/img/angular-icon.svg" alt="Angular Icon">
                <h4>Angular Development</h4>
                <p>Craft compelling visuals and layouts using Angular infrastructure and ecosystem</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4 mb-4 mb-lg-0">
                <!-- <i class="fa fa-database"></i> -->
                <img class="svg-icon" src="../assets/img/vue-icon.svg" alt="Vue Icon">
                <h4>Vue Development</h4>
                <p>Design captivating visuals and layouts by leveraging the Vue framework and its extensive ecosystem</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center">
                <i class="fa fa-bar-chart"></i>
                <h4>Data Visualization</h4>
                <p>Creating advanced data visualization solutions, transforming complex data into clear, actionable insights</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4">
                <i class="fa fa-mobile"></i>
                <h4>Responsive Design</h4>
                <p>Ensure seamless functionality and appearance across smartphones, tablets, and desktops for a consistent user experience</p>
              </div>
              <!-- End Single Service Block -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Area End -->
</template>

<script>
export default {
  name: "ServiceArea"
};
</script>

<style scoped>

.svg-icon {
  max-width: 70px;
}
</style>
