<template>
  <form
    class="mb-4"
    @submit.prevent="handleSubmit"
  >
    <label class="d-block mb-3">
      <span class="form-label">#</span>
      <input
        v-model="localPerson.id"
        type="number"
        step="1"
        name="id"
        class="form-control"
        required
        readonly
      >
    </label>
    <label class="d-block mb-3">
      <span class="form-label">Firstname</span>
      <input
        v-model="localPerson.firstName"
        type="text"
        name="firstName"
        class="form-control"
        required
      >
    </label>
    <label class="d-block mb-3">
      <span class="form-label">Lastname</span>
      <input
        v-model="localPerson.lastName"
        type="text"
        name="lastName"
        class="form-control"
        required
      >
    </label>
    <label class="d-block mb-3">
      <span class="form-label">Birthyear</span>
      <input
        v-model="localPerson.birthYear"
        type="number"
        step="1"
        name="birthYear"
        class="form-control"
        required
      >
    </label>
    <button
      type="submit"
      class="btn"
      :class="buttonClass"
    >
      {{ upsertBtnText }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import log from '@/utils/logger'

const emit = defineEmits(['upsert'])

const props = defineProps({
    person: {
        type: Object,
        required: false,
        default: null,
    },
})

const localPerson = ref({
  id: Math.round(Math.random() * 100000),
  firstName: '',
  lastName: '',
  birthYear: null,
})

const upsertBtnText = computed(() => (props.person ? 'Edit Person' : 'Add Person'))
const buttonClass = computed(() => (props.person ? 'btn-warning' : 'btn-success'))

watch(() => props.person, (existingPerson) => {
    if (existingPerson) {
        log('Existing person is watched:', existingPerson)
        localPerson.value = { ...existingPerson }
    } else {
        log('No existing person is watched')
        localPerson.value = {
            id: Math.round(Math.random() * 100000),
            firstName: '',
            lastName: '',
            birthYear: null,
        }
    }
}, { immediate: true })

const handleSubmit = () => {
  if (!localPerson.value.id || !localPerson.value.firstName || !localPerson.value.lastName || !localPerson.value.birthYear) {
        alert('All fields are required');
        return;
    }

    emit('upsert', localPerson.value);

    if (!props.person) {
        localPerson.value = {
            id: Math.round(Math.random() * 100000),
            firstName: '',
            lastName: '',
            birthYear: null,
        }
    }
}
</script>