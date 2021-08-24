<!-- Please remove this file from your project -->
<template>
    <div>
        <NavigationBar />

        <div class="my-6 w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/4 p-6 mx-auto rounded">
            <h1 class="text-gray-600 text-3xl">
                Log In
            </h1>
            <h2 class="text-gray-400 text-sm border-t border-gray-300 mt-1 pt-1 mb-4">
                Log in to modify your account or request whitelisting.
            </h2>

            <form @submit.prevent="login">
                <div class="form-group">
                    <FormLabel name="email" label="Email Address" aria-label="Email Address" id="emailLabel" />
                    <FormInput type="email" name="email" id="email" class="" aria-labelledby="emailLabel"
                           v-model="form.email" autofocus autocomplete="email" />
                </div>

                <div class="form-group">
                    <FormLabel name="password" label="Password" id="passwordLabel" aria-label="Password" />
                    <FormInput type="password" name="password" id="password" class="" aria-labelledby="passwordLabel"
                           v-model="form.password" autocomplete="current-password" />
                </div>

                <div class="form-group">
                    <FormCheckbox name="remember" label="Remember Me" />
                </div>

                <div class="form-group flex justify-end">
                    <button type="submit" class="">Log In</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.form-group {
    @apply mb-4;
}

.form-group:last-of-type {
    @apply mb-0;
}


button {
    @apply bg-purple text-white rounded font-semibold tracking-wide px-4 py-2 uppercase text-sm;
    @apply hover:bg-purple-dark;
    @apply focus:ring-4 focus:ring-purple focus:border-purple focus:ring-opacity-50;
    @apply transition duration-150 ease-in;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: "Index",

    components: {

    },

    data() {
        return {
            form: {
                email: null,
                password: null,
                remember: null,
            }
        }
    },

    methods: {
        login() {
            console.log(this.form.email);
        }
    },

    computed: {

    }
})
</script>
