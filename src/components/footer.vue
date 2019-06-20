<template>
    <div class="wow fadeIn" data-wow-duration="2s">
        <footer>
            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                            <router-link to="/"><img src="images/logo.png" alt="persa" class="img-fluid"></router-link>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                            <ul class="list-unstyled">
                                <li class="font-secondary text-dark">Sydney</li>
                                <li class="font-secondary text-dark">6 rip carl Avenue CA 90733</li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                            <ul class="list-unstyled">
                                <li class="font-secondary text-dark">Tel: +90 000 333 22</li>
                                <li class="font-secondary text-dark">Mail: exmaple@ymail.com</li>
                            </ul>
                        </div>
                        <div class="col-md-3 col-sm-6 mb-4 mb-md-0">
                            <span class="font-secondary text-dark mr-3">Follow</span>
                            <ul class="list-inline d-inline-block">
                                <li class="list-inline-item"><a href="#" class="text-dark"><i
                                        class="ti-facebook"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="text-dark"><i
                                        class="ti-twitter-alt"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="text-dark"><i
                                        class="ti-linkedin"></i></a></li>
                                <li class="list-inline-item"><a href="#" class="text-dark"><i class="ti-github"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "footer"
    }
</script>

<style scoped>

</style>
