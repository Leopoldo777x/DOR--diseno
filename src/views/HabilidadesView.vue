<script setup lang="ts">
import cvData from "@/data/cv.json";
import TarjetaHabilidad from "@/components/TarjetaHabilidad.vue";
import type { ISkill } from "@/interfaces/types";

const skills: ISkill[] = cvData.skills;
</script>

<template>
  <div class="py-10">
    <h2 class="text-4xl font-extrabold text-center mb-12 text-gray-800">
      Habilidades <span class="text-blue-600">Técnicas</span>
    </h2>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      <div v-for="(skill, index) in skills" :key="index">
        <TarjetaHabilidad :data="skill" />
      </div>
    </div>
  </div>
</template>
