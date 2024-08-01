<template>
  <div class="home-view">
    <h1 class="my-5">
      Overview
    </h1>
    <div
      v-if="persons"
      class="row"
    >
      <div class="col-12">
        <PersonTable
          :persons="adults"
          title="Adults"
        />
        <PersonTable
          :persons="children"
          title="Children"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePersonsStore } from '@/stores/PersonStore';
import PersonTable from '../components/PersonTable.vue';

const personStore = usePersonsStore();

const persons = computed(() => personStore.persons);

const adults = computed(() => persons?.value?.filter(person => person.birthYear < new Date().getFullYear() - 18));
const children = computed(() => persons?.value?.filter(person => person.birthYear >= new Date().getFullYear() - 18));
</script>
