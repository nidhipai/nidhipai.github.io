<template>
    <div class="header">
        <router-link class="title" to="/">NIDHI PAI </router-link>
        <router-link to="/">
            <img src="../assets/dolphin.png" alt="dolphin">
        </router-link>
        <div id="links">
            <router-link class="tab" to="/"> HOME </router-link>
            <router-link class="tab" to="/projects"> PROJECTS </router-link>
            <router-link class="tab" to="/links"> LINKS </router-link>
            <router-link class="tab" to="/contact">CONTACT</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header {
        margin-bottom: 4%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    img {
        padding-left: 10%;
        width: 6em;
        margin-right: 20%;
    }
    .tab {
        font-size: medium;
        font-family: Open Sans, sans-serif;
        padding: 1em;
        position: center;
        color: var(--dark-col);
        text-decoration: none;
    }
    .tab:hover {
        color: var(--color-2);
        cursor: pointer;
        text-decoration: none;
    }
    .title {
        font-family: 'Open Sans Condensed', sans-serif;
        font-size: 5em;
        color: var(--color-1);
        text-decoration: none;
    }
    #links {
        margin-left: 10%
    }
</style>