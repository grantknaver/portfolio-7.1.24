<template>
    <!-- Header Start -->
    <header>
        <div class="header-area header-transparrent">
            <div class="main-header header-sticky">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- Logo -->
                        <div class="col-xl-2 col-lg-2 col-md-2">
                            <div class="logo">
                                <a href="#"><img style="width: 50px; height: 50px;" src="../assets/img/logo-1.png" alt="logo" /></a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-10">
                            <!-- Main-menu -->
                            <div class="main-menu float-end d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">
                                        <li class="nav-item">
                                            <a class="nav-link transition active" href="#body">
                                                Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link transition" href="#services">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link transition" href="#about">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link transition" href="#resume">Resume</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link transition" href="#works">Works</a>
                                        </li>
                                        <!-- <li class="nav-item">
                                            <a class="nav-link transition" href="#blog">Blog</a>
                                            <ul class="submenu transition">
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Blog Details</a></li>
                                            </ul>
                                        </li> -->
                                        <li class="nav-item">
                                            <a class="nav-link transition" href="#contact">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Header End -->
</template>


<script>
export default {
    name: "Header",
    mounted() {
        /* ================================================= */
        /*	slick Nav
         /* ================================================= */

        /* mobile_menu */

        var menu = $("ul#navigation");
        if (menu.length) {
            menu.slicknav({
                prependTo: ".mobile_menu",
                closedSymbol: "+",
                openedSymbol: "-",
                closeOnClick: true
            });
        }

        /* Smooth Scrolling Using Navigation Menu */

        $('.nav-link[href*="#"]').on("click", function (e) {
            $("html,body").animate(
                {
                    scrollTop: $($(this).attr("href")).offset().top - 70
                },
                500
            );
            e.preventDefault();
        });

        /*  Custom Sticky Menu  */

        $(window).on("scroll", function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $(".header-sticky").removeClass("sticky-bar");
            } else {
                $(".header-sticky").addClass("sticky-bar");
            }
        });

    }
}
</script>

<style scoped>

.logo-restrict {
    height: 50px;
    width: 50px;
}
</style>
