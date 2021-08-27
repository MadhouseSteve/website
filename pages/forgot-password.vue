<!-- Please remove this file from your project -->
<template>
    <div>
        <NavigationBar />

        <div class="my-6 w-full sm:w-3/4 md:w-1/2 lg:w-2/4 xl:w-1/4 p-6 mx-auto rounded">
            <h1 class="text-gray-700 text-3xl">
                Forgot Password
            </h1>
            <h2 class="text-gray-600 text-sm border-t border-gray-300 mt-1 pt-1 mb-4">
                You can reset your password if you have forgotten it.
            </h2>

            <form @submit.prevent="reset_passwd">
                <div class="form-group">
                    <FormLabel name="email" label="Email Address" aria-label="Email Address" id="emailLabel" />
                    <FormInput type="email" name="email" id="email" class="" aria-labelledby="emailLabel"
                           v-model="form.email" autofocus autocomplete="email" />
                </div>

                <div class="form-group flex justify-end">
                    <button type="submit" class="">
                        Send Password Reset Email
                    </button>
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
    @apply bg-purple text-black rounded font-semibold tracking-wide px-4 py-2 uppercase text-sm;
    @apply hover:bg-purple-dark;
    @apply focus:ring-4 focus:ring-purple focus:border-purple focus:ring-opacity-50;
    @apply transition duration-150 ease-in;
}
</style>

<script lang="ts">
import Vue from 'vue'
import FormInput from '~/components/FormInput.vue';
import FormLabel from '~/components/FormLabel.vue';
import NavigationBar from '~/components/NavigationBar.vue';

export default Vue.extend({
    name: "ForgotPassword",

    components: {
        FormInput,
        FormLabel,
        NavigationBar,
    },

    head() {
        return{
            title: 'Forgot Password',
        }
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
        reset_passwd() {
            console.log(this.form.email);
        }
    },

    computed: {

    }
})
</script>
