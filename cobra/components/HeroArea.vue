<template>
    <!-- Welcome Area Start -->
    <section class="hero-area sky-blue d-flex align-items-center">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <!-- Start Hero Caption -->
                    <div class="hero-caption">
                        <span class="subheading">Hey! I am</span>
                        <h1>Grant Knaver !</h1>
                        <div>
                            I'm a
                            <div id="typed-strings">
                                <!-- Animated Text Writer -->
                                <span>Freelancer.</span>
                                <span>Vue Developer.</span>
                                <span>Angular Developer.</span>
                            </div>
                            <span class="LR-C" id="typed" style="white-space:pre;"></span>
                        </div>
                        <p>
                            Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
                            eiusm tempor incididunt ulabore et dolore magna aliqua.
                        </p>
                        <a href="#" class="btn radius-btn">Download</a>
                    </div>
                    <!-- End Hero Caption -->
                </div>
                <div class="col-lg-6 d-none d-lg-block">
                    <!-- Hero Right Image -->
                    <div class="hero-img">
                        <img src="https://via.placeholder.com/500x716" alt="Hero image" />
                    </div>
                </div>
            </div>
        </div>

        <!-- Hero Animated Shape -->
        <div class="hero-shape custom-animation">
            <img src="/img/hero/hero-shape.png" alt="animation shape" />
        </div>
    </section>
    <!-- Welcome Area End -->
</template>

<script>
export default {
    name: "HeroArea",
    mounted() {
        /**
       * =======================================
       * typed.js customize
       * =======================================
       */

        $("#typed").typed({
            stringsElement: $("#typed-strings"),
            typeSpeed: 100,
            backDelay: 1000,
            loop: true,
            contentType: "html", // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function () {
                foo();
            },
            resetCallback: function () {
                newTyped();
            }
        });

        $(".reset").click(function () {
            "use strict";
            $("#typed").typed("reset");
        });

        function newTyped() {
            "use strict" /* A new typed object */;
        }

        function foo() {
            "use strict";
            console.log("Cobra");
        }
    }
};
</script>
