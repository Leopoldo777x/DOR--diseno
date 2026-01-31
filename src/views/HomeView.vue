<script setup lang="ts">
import cvData from "@/data/cv.json";
import Button from "primevue/button";
</script>

<template>
  <div class="grid grid-nogutter surface-section text-800 min-h-screen">
    <div
      class="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center justify-content-center"
    >
      <section>
        <span class="block text-6xl font-bold mb-1">
          Hola, soy
          <span
            class="bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent"
            >{{ cvData.about.name }}</span
          >
        </span>

        <div class="text-4xl text-gray-500 font-bold mb-3 mt-2">
          {{ cvData.about.title }}
        </div>
        <p class="mt-0 mb-4 text-700 line-height-3 text-lg">
          {{ cvData.about.summary }}
        </p>

        <router-link to="/contacto" class="no-underline">
          <Button
            label="Contáctame"
            type="button"
            class="mr-3 hover:scale-105 transition-transform duration-300 shadow-lg shadow-blue-500/50"
          ></Button>
        </router-link>
      </section>
    </div>

    <div
      class="col-12 md:col-6 overflow-hidden flex align-items-center justify-content-center bg-gray-50"
    >
      <img
        :src="cvData.about.photo"
        alt="Foto perfil"
        class="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover border-4 border-white shadow-2xl"
      />
    </div>
  </div>
</template>
