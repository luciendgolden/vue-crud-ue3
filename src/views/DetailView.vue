<template>
  <div class="detail-view">
    <h1 class="my-5">
      Person Details
    </h1>
    <div
      v-if="person"
      class="row"
    >
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header bg-secondary text-white">
            <h2 class="mb-0">
              User {{ person.id }}
            </h2>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-6">
                <strong>FirstName:</strong>
              </div>
              <div class="col-6">
                {{ person.firstName }}
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <strong>LastName:</strong>
              </div>
              <div class="col-6">
                {{ person.lastName }}
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <strong>Age:</strong>
              </div>
              <div class="col-6">
                {{ personAge }}
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-end">
              <button
                type="button"
                class="btn btn-warning"
                @click="openEditDialog"
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="handleDelete"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CustomDialog
    :title="firstAndLastName"
    :show="isDialogOpen"
    @update:show="$event => isDialogOpen = $event"
  >
    <template #body>
      <PersonForm
        :person="person"
        @upsert="handleEdit"
      />
    </template>
  </CustomDialog>
</template>
  
<script setup>
import { ref, computed, watch } from 'vue'
import { usePersonsStore } from '@/stores/PersonStore'
import { useRouter, useRoute } from 'vue-router'
import log from '@/utils/logger'

import CustomDialog from '@/components/CustomDialog.vue'
import PersonForm from '@/components/PersonForm.vue';


const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
})

const personStore = usePersonsStore()
const router = useRouter()
const route = useRoute()

const isDialogOpen = ref(false)

const personId = computed(() => parseInt(route.params.id))
const person = computed(() => personStore.persons.find(person => person?.id === personId.value))
const personAge = computed(() => person.value ? new Date().getFullYear() - person.value.birthYear : 0)
const firstAndLastName = computed(() => person.value ? `${person.value.firstName} ${person.value.lastName}` : '')

// watch for changes in person dialog
watch(person, (newPerson, oldPerson) => {
  if (newPerson) {
    log('Person changed from', oldPerson, 'to', newPerson)
  } else {
    log('Person was deleted')
    router.push('/')
  }
}, { immediate: true })

const openEditDialog = () => {
    isDialogOpen.value = true
}

const handleEdit = (editedPerson) => {
    isDialogOpen.value = false
    personStore.updatePerson(personId.value, editedPerson)
}

const handleDelete = () => {
    personStore.removePerson(personId.value)
}
</script>