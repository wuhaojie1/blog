<template>
    <div class="wow fadeIn" data-wow-duration="2s">
        <!--header-->
        <Head/>
        <!--/header-->

        <!-- featured post -->
        <Feature/>
        <!-- /featured post -->

        <!-- blog post -->
        <section class="section">
            <div class="container">
                <div class="row masonry-container">
                    <div class="col-lg-4 col-sm-6 mb-5 wow fadeInUp" v-for="item in blogposts" :key="item">
                        <article class="text-center">
                            <img class="img-fluid mb-4" :src="item.img" alt="post-thumb">
                            <p class="text-uppercase mb-2">{{item.travel}}</p>
                            <h4 class="title-border">
                                <a class="text-dark" href="/blogsingle" :blogposts="blogposts">{{item.text}}</a>
                            </h4>
                            <p>{{item.brief}}</p>
                            <button class="btn btn-transparent bg-light" @click="toimg">{{item.btn}}</button>
                        </article>
                    </div>
                </div>

                <!--page-->
                <div class="row">
                    <div class="col-12">
                        <nav>
                            <ul class="pagination justify-content-center align-items-center wow rollIn">
                                <li class="page-item">
                                    <span class="page-link">&laquo; Previous</span>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="#">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">04</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">05</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">06</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next &raquo;</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <!--/page-->

            </div>
        </section>
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
    import bus from "../assets/bus"


    export default {
        components: {Feature, Head, Footer },
        data() {
            return {
                blogposts: [
                    {
                        img: require('./../assets/logo.png'),
                        travel: 'web前端',
                        text: 'Vue cli3 的安装与使用(本人踩坑过程)',
                        brief: 'Standard Tooling for Vue.js Development',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-2.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-3.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-4.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-5 .jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-6.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-7.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-8.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-9.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-10.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-11.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    },
                    {
                        img: require('./../../public/images/masonary-post/post-12.jpg'),
                        travel: 'TRAVEL',
                        text: 'Charming Evening Field',
                        brief: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
                        btn: 'read more'
                    }
                ]
            };
        },
        methods:{
            toimg(){
                let _self = this;
                bus.$emit('msg',_self.item);//指向本作用域的item
                this.$router.push('/blogsingle');
            }
        }
    };
</script>

<style scoped>
</style>
