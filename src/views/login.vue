<template>
    <div class="wow fadeIn" data-wow-duration="2s">
        <Head/>
        <form class="form-signin">
            <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" v-model="loginData.username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" v-model="loginData.password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click="login">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </form>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "../components/footer";
    import Head from "../components/head";
    export default {
        components: {Head, Footer},
        data() {
            return {
                loginData: {
                    grant_type: 'password',
                    client_id: 3,
                    client_secret: 'he8rtcU6ceFlmiyf6fCilHfFaNyQkNLzfQPAw8KA',
                    username: '1191125750@qq.com',
                    password: '19980624l.',
                    scope: ''
                },
            }
        },
        watch: {

        },
        methods: {

            login() {
                let _self = this;
                this.$http.post(`${this.$root.baseUrl}/oauth/token`, this.loginData).then(function (res) {
                    _self.$root.headers.headers.Authorization = `${res.data.token_type} ${res.data.access_token}`;
                    _self.$router.push('/index');
                    /*_self.$router.push('/classSchedule');*/
                });
            },
        }
    }
</script>

<style scoped>
    html,
    body {
        height: 100%;
    }

    body {
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        -ms-flex-align: center;
        -ms-flex-pack: center;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
    }

    .form-signin {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: 0 auto;
    }
    .form-signin .checkbox {
        font-weight: 400;
    }
    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
    .form-signin .form-control:focus {
        z-index: 2;
    }
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

</style>
