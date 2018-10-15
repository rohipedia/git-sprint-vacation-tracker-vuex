<template>
    <div class="row">
        <div class="col-lg-10 col-md-10 col-sm-10 .offset-md-1 .offset-lg-1 main-page">
            <app-header></app-header>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';

    export default {
        data() {
            return {
                
            }
        },
        components: {
            appHeader: Header
        }
    }
</script>
<style>
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    .main-page {
        margin-left: 5%;
        margin-top: 2%;
    }
</style>


