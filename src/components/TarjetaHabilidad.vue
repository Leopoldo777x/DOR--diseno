<script setup lang="ts">
import type { ISkill } from "@/interfaces/types";
import Card from "primevue/card";
import ProgressBar from "primevue/progressbar";

defineProps<{
  data: ISkill;
}>();
</script>

<template>
  <Card
    class="h-full !shadow-md hover:!shadow-lg transition-shadow duration-300 text-center border border-gray-200"
  >
    <template #header>
      <div class="pt-6 flex justify-center">
        <i :class="data.icon" class="text-5xl text-blue-600"></i>
      </div>
    </template>

    <template #title>
      <span class="font-bold text-xl text-gray-800">{{ data.name }}</span>
    </template>

    <template #content>
      <p class="mb-6 text-gray-500 text-sm">
        {{ data.description }}
      </p>

      <div class="text-left px-2">
        <div class="flex justify-between items-center mb-1">
          <span class="text-xs font-semibold text-gray-500 uppercase"
            >Dominio</span
          >
          <span class="text-xs font-bold text-blue-600">{{ data.level }}%</span>
        </div>
        <ProgressBar
          :value="data.level"
          :showValue="false"
          style="height: 6px; background: #e5e7eb"
        />
      </div>
    </template>
  </Card>
</template>
