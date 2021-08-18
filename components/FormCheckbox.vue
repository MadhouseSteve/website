<template>
    <label :for="name" class="label flex items-center">
        <input type="checkbox" :name="name" :id="name" />

        {{ label }}
    </label>
</template>

<script>
export default {
    name: "FormCheckbox",

    props: ['name', 'label'],
}
</script>

<style scoped>
input[type="checkbox"] {
    @apply rounded mr-1 text-purple;
    @apply focus:ring-4 focus:ring-purple focus:border-purple focus:ring-opacity-50;
    @apply transition duration-150 ease-in;
}

label {
    @apply font-normal text-gray-700;
}
</style>
