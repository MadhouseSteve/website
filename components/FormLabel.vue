<template>
    <label :for="name">{{ label }}</label>
</template>

<script>
export default {
    name: "FormLabel",

    props: ['name', 'label']
}
</script>

<style scoped>
label {
    @apply block mb-1 font-normal text-gray-700;
}
</style>
