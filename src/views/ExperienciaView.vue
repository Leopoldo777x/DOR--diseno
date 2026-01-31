<script setup lang="ts">
import cvData from "@/data/cv.json";
import Timeline from "primevue/timeline";
import Card from "primevue/card";
import Button from "primevue/button";

const experience = cvData.experience;
const email = cvData.contact.email;

const downloadPDF = () => {
  window.print();
};
</script>

<template>
  <div class="max-w-4xl mx-auto py-10">
    <div
      class="flex flex-col md:flex-row justify-between items-center mb-10 gap-4 print:hidden"
    >
      <div class="text-center md:text-left">
        <h2 class="text-4xl font-bold text-gray-900">Experiencia Laboral</h2>
        <p
          class="text-gray-500 mt-2 flex items-center justify-center md:justify-start"
        >
          <i class="pi pi-envelope mr-2"></i>{{ email }}
        </p>
      </div>

      <Button
        label="Descargar PDF"
        icon="pi pi-file-pdf"
        @click="downloadPDF"
        severity="help"
        raised
        class="!bg-indigo-600 !border-indigo-600 hover:!bg-indigo-700"
      />
    </div>

    <Timeline :value="experience" align="alternate">
      <template #marker="slotProps">
        <span
          class="flex w-8 h-8 items-center justify-center text-white rounded-full shadow-lg bg-blue-600 z-10"
        >
          <i class="pi pi-briefcase text-sm"></i>
        </span>
      </template>
      <template #content="slotProps">
        <Card class="mb-8 mt-2 shadow-md border-l-4 border-blue-500">
          <template #title>
            <span class="text-xl font-bold text-gray-800">{{
              slotProps.item.company
            }}</span>
          </template>
          <template #subtitle>
            <span class="text-blue-600 font-medium">{{
              slotProps.item.period
            }}</span>
          </template>
          <template #content>
            <p class="font-bold text-gray-700 mb-2">
              {{ slotProps.item.role }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ slotProps.item.details }}
            </p>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>

<style>
@media print {
  /* Ocultamos navegación y botones al imprimir */
  .p-menubar,
  button,
  .print\:hidden {
    display: none !important;
  }
  body {
    background-color: white;
  }
  /* Quitamos sombras y fondos oscuros para ahorrar tinta */
  .shadow-md,
  .shadow-lg {
    box-shadow: none !important;
  }
}
</style>
