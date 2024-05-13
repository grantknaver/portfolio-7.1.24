<template>
    <Header />
    <Footer />
</template>
<script>
export default {
    mounted() {
        /** ------- Pre Loader **/
        $(".preloader-area")
            .delay(200)
            .fadeOut(500);

        $("body").scrollspy({ target: "#navigation", spy: "scroll", offset: 300 });

        /* ================================================= */
        /*    sildeBar scroll
         /* ================================================= */
        $.scrollUp({
            scrollName: "scrollUp",
            topDistance: "300",
            topSpeed: 300,
            animation: "fade",
            animationInSpeed: 200,
            animationOutSpeed: 200,
            scrollText: '<i class="icon-arrow-up"></i>',
            activeOverlay: false
        });

    }
}
</script>