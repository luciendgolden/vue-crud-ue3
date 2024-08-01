import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonsStore = defineStore('persons', () => {
    const persons = ref([])

    const addPerson = (person) => {
        if (!person || !person.id) {
            console.error('Invalid person data', person);
            return;
        }

        // check if person is already in the list
        if (persons.value.find(p => p.id === person.id)) {
            alert('Person already exists')
            return
        }

        persons.value.push(person)
    }

    const removePerson = (id) => {
        persons.value = persons.value.filter(p => p.id !== id)
    }

    const updatePerson = (id, person) => {
        const index = persons.value.findIndex(p => p.id === id)
        if (index !== -1) {
            persons.value[index] = person
        }
    }

    return {
        persons,
        addPerson,
        updatePerson,
        removePerson,
    }
})
