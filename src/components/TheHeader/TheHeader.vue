<template lang="pug">
    include ../../pug/bemto-master/bemto
    div
        slot(:slogan="slogan", :onCl="onCl")
</template>

<script>
export default {
    name: 'TheHeader',
    data(){
        return {
            slogan: 'Boilerplate'
        };
    },
    methods:{
       onCl(){
           console.log('1');
       }
    }
}
</script>

<style lang="scss" scoped>
    // vars
    @import  '../../assets/scss/utils/vars';

    // body
    @svg-load logo url('../../assets/icons/cpu.svg') {
        fill: #fff;

        path:nth-child(2) {
            fill: #000;
        }
    }

    .header {
        padding: 30px 0;
        background: $primary-color;
        color: #fff;

        .container {
            display: flex;
            align-items: center;
        }
        .nav-button{
            margin-right:15px;
        }
        &__logo {
            width: 50px;
            height: 50px;
            display: block;
            background: svg-inline(logo);
            background-repeat:no-repeat;
            background-position:center;
            background-size: contain;
            margin-right: 30px;
        }

        .nav {
            margin-left: auto;

            a {
                color: #fff;
            }
        }
    }

</style>
