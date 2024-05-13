// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700,900",
        },

        { rel: "stylesheet", href: "css/bootstrap.min.css" },
        { rel: "stylesheet", href: "css/font-awesome.min.css" },
        { rel: "stylesheet", href: "css/simple-line-icons.css" },
        { rel: "stylesheet", href: "css/slicknav.css" },
        { rel: "stylesheet", href: "css/owl.carousel.min.css" },
        { rel: "stylesheet", href: "css/slick.css" },
        { rel: "stylesheet", href: "css/style.css" },
        { rel: "stylesheet", href: "css/responsive.css" },
      ],
      script: [
        { src: "js/jquery-3.2.0.min.js", tagPosition: 'bodyClose' },
        { src: "js/jquery.slicknav.min.js", tagPosition: 'bodyClose' },
        { src: "js/isotope.pkgd.min.js", tagPosition: 'bodyClose' },
        { src: "js/owl.carousel.min.js", tagPosition: 'bodyClose' },
        { src: "js/slick.min.js", tagPosition: 'bodyClose' },
        { src: "js/typed.js", tagPosition: 'bodyClose' },
        { src: "js/jquery.scrollUp.min.js", tagPosition: 'bodyClose' },
        { src: "js/popper.min.js", tagPosition: 'bodyClose' },
        { src: "js/bootstrap.min.js", tagPosition: 'bodyClose' },
      ],
    },
  },
});
