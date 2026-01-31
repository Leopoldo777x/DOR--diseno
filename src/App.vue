<script setup lang="ts">
import { ref } from "vue";
import Menubar from "primevue/menubar";

const items = ref([
  { label: "Sobre mí", icon: "pi pi-user", to: "/" },
  { label: "Proyectos", icon: "pi pi-folder", to: "/proyectos" },
  { label: "Habilidades", icon: "pi pi-star", to: "/habilidades" },
  { label: "Experiencia", icon: "pi pi-briefcase", to: "/experiencia" },
  { label: "Contacto", icon: "pi pi-envelope", to: "/contacto" },
]);
</script>

<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50">
    <Menubar
      :model="items"
      class="!border-none !rounded-none shadow-md bg-white sticky top-0 z-50"
    >
      <template #start>
        <span class="font-bold text-xl text-blue-600 ml-2 tracking-tight"
          >Mi Portfolio</span
        >
      </template>
      <template #item="{ item, props }">
        <router-link
          v-if="item.to"
          v-slot="{ href, navigate }"
          :to="item.to"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            @click="navigate"
            class="flex items-center px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
          >
            <span :class="[item.icon, 'text-blue-500']" />
            <span class="ml-2 font-medium">{{ item.label }}</span>
          </a>
        </router-link>
      </template>
    </Menubar>

    <div class="flex-grow container mx-auto p-4 md:p-6">
      <RouterView />
    </div>

    <footer class="bg-slate-900 text-white text-center py-6 mt-auto">
      <p class="text-sm opacity-80">
        &copy; {{ new Date().getFullYear() }} Leonardo Rodríguez. Desarrollado
        con Vue 3 + Tailwind CSS.
      </p>
    </footer>
  </div>
</template>

<style>
/* Reset básico opcional */
body {
  margin: 0;
}
</style>
