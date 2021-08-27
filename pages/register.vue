<!-- Please remove this file from your project -->
<template>
    <div>
        <NavigationBar />

        <div class="my-6 w-full md:w-2/3 lg:w-3/6 xl:w-2/6 p-6 mx-auto rounded">
            <h1 class="text-gray-600 text-3xl">
                Register
            </h1>
            <h2 class="text-gray-600 text-sm border-t border-gray-300 mt-1 pt-1 mb-4">
                Register an account to get on the server access list.
            </h2>

            <form @submit.prevent="register">
                <!-- Basic Information -->
                <div>
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
                        <FormLabel name="password_confirmation" label="Confirm Password" id="passwordConfirmationLabel"
                                   aria-label="Confirm Password" />
                        <FormInput type="password" name="password_confirmation" id="password_confirmation"
                                   class="" aria-labelledby="passwordConfirmationLabel"
                                   v-model="form.password_confirmation" />
                    </div>

                    <div class="form-group">
                        <FormLabel name="minecraft_username" label="Minecraft Username" id="minecraftUsernameLabel"
                                   aria-label="Minecraft Username" />
                        <FormInput type="text" name="minecraft_username" id="minecraft_username"
                                   class="" aria-labelledby="minecraftUsernameLabel" v-model="form.minecraft_username" />
                    </div>

                    <div class="form-group">
                        <FormLabel name="date_of_birth" label="Date of Birth" id="dateOfBirthLabel"
                                   aria-label="Date of Birth" />
                        <FormInput type="date" name="date_of_birth" id="date_of_birth" class="" v-model="form.date_of_birth"
                                   aria-labelledby="dateOfBirthLabel" />
                    </div>
                </div>
                <!-- End Basic Information -->

                <!-- Questions -->
                <div class="mt-4">
                    <div class="form-group">
                        <FormLabel name="referrer" label="How did you hear about Madhouse Miners?" id="referrerLabel"
                                   aria-label="How did you hear about Madhouse Miners?" />
                        <FormInput type="text" name="referrer" id="referrer" class="" v-model="form.referrer"
                                   aria-labelledby="referrerLabel" />
                    </div>

                    <div class="form-group">
                        <FormLabel name="experience" label="Rate your experience with modded Minecraft:" id="experienceLabel"
                                   aria-label="Rate your experience with modded Minecraft:" />
                        <div class="flex items-center">
                            <input type="range" step="1" min="0" max="5" name="experience" id="experience"
                                   class="w-full block"
                                   v-model="form.experience" aria-labelledby="experienceLabel" />
                            <div class="pl-2 text-xl text-gray-700">
                                {{ form.experience }}
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <FormLabel name="known_members" id="knownMembersLabel"
                               label="Do you know any other members of our community? If so, what is their minecraft name?"
                               aria-label="Do you know any other members of our community?
                                        If so, what is their minecraft name?" />
                        <FormInput type="text" name="known_members" id="known_members" class="" v-model="form.known_members"
                                   aria-labelledby="knownMembersLabel" />
                    </div>

                    <div class="form-group">
                        <FormLabel name="interested_servers" id="interestedServersLabel"
                                   label="Which of our servers are you interested in?"
                                   aria-label="Which of our servers are you interested in?" />
                        <FormInput type="text" name="interested_servers" id="interested_servers" class=""
                                   v-model="form.interested_servers"
                                   aria-labelledby="interestedServersLabel" />
                    </div>

                    <div class="form-group">
                        <FormLabel name="about_you" id="aboutYouLabel"
                                   label="Tell us a bit about yourself (e.g. What mods are you mainly interest in,
                                            what style of building do you like to do?)"
                                   aria-label="Tell us a bit about yourself (e.g. What mods are you mainly interest in,
                                            what style of building do you like to do?)" />
                        <FormInput type="text" name="about_you" id="about_you" class="" v-model="form.about_you"
                                   aria-labelledby="aboutYouLabel" />
                    </div>
                </div>
                <!-- End Question -->

                <div class="form-group mt-4 flex justify-end">
                    <button type="submit" class="">Register</button>
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
import Vue from 'vue';
import FormInput from '~/components/FormInput.vue';
import FormLabel from '~/components/FormLabel.vue';
import NavigationBar from '~/components/NavigationBar.vue';

export default Vue.extend({
    name: "Register",

    components: {
        FormInput,
        FormLabel,
        NavigationBar
    },

    head() {
        return{
            title: 'Register',
        }
    },

    data() {
        return {
            form: {
                email: null,
                password: null,
                password_confirmation: null,
                minecraft_username: null,
                date_of_birth: null,
                referrer: null,
                experience: 0,
                known_members: null,
                interested_servers: null,
                about_you: null,
            },
        }
    },

    methods: {
        register() {
            console.log(this.form.email);
        },
    },

    computed: {

    }
})
</script>
