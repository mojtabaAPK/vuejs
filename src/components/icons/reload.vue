<template>
    <svg viewBox="0 0 18 18" :width="w" :height="h">
        <path fill="currentColor"
            d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z">
        </path>
    </svg>
</template>

<script>

export default {
    props:{
        w:{
            default:25,

        },
        h:{
            default:25,
        }
    }
}

</script>
