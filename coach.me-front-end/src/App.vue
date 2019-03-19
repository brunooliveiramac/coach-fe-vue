<template>
    <div class="app">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <meta name="description" content="">
            <meta name="author" content="">
            <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">  
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <body>
        <header class="menu-bg">
            <main-menu v-if="!$route.meta.hideMenu"></main-menu>
        </header>
        <div class="container">
            <router-view></router-view>
        </div>
        </body>
    </div>
</template>

<script>

    import MainMenu from './components/MainMenu.vue';

    export default {
        components: {
            "main-menu": MainMenu
        }
    }

</script>

<style lang="scss">
    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import '../static/stylesheets/main';
</style>
