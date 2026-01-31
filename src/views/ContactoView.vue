<script setup lang="ts">
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import { ref } from "vue";

const form = ref({ name: "", email: "", message: "" });

const sendMessage = () => {
  alert(`¡Gracias ${form.value.name}! Mensaje enviado`);
  form.value = { name: "", email: "", message: "" };
};
</script>

<template>
  <div class="flex justify-center items-center min-h-[80vh] py-10">
    <div
      class="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg border border-gray-100"
    >
      <div class="text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-2">Contáctame</h2>
        <p class="text-gray-500">¿Tienes alguna propuesta o duda?</p>
      </div>

      <div class="space-y-6">
        <div class="flex flex-col gap-2">
          <label for="name" class="font-semibold text-gray-700">Nombre</label>
          <InputText
            id="name"
            v-model="form.name"
            class="w-full !p-3"
            placeholder="Tu nombre"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="email" class="font-semibold text-gray-700">Email</label>
          <InputText
            id="email"
            v-model="form.email"
            class="w-full !p-3"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label for="msg" class="font-semibold text-gray-700">Mensaje</label>
          <Textarea
            id="msg"
            v-model="form.message"
            rows="5"
            class="w-full !p-3"
            placeholder="Escribe tu mensaje aquí..."
          />
        </div>

        <Button
          label="Enviar Mensaje"
          icon="pi pi-send"
          class="w-full !bg-blue-600 !border-blue-600 hover:!bg-blue-700 !py-3 !font-bold"
          @click="sendMessage"
        ></Button>
      </div>
    </div>
  </div>
</template>
