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
  <!-- <PriceArea /> -->
  <HireArea />
  <TestimonialArea />
  <!-- <BlogArea /> -->
  <ContactArea />
  <NuxtLayout>
  </NuxtLayout>
</template> 

<script setup lang="ts">
useHead({
  title: 'glkFreelance',
  meta: [
    { name: 'description', content: 'glkFreelance Portfolio' }
  ],
  bodyAttrs: {
    id: 'body'
  },
})
</script>