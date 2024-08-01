<template>
    <form @submit.prevent="handleSubmit" class="mb-4">
        <label class="d-block mb-3">
            <span class="form-label">Firstname</span>
            <input type="text" name="firstName" class="form-control" v-model="firstName" required>
        </label>
        <label class="d-block mb-3">
            <span class="form-label">Lastname</span>
            <input type="text" name="lastName" class="form-control" v-model="lastName" required>
        </label>
        <label class="d-block mb-3">
            <span class="form-label">Birthyear</span>
            <input type="number" step="1" name="birthYear" class="form-control" v-model.model="birthYear" required>
        </label>
        <button type="submit" class="btn" :class="buttonClass">{{ upsertBtnText }}</button>
    </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

const emit = defineEmits(['upsert'])

const upsertBtnText = computed(() => (props.person ? 'Edit Person' : 'Add Person'))
const buttonClass = computed(() => (props.person ? 'btn-warning' : 'btn-success'))

const props = defineProps({
    person: {
        type: Object,
        required: false,
    },
})

const firstName = ref('')
const lastName = ref('')
const birthYear = ref(null)

watch(() => props.person, (prefilledPerson) => {
    if (prefilledPerson) {
        firstName.value = prefilledPerson.firstName
        lastName.value = prefilledPerson.lastName
        birthYear.value = prefilledPerson.birthYear
    }
}, { immediate: true })

const handleSubmit = () => {
    emit('upsert', {
        firstName: firstName.value,
        lastName: lastName.value,
        birthYear: birthYear.value,
    })

    firstName.value = ''
    lastName.value = ''
    birthYear.value = null
}
</script>