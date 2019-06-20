<template>
    <div>
        <!--header-->
        <Head/>

        <!-- page-title -->
        <section class="section bg-secondary">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h4>{{this.$store.state.blogposts.text11}}</h4>
                    </div>
                </div>
            </div>
        </section>
        <!-- /page-title -->

        <!-- blog single -->
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <ul class="list-inline d-flex justify-content-between py-3">
                            <li class="list-inline-item"><i class="ti-user mr-2"></i>{{tiuser}}</li>
                            <li class="list-inline-item"><i class="ti-calendar mr-2"></i>June 2, 2018</li>
                        </ul>
                        <img :src="this.$store.state.img11"  alt="post-thumb" class="w-100 img-fluid mb-4">
                        <div class="content">
                            <p>{{article1}}</p>
                            <p>{{article1}}</p>

                            <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut
                                labore
                                et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum
                            </blockquote>

                            <img src="images/post-img.jpg" alt="image" class="img-fluid">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex
                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit
                                anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae
                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                                aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
                                quisquam est, qui dolorem
                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                                tempora incidunt ut
                                labore et dolore magnam aliquam quaerat voluptatem.</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="widget search-box">
                            <i class="ti-search"></i>
                            <input type="search" id="search-post" class="form-control border-0 pl-5" name="search-post"
                                   placeholder="Search">
                        </div>
                        <div class="widget">
                            <h6 class="mb-4">LATEST POST</h6>
                            <div class="media mb-4">
                                <div class="post-thumb-sm mr-3">
                                    <img class="img-fluid" src="images/masonary-post/post-1.jpg" alt="post-thumb">
                                </div>
                                <div class="media-body">
                                    <ul class="list-inline d-flex justify-content-between mb-2">
                                        <li class="list-inline-item">Post By Jhon</li>
                                        <li class="list-inline-item">June 2, 2018</li>
                                    </ul>
                                    <h6><a class="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet,
                                        consectetur</a></h6>
                                </div>
                            </div>
                            <div class="media mb-4">
                                <div class="post-thumb-sm mr-3">
                                    <img class="img-fluid" src="images/masonary-post/post-6.jpg" alt="post-thumb">
                                </div>
                                <div class="media-body">
                                    <ul class="list-inline d-flex justify-content-between mb-2">
                                        <li class="list-inline-item">Post By Jhon</li>
                                        <li class="list-inline-item">June 2, 2018</li>
                                    </ul>
                                    <h6><a class="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet,
                                        consectetur</a></h6>
                                </div>
                            </div>
                            <div class="media mb-4">
                                <div class="post-thumb-sm mr-3">
                                    <img class="img-fluid" src="images/masonary-post/post-3.jpg" alt="post-thumb">
                                </div>
                                <div class="media-body">
                                    <ul class="list-inline d-flex justify-content-between mb-2">
                                        <li class="list-inline-item">Post By Jhon</li>
                                        <li class="list-inline-item">June 2, 2018</li>
                                    </ul>
                                    <h6><a class="text-dark" href="blog-single.html">Lorem ipsum dolor sit amet,
                                        consectetur</a></h6>
                                </div>
                            </div>
                        </div>
                        <div class="widget">
                            <h6 class="mb-4">TAG</h6>
                            <ul class="list-inline tag-list">
                                <li class="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                            </ul>
                        </div>
                        <div class="widget">
                            <h6 class="mb-4">CATEGORIES</h6>
                            <ul class="list-inline tag-list">
                                <li class="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">travel</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">ui ux</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">article</a></li>
                                <li class="list-inline-item m-1"><a href="blog-single.html">developmetns</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- /blog single -->

        <!--footer-->
        <Footer/>
    </div>


</template>


<script>
    import Head from "../components/head";
    import Footer from "../components/footer";
    import store from "../store.js";
    export default {
        name: "blogsingle",
        components: {Footer, Head},
        data(){
            return{
                tiuser:'Post by Jhon Abraham',
                article1:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor\n' +
                    '                                incididunt ut labore et\n' +
                    '                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n' +
                    '                                nisi ut aliquip ex\n' +
                    '                                ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n' +
                    '                                cillum dolore eu fugiat\n' +
                    '                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui\n' +
                    '                                officia deserunt mollit\n' +
                    '                                anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem\n' +
                    '                                accusantium doloremque\n' +
                    '                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi\n' +
                    '                                architecto beatae vitae\n' +
                    '                                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit\n' +
                    '                                aut fugit, sed quia\n' +
                    '                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro\n' +
                    '                                quisquam est, qui dolorem\n' +
                    '                                ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi\n' +
                    '                                tempora incidunt ut\n' +
                    '                                labore et dolore magnam aliquam quaerat voluptatem.',

            }
        },
        store,
        methods:{

        },
        props:{

        }
    }
</script>

<style scoped>

</style>
