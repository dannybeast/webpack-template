<template lang="pug">
    include ../../../pug/bemto-master/bemto
    +b.tabs
        +e.UL.nav
            li(v-for="tab in tabs" :class="{ 'is-active' : tab.isActive }")
                a(:href="tab.href" @click="selectTab(tab)") {{ tab.name }}
        +e.content
            slot
</template>

<script>
Vue.component('tab', require('./Tab.vue').default);
export default {
    name: 'Tabs',
    data(){
        return {tabs:[]};
    },
    created(){
        this.tabs = this.$children;
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name)
            })
        }
    }
}
</script>

<style lang="scss" scoped>

    // vars
    @import  '../../../assets/scss/utils/vars';
    $border-width: 1px;
    $border-color: $border-base;
    $padding: 30px;
    $activeBg: $primary-color;

    // body
    .tabs{
        &__nav{
            display: flex;
            a{
                color: $neutral-primary;
                text-decoration: none;
                padding: $padding*0.5 $padding;
                border-top: solid $border-width $border-color;
                border-left: solid $border-width $border-color;
                display: block;
            }
            li{
                &:last-child{
                    a{
                        border-right: solid $border-width $border-color;
                    }
                }
                // active tab
                &.is-active{
                    a{
                        background: $activeBg;
                        border-color: $activeBg;
                        color:#fff;
                    }
                }
            }
        }
        &__content{
            border: solid $border-width $border-color;
            padding:$padding;
        }
    }

</style>
