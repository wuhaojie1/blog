<template>
    <div>

        <!--header-->
        <Head/>
        <!--/header-->

        <!-- featured post -->
        <Feature/>
        <!-- /featured post -->

        <!-- blog post -->
        <Blogpost :blogposts="blogposts"/>
        <!-- /blog post -->

        <!--footer-->
        <Footer/>
        <!--/footer-->

    </div>

</template>

<script>
    import Footer from "../components/footer";
    import Head from "../components/head";
    import Feature from "../components/feature";
    import Blogpost from "../components/blogpost";
    import store from "../store.js";

    export default {
        components: {Blogpost, Feature, Head, Footer},
        data(){
            return{
                msg:'我是一个组件',
                value1:null,

            }
        },
        store,
        methods:{

        }
    }
</script>

<style scoped>

</style>
