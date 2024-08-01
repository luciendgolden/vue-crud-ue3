<template>
    <!-- The Modal -->
    <div class="modal" :class="{ 'show d-block': show }" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <!-- Modal Header -->
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button type="button" class="close" @click="handleClose">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <!-- Modal Body -->
                <div class="modal-body">
                    <slot name="body" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    title: String,
    show: Boolean,
})

const emit = defineEmits(['update:show'])

const handleClose = () => {
    emit('update:show', false)
}
</script>

<style scoped>
.modal.show.d-block {
    display: block;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>