<template lang="pug">
    button.nav-button(@click="toggleHamburger")
        .hamburger(v-bind:class="{ isActive: isActive }")
            span.line
            span.line
            span.line
</template>

<script>

export default {
    name: 'Hamburger',
    data(){
        return{
            isActive: false
        }
    },
    methods: {
       toggleHamburger(){
          this.isActive = !this.isActive
       }
    }
}
</script>

<style lang="scss" scoped>
    // vars
    @import  '~/assets/scss/utils/vars';
    @import  '~/assets/scss/modules/hamburger';

    .nav-button{
        background: transparent;
        cursor:pointer;
    }
</style>
