<template>
    <!-- featured post -->
    <section class="wow fadeIn" data-wow-duration="2s">
        <div class="container-fluid p-sm-0">
            <div class="row featured-post-slider">
                <div class="col-lg-3 col-sm-6 mb-2 mb-lg-0 px-1 wow fadeInDown" v-for="item in features" :key="item">
                    <article class="card bg-dark text-center text-white border-0 rounded-0">
                        <img class="card-img rounded-0 img-fluid w-100" :src="item.img" alt="post-thumb">
                        <div class="card-img-overlay">
                            <div class="card-content wow flipInX" data-wow-delay="1s">
                                <p class="text-uppercase">{{item.LifeStyle}}</p>
                                <h4 class="card-title mb-4 ">
                                    <a class="text-white">{{item.title}}</a>
                                </h4>
                                <a class="btn btn-outline-light">{{item.btn}}</a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    <!-- /featured post -->
</template>

<script>
    export default {
        name: "feature",
        data() {
            return {
                features: [
                    {
                        img: require("./../../public/images/featured-post/post-1.jpg"),
                        LifeStyle: "Web前端",
                        title: "将界面更好地呈现给用户。",
                        btn: "read more"
                    },
                    {
                        img: require("./../../public/images/featured-post/post-2.jpg"),
                        LifeStyle: "Web后端",
                        title: "使数据变得更有生命力",
                        btn: "read more"
                    },
                    {
                        img: require("./../../public/images/featured-post/post-4.jpg"),
                        LifeStyle: "美食",
                        title: "就要好好的宽款待自己",
                        btn: "read more"
                    },
                    {
                        img: require("./../../public/images/featured-post/post-5.jpg"),
                        LifeStyle: "运动",
                        title: "今天你运动了吗？没有那我们一起来运动吧！",
                        btn: "read more"
                    }
                ]
            };
        }
    };
</script>

<style scoped>
</style>
