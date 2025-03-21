<template>
    <h1>
        this is error internet connection lost
    </h1>
    <button @click="reload">reload</button>
</template>

<script>

export default {
    methods:{
        reload(){
            console.log("reload")
        }
    }
}

</script>