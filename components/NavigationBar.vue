<template>
    <div class="navbar">
        <div class="wrapper">
            <div class="justify-between items-center hidden md:flex" id="desktop-nav">
                <Logo />

                <div class="inline-flex space-x-4 links">
                    <NuxtLink exact to="/login">Login</NuxtLink>
                    <NuxtLink exact to="/register">Register</NuxtLink>
                    <NuxtLink exact to="/forgot-password">Forgot Password</NuxtLink>
                </div>
            </div>

            <div id="mobile-nav" class="md:hidden flex justify-between items-center">
                <Logo />

                <div :class="`hamburg ${mobile_nav_open ? 'open' : ''}`" @click="mobile_nav_open = !mobile_nav_open">
                    <button :class="`hamburger hamburger--slider ${mobile_nav_open ? 'is-active' : ''}`" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>

            <transition name="slide">
                <div v-if="mobile_nav_open" class="mobile_links">
                    <NuxtLink exact to="/login">Login</NuxtLink>
                    <NuxtLink exact to="/register">Register</NuxtLink>
                    <NuxtLink exact to="/forgot-password">Forgot Password</NuxtLink>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Logo from "./Logo"

export default {
    name: "NavigationBar",

    components: {
        Logo
    },

    data() {
        return {
            mobile_nav_open: false
        }
    }
}
</script>

<style scoped>
.wrapper {
    @apply bg-purple px-8 shadow-md py-2;
}

.links a {
    @apply py-3 px-4 hover:bg-purple-dark rounded-lg hover:text-white bg-white text-purple-dark font-semibold;
    @apply transition duration-150 ease-in text-sm lg:text-base;
}

.mobile_links {
    @apply mt-2
}

.mobile_links a {
    @apply border-purple-dark block py-2 px-2 rounded hover:bg-purple-dark text-white;
}

.hamburg {
    @apply p-2 relative border border-purple-dark bg-purple-light text-purple-dark rounded cursor-pointer;
    @apply hover:bg-purple hover:text-white;
    @apply transition duration-150 ease-in;
}

.hamburg.open {
    @apply bg-purple-dark hover:bg-purple text-white;
}

.slide-enter-active {
    transition-duration: 0.750s;
    transition-timing-function: ease-in;
}

.slide-leave-active {
    transition-duration: 0.750s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to, .slide-leave {
    max-height: 500px;
    overflow: hidden;
}

.slide-enter, .slide-leave-to {
    overflow: hidden;
    max-height: 0;
}

/* Icon 2 */
.hamburger {
    @apply inline-block cursor-pointer duration-150 border-0 m-0 bg-transparent overflow-visible;
    transition-property: opacity, filter;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
}

.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
    @apply bg-purple-light;
}

.hamburg:hover .hamburger-inner,
.hamburg:hover .hamburger-inner::before,
.hamburg:hover .hamburger-inner::after {
    @apply bg-white;
}

.hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
}

.hamburger-inner {
    @apply block top-1/2;
    margin-left: 4px;
    margin-top: 2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
    width: 30px;
    height: 3px;
    color: #fff;
    @apply bg-purple-dark absolute rounded transition duration-150 ease-in;
}

.hamburger-inner:hover,
.hamburger-inner::before:hover,
.hamburger-inner::after:hover {
    color: #fff;
    @apply bg-white;
}

.hamburger-inner::before,
.hamburger-inner::after {
    content: "";
    display: block;
}

.hamburger-inner::before {
    top: -10px;
}

.hamburger-inner::after {
    bottom: -10px;
}

.hamburger--slider .hamburger-inner {
    top: 2px;
}

.hamburger--slider .hamburger-inner::before {
    top: 10px;
    transition-property: transform, opacity;
    transition-timing-function: ease;
    transition-duration: 0.15s;
}

.hamburger--slider .hamburger-inner::after {
    top: 20px;
}

.hamburger--slider.is-active .hamburger-inner {
    transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger--slider.is-active .hamburger-inner::before {
    transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
    opacity: 0;
}

.hamburger--slider.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-90deg);
}

</style>
