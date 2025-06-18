<script>
export default {
    data() {
        return {
            name: "ash",
            status: 'pending',
            clour:"change",
            task1: ['task1', 'task2'],
            link: 'https://www.youtube.com/watch?v=VeNfHj6MhgA&t=86s'
        };
    },
    methods: {
        toggle() {
            if (this.status == 'active') {
                this.status = 'pending'
            }
            else { this.status = 'inactive' }

        },
        clrchange(){
            if(this.clour==='change'){
                this.clour='unchange'
            }
            else{
                this.clour='change'
            }
        }
    }
}
</script>
<template>
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">sdasdas</p>
    <p v-else-if="status === 'pending'">pending</p>

    <p v-else="status === 'inactive'">inactive</p>
    <h3>Task3:</h3>
    <h2 v-for="task in task1" :key="task">{{ task }}</h2>
    <a :href="link">cassd</a>
    <button @click="toggle">change</button>
    <h1 v-if="clour==='change'" class="text-red-900">clr change</h1>
    <h1 v-else="clour==='unchange'" class="text-green-900">clr green change</h1>
<button @click="clrchange"> clr button</button>


</template>