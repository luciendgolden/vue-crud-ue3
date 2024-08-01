<template>
    <tr>
        <td>{{ person.firstName }}</td>
        <td>{{ person.lastName }}</td>
        <td>{{ personAge }}</td>
        <td class="d-flex gap-2">
            <button type="button" class="btn btn-warning" @click="openEditDialog">Edit</button>
            <button type="button" class="btn btn-danger" @click="handleDelete">Delete</button>
        </td>
    </tr>

    <CustomDialog :title="firstAndLastName" :show="isDialogOpen" @update:show="$event => isDialogOpen = $event">
        <template #body>
            <PersonForm :person="person" @upsert="handleEdit" />
        </template>
    </CustomDialog>
</template>

<script setup>
import CustomDialog from './CustomDialog.vue'
import PersonForm from './PersonForm.vue';

import { defineEmits } from 'vue'
import { computed, defineProps, ref } from 'vue'

const props = defineProps(['person'])
const emit = defineEmits(['edit', 'delete'])
const personAge = computed(() => new Date().getFullYear() - props.person.birthYear)

const isDialogOpen = ref(false)

const firstAndLastName = computed(() => `${props.person.firstName} ${props.person.lastName}`)

const openEditDialog = () => {
    isDialogOpen.value = true
}

const handleEdit = (editedPerson) => {
    isDialogOpen.value = false
    emit('edit', editedPerson)
}

const handleDelete = () => {
    emit('delete', props.person)
}
</script>