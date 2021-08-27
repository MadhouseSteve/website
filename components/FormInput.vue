<template>
    <input :value="modelValue" ref="input" :type="type"
           @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
    name: "FormInput",

    props: ["modelValue", "type"],

    emits: ["update:modelValue"]
}
</script>

<style scoped>
input {
    @apply block w-full font-thin rounded py-2 px-3 border-gray-400;
    @apply focus:ring-4 focus:ring-purple focus:border-purple focus:ring-opacity-50;
    @apply transition duration-150 ease-in;
}
</style>
