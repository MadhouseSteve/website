<template>
    <NuxtLink exact to="/">
        <picture>
            <source
                type="image/webp"
                sizes="(max-width: 412px) 309px"
                srcSet="/logo/logo@0.5x.png 309w"
            />
            <img
                id="logo"
                width="195"
                height="112"
                src="/logo/logo.webp"
                sizes="(max-width: 412px) 309px"
                srcSet="/logo/logo@0.5x.png 309w"
                alt="Madhouse Miners Logo"
            />
<!--            sizes="(max-width: 1650px) 1235px, (max-width: 2450px) 1852px, (max-width: 3300px) 2468px, (max-width: 412px) 309px, (max-width: 620px) 463px, (max-width: 1235px) 926px, 618px"
            srcSet="/logo/logo.webp 618w, /logo/logo@0.5x.png 309w, /logo/logo@0.75x.png 463w, /logo/logo@1.5x.png 926w, /logo/logo@2x.webp 1235w, /logo/logo@3x.webp 1852w, /logo/logo@4x.webp 2468w"-->
        </picture>
    </NuxtLink>
</template>

<script lang="ts">

export default {
    name: "Logo"
}
</script>

<style scoped>
#logo {
    @apply h-28 cursor-pointer;
}
</style>
