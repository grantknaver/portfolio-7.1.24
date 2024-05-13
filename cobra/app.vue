<template>
  <!-- Start Preloader Area -->
  <div class="preloader-area">
    <div class="loader">
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
      <div class="loader-inner"></div>
    </div>
  </div>
  <!-- End Preloader Area -->
  <HeroArea />
  <ServiceArea />
  <AboutArea />
  <ResumeArea />
  <WorksArea />
  <PriceArea />
  <HireArea />
  <TestimonialArea />
  <BlogArea />
  <ContactArea />
  <NuxtLayout>
  </NuxtLayout>
</template> 

<script setup lang="ts">
useHead({
  title: 'Cobra Nuxt js Portfolio Template',
  meta: [
    { name: 'description', content: 'Cobra is Nuxt 3 Personal Portfolio Template' }
  ],
  bodyAttrs: {
    id: 'body'
  },
})
</script>