<script setup lang="ts">
import ILink from "@/components/UI/ILink/ILink.vue";
import IFooter from "@/components/UI/IFooter/IFooter.vue";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <section
      class="hero py-16 bg-custom-300 text-white flex-1 flex items-center justify-center flex-col"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center gap-8 mb-6">
          <h1 class="text-5xl font-bold">Lorem sit!</h1>
          <code class="text-2xl bg-custom-200 px-3 py-1 rounded-lg">
            VariantB
          </code>
        </div>

        <p class="text-xl mb-8">Lorem, ipsum dolor elit.</p>

        <ILink
          href="#Lorem"
          class="bg-white text-custom-300 py-2 px-4 rounded hover:bg-gray-100 transition duration-200"
        >
          Lorem ipsum dolor
        </ILink>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-4xl font-bold text-center mb-12">Lorem!!!!!!!!!!!!</h2>
        <ul class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <li class="text-center">
            <h3 class="text-xl font-bold mb-4">Lorem, ipsum dolor</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quibusdam libero, laudantium vel sequi sunt odit. Illo quis
              accusantium
            </p>
          </li>
          <li class="text-center">
            <h3 class="text-xl font-bold mb-4">Lorem, ipsum dolor</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quibusdam libero, laudantium vel sequi sunt odit. Illo quis
              accusantium a, cum numquam quo similique alias soluta nobis vitae,
              saepe dolorem.
            </p>
          </li>
          <li class="text-center">
            <h3 class="text-xl font-bold mb-4">Lorem, ipsum dolor</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </li>
        </ul>
      </div>
    </section>

    <section id="Lorem" class="py-16 bg-neutral-100">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-6">Lorem ipsum dolor</h2>
        <p class="text-center text-lg">Lorem ipsum dolor sit amet,</p>
      </div>
    </section>

    <IFooter class="bg-custom-300 text-white text-center p-6" />
  </div>
</template>

<style scoped lang="scss"></style>
