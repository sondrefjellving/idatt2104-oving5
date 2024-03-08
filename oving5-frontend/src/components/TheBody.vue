<script setup>
import { ref } from 'vue'

let response = ref("");
let input = ref("");
async function postAndReceiveResult() {
    fetch("http://localhost:3000/compile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({compileText: input.value})
    })
    .then(response => response.json())
    .then(data => response.value = data.data)
    .catch(error => console.log("Error", error))
}
</script>

<template>
        <div class="container">
            <textarea v-model="input"></textarea>
            <button @click="postAndReceiveResult">Run ►</button>
            <textarea :value="response"></textarea>
        </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

textarea {
    padding: 10px;
    width: 300px;
    height: 400px;
    resize: none;
    font-size: 14px;
    border-radius: 10px;
}

button {
    padding: 10px 20px;
    background: #30C5FF;
    color: #2A2D34;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 18px;
}
</style>
