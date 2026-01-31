<script setup lang="ts">
import type { IProject } from "@/interfaces/types";
import Card from "primevue/card";
import Button from "primevue/button";

defineProps<{
  data: IProject;
}>();
</script>

<template>
  <Card
    class="h-full !shadow-lg hover:!shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white border border-gray-100 rounded-xl overflow-hidden"
  >
    <template #title>
      <div class="text-xl font-bold text-gray-800">{{ data.title }}</div>
    </template>
    <template #content>
      <p class="text-gray-600 leading-relaxed mb-4">
        {{ data.description }}
      </p>
    </template>
    <template #footer>
      <a :href="data.link" target="_blank" rel="noopener">
        <Button
          label="Ver Proyecto"
          icon="pi pi-external-link"
          size="small"
          class="!bg-blue-600 !border-blue-600 hover:!bg-blue-700 w-full md:w-auto"
        />
      </a>
    </template>
  </Card>
</template>
