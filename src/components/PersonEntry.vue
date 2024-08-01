<template>
  <tr>
    <td>{{ person.id }}</td>
    <td>{{ person.firstName }}</td>
    <td>{{ person.lastName }}</td>
    <td>{{ personAge }}</td>
    <td class="d-flex gap-2">
      <button
        type="button"
        class="btn btn-outline-primary"
        @click="goToDetailView"
      >
        Details
      </button>
    </td>
  </tr>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  person: {
    type: Object,
    default: null
  }
})

const personAge = computed(() => new Date().getFullYear() - props.person.birthYear)


const goToDetailView = () => {
  router.push({ path: `/users/${props.person.id}` })
}
</script>