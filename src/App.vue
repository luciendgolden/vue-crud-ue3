<template>
    <main class="container">
        <h1 class="my-5">Übung: Personen Array</h1>
        <div class="row">
            <div class="col-12 col-md-4 mb-3">
                <div class="bg-light p-3 h-100">
                    <h2>Person anlegen</h2>
                    <PersonForm @upsert="addPerson" />
                    <h2>Aktionen</h2>
                    <div class="d-flex gap-3">
                        <button type="button" class="btn btn-danger" @click="removeLast">Delete last element</button>
                        <button type="button" class="btn btn-danger" @click="removeAll">Delete all</button>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 mb-3">
                <div class="table-responsive">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Vorname</th>
                                <th>Nachname</th>
                                <th>Geburtsjahr</th>
                                <th>Aktionen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <PersonEntry v-for="(person, index) in persons" :key="index" :person="person"
                                @edit="person => editPerson(person, index)" @delete="deletePerson(index)" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import PersonForm from './components/PersonForm.vue';
import PersonEntry from './components/PersonEntry.vue';

const persons = ref([])

function addPerson(person) {
    // check if person is already in the list
    if (persons.value.some(p => p.firstName === person.firstName && p.lastName === person.lastName)) {
        alert('Person already exists')
        return
    }

    // add person to the list
    persons.value.push({
        firstName: person.firstName,
        lastName: person.lastName,
        birthYear: person.birthYear,
    })
}

const editPerson = (person, index) => {
    persons.value[index] = person
}

const deletePerson = (index) => {
    persons.value.splice(index, 1)
}

function removeLast() {
    persons.value.pop()
}

function removeAll() {
    persons.value = []
}
</script>
