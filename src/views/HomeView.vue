<template>
  <div class="home-view">
    <h1 class="my-5">
      Overview
    </h1>
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <PersonEntry
                v-for="(person, index) in persons"
                :key="index"
                :person="person"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { usePersonsStore } from '@/stores/PersonStore';

import PersonEntry from '@/components/PersonEntry.vue';

const personStore = usePersonsStore();

const persons = computed(() => personStore.persons);
</script>
