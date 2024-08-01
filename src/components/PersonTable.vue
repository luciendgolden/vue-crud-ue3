<template>
  <h4>{{ title }}</h4>
  <div class="table-responsive mb-5">
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
</template>

<script setup>
import PersonEntry from '@/components/PersonEntry.vue';

const props = defineProps({
    persons: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    }
})
</script>