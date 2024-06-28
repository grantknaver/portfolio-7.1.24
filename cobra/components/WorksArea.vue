<template>
  <!-- Start Works Area -->
  <section class="works-area section-padding sky-blue" id="works">
    <div class="container">
      <!-- Start Section Title -->
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>My Projects</h2>
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
          <!-- <div class="single-work col-lg-4 col-md-6 col-sm-12 all web-design branding">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/angular-animations.png" alt="angular animations" />
              </div>
              <a class="overlay transition" href="https://animations-1be9d.firebaseapp.com/">
                <div class="short-info transition">
                  <h4>Angular Animations</h4>
                  <div class="cat">Personal Project</div>
                </div>
              </a>
            </div>
          </div> -->
          <!-- end single work item -->

          <!-- start single work item -->
          <!-- <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative">
            <div class="position-relative">
              <div class="thumb">
                <img class="image img-fluid" src="../assets/img/not-trello.svg" alt="not trello" />
              </div>
              <a class="overlay transition" href="https://cstrello-client.firebaseapp.com/">
                <div class="short-info transition">
                <h4>Not Trello</h4>
                <div class="cat">Personal Project</div>
              </div>
              </a>
            </div>
          </div> -->
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-md-6 col-sm-12 all branding web-design">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/rxjs.svg" alt="rxjs portfolio" />
              </div>
              <a class="overlay transition" href="https://rxjs-wkwd2p.stackblitz.io/">
                <div class="short-info transition">
                <h4>RxJS</h4>
                <div class="cat">Personal Project</div>
              </div>
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <div class="single-work col-lg-4 offset-lg-1 col-lg col-md-6 col-sm-12 all branding web-design">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/storytaim.svg" alt="rxjs portfolio" />
              </div>
              <a @click="tempAlert()" class="overlay transition tempAlert">
              <div class="short-info">
                <h4>Storytaim</h4>
                <div class="cat">Personal Project (Y Combinator)</div>
              </div>
              </a>
            </div>
          </div>
          <!-- end single work item -->

          <!-- start single work item -->
          <!-- <div class="single-work col-lg-4 col-md-6 col-sm-12 all web-design">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/simon.png" alt="simon" />
              </div>
              <a class="overlay transition" href="https://codepen.io/GrantKnaver/full/OpYYjx"></a>
              <div class="short-info transition">
                <h4>Simon</h4>
                <div class="cat">Personal Project</div>
              </div>
            </div>
          </div> -->
          <!-- end single work item -->

          <!-- start single work item -->
          <!-- <div class="single-work col-lg-4 col-md-6 col-sm-12 all creative">
            <div class="position-relative">
              <div class="thumb">
                <img class="image  img-fluid" src="../assets/img/tic-tac-toe.svg" alt="tic tac toe" />
              </div>
              <a class="overlay transition" href="https://codepen.io/GrantKnaver/full/RpqGpM/"></a>
              <div class="short-info transition">
                <h4>Tic Tac Toe</h4>
                <div class="cat">Personal Project</div>
              </div>
            </div>
          </div> -->
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

  },
  methods: {
    tempAlert() {
      alert('Coming Soon! Waiting on permission from Y Combinator.');
    }
  },
};
</script>
<style scoped>
.tempAlert {
  cursor: pointer;
}
</style>
