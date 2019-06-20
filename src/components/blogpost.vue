<template>
    <!-- blog post -->
    <section class="section">
        <div class="container">
            <div class="row masonry-container">
                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img1" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle1" >{{this.$store.state.blogposts.text1}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief1}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img2" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle2" >{{this.$store.state.blogposts.text2}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief2}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img3" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle3" >{{this.$store.state.blogposts.text3}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief3}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img4" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle4" >{{this.$store.state.blogposts.text4}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief4}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img5" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle5" >{{this.$store.state.blogposts.text5}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief5}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img6" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle6" >{{this.$store.state.blogposts.text6}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief6}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img7" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle7" >{{this.$store.state.blogposts.text7}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief7}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img8" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle8" >{{this.$store.state.blogposts.text8}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief8}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img9" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle9" >{{this.$store.state.blogposts.text9}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief9}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img10" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle10" >{{this.$store.state.blogposts.text10}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief10}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img11" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle11" >{{this.$store.state.blogposts.text11}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief11}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img12" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle12" >{{this.$store.state.blogposts.text12}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief12}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>

                <div class="col-lg-4 col-sm-6 mb-5">
                    <article class="text-center">
                        <img class="img-fluid mb-4" :src="this.$store.state.blogposts.img13" alt="post-thumb">
                        <p class="text-uppercase mb-2">{{this.$store.state.blogposts.travel1}}</p>
                        <h4 class="title-border">
                            <a class="text-dark" href="/blogsingle13" >{{this.$store.state.blogposts.text13}}</a>
                        </h4>
                        <p>{{this.$store.state.blogposts.brief13}}</p>
                        <a class="btn btn-transparent bg-light">{{this.$store.state.blogposts.btn}}</a>
                    </article>
                </div>
            </div>
            <!--page-->
            <div class="row">
                <div class="col-12">
                    <nav>
                        <ul class="pagination justify-content-center align-items-center">
                            <li class="page-item">
                                <span class="page-link">&laquo; Previous</span>
                            </li>
                            <li class="page-item active"><a class="page-link" href="#">01</a></li>
                            <li class="page-item"><a class="page-link" href="#">02</a></li>
                            <li class="page-item"><a class="page-link" href="#">03</a></li>
                            <li class="page-item"><a class="page-link" href="#">04</a></li>
                            <li class="page-item"><a class="page-link" href="#">05</a></li>
                            <li class="page-item"><a class="page-link" href="#">06</a></li>
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
</template>

<script>

    import store from "../store.js";

    export default {
        name: "blogpost",
        props:{

        },
        data() {
            return {

                }
        },
        store,
        methods:{

        }

    }
</script>

<style scoped>

</style>
