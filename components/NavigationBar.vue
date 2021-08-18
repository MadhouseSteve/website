<template>
    <div class="navbar">
        <div class="wrapper">
            <div class="flex justify-between items-center">
                <Logo class="w-60"/>

                <div class="inline-flex space-x-4 links">
                    <NuxtLink to="/login">Login</NuxtLink>
                    <NuxtLink to="/register">Register</NuxtLink>
                    <NuxtLink to="/forgot-password">Forgot Password</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "./Logo"

export default {
    name: "NavigationBar",

    components: {
        Logo,
    }
}
</script>

<style scoped>
.wrapper {
    @apply bg-purple px-8 shadow-lg py-2;
}

.links a {
    @apply py-3 px-4 hover:bg-purple-dark rounded-lg hover:text-white;
    @apply transition duration-150 ease-in;
}
</style>
