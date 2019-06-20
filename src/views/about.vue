<template>
    <div class="wow fadeIn" data-wow-duration="2s">
        <!--header-->
        <Head/>

        <!--body-->
        <section class="section">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <h2 class="mb-4">About Me</h2>
                        <img src="images/author.jpg" alt="author" class="img-fluid w-100 mb-4">
                        <h3 class="font-weight-light">Hello, I’m <span class="font-weight-bold">John Doe</span></h3>
                        <p>Creative UI/UX desingerr how loves to craft beautiful that satisfy users needs the product. A
                            best idea generate for the agency complay smart and elegant design When, while the lovely
                            valley teems with vapour around me, and the meridian sun strikes the upper surface of the
                            impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,
                            I throw myself down among the tall grass by the trickling stream; and, as I lie close to the
                            earth, a thousand unknown plants are noticed by me.<br><br> I hear the buzz of the little
                            world among the stalks, and grow familiar with the countless indescribable forms of the
                            insects and flies, then I feel the presence of the Almighty, who formed us in his own image,
                            and the breath of that universal love which bears and sustains.</p>
                    </div>
                </div>
            </div>
        </section>


        <!-- instagram -->
        <section>
            <div class="container-fluid px-0">
                <div class="row no-gutters instagram-slider" id="instafeed" data-userId="4044026246"
                     data-accessToken="4044026246.1677ed0.8896752506ed4402a0519d23b8f50a17"></div>
            </div>
        </section>

        <!-- /instagram -->

        <!--footer-->
        <Footer/>

    </div>
</template>

<script>
    import Footer from "../components/footer";
    import Head from "../components/head";

    export default {
        name: "about",
        components: {Head, Footer}
    }
</script>

<style scoped>

</style>
