<template>
  <div class="create-view">
    <h1 class="my-5">
      Create Person
    </h1>
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header bg-secondary text-white">
            <h2 class="mb-0">
              Create Person
            </h2>
          </div>
          <div class="card-body">
            <PersonForm @upsert="person => submitPerson(person)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import PersonForm from '@/components/PersonForm.vue';
import { usePersonsStore } from '@/stores/PersonStore';
import { useRouter } from 'vue-router';
import log from '@/utils/logger'

const router = useRouter();

const personStore = usePersonsStore();

const submitPerson = (person) => {
  log('Received person', person);

  if (!person || !person.id) {
        alert('Person data is invalid');
        return;
  }

  personStore.addPerson(person);
  router.push('/');
};
</script>