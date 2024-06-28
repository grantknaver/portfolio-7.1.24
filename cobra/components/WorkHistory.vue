<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Work History</h2>
          </div>
        </div>
      </div>
      <!-- End Section Title -->

      <!-- <div class="row mb-4">
        <div class="col-xs-12">
          <div class="filters">
            <ul>
              <li class="active" data-filter=".all">All</li>
              <li data-filter=".branding">Branding</li>
              <li data-filter=".creative">Creative Work</li>
              <li data-filter=".web-design">Web Design</li>
            </ul>
          </div>
        </div>
      </div> -->
      <div class="filters-content">
        <div class="row grid">

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="thumb">
              <a href="https://www.amtrak.com/home">
                <img class="image img-fluid" src="../assets/img/amtrak.svg" alt="Amtrak" />
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="thumb">
              <a href="https://www.lockheedmartin.com/en-us/index.html">
                <img class="image img-fluid" src="../assets/img/lockheed-martin.svg" alt="Lockheed Martin" />
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="thumb">
              <a href="https://www.labcorp.com/">
                <img class="image img-fluid" src="../assets/img/labcorp.png" alt="Labcorp" />
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="thumb">
              <a href="https://www.ornl.gov/">
                <img class="image img-fluid" src="../assets/img/ornl.png" alt="ORNL" />
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="thumb">
              <a href="https://gametimehero-coming-soon.web.app/">
                <img class="image img-fluid" src="../assets/img/gametime-hero.png" alt="Gametime Hero" />
              </a>
            </div>
          </div>
          <!-- end single work item -->


          <!-- start single work item -->
          <!-- <div class="single-work col-lg-4 col-md-6 col-sm-12 all branding">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/recipes.png" alt="recipes" />
              </div>
              <a class="overlay transition" href="https://recipebook-77068.firebaseapp.com/"></a>
              <div class="short-info transition">
                <h4>Recipes</h4>
                <div class="cat">Personal Project</div>
              </div>
            </div>
          </div> -->
          <!-- end single work item -->
        </div>
      </div>
    </div>
  </section>
  <!-- End Works Area -->
</template>

<script>
export default {
  name: "WorksArea",
  mounted() {
    /* ================================================= */
    /*	Works Area Filter js
     /* ================================================= */
    $(".filters ul li").on("click", function () {
      $(".filters ul li").removeClass("active");
      $(this).addClass("active");

      var data = $(this).attr("data-filter");
      $grid.isotope({
        filter: data
      });
    });
    if (document.getElementById("works")) {
      var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
          columnWidth: ".all"
        }
      });
    }

  }
};
</script>
