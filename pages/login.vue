<!-- Please remove this file from your project -->
<template>
    <div>
        <NavigationBar />

        <div class="my-6 w-1/4 p-6 mx-auto rounded">
            <form @submit.prevent="login">
                <div class="form-group">
                    <FormLabel name="email" label="Email Address" />
                    <FormInput type="email" name="email" id="email" class=""
                           v-model="form.email" autofocus autocomplete="email" />
                </div>

                <div class="form-group">
                    <FormLabel name="password" label="Password" />
                    <FormInput type="password" name="password" id="password" class=""
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
