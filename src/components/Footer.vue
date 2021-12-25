<template>
    <div class="footer">
        ©{{new Date().getFullYear()}} Nidhi Pai. Built with Vue.js.
        <a href="https://www.linkedin.com/in/nidhi-pai/">
            <img id="li-logo" src="../assets/linkedin.svg" alt="LinkedIn Logo">
        </a>
        <a href="https://github.com/nidhipai">
            <img id="gh-logo" src="../assets/github.png" alt="GitHub Logo">
        </a>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    .footer {
        margin-top: 10%;
        color: var(--color-1);
        text-align: center;
        margin-bottom: 20px;
    }
    img {
        padding-left: 5px;
        width: 30px;
        vertical-align: middle;
    }
</style>