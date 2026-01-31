<script setup lang="ts">
import cvData from "@/data/cv.json";
import TarjetaProyecto from "@/components/TarjetaProyecto.vue";
import type { IProject } from "@/interfaces/types";

const projects: IProject[] = cvData.projects;
</script>

<template>
  <div class="py-10">
    <h2
      class="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500"
    >
      Mis Proyectos
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(project, index) in projects" :key="index">
        <TarjetaProyecto :data="project" />
      </div>
    </div>
  </div>
</template>
