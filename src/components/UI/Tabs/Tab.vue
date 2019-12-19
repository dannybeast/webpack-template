<template lang="pug">
    div(v-show="isActive")
        slot
</template>

<script>
    export default {
        name: 'Tab',
        props: {
            name: {require: true},
            selected: {default: false}
        },
        data(){
            return {
                isActive: false
            }
        },
        computed:{
            href(){
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },
        mounted(){
            this.isActive = this.selected;
        }
    }
</script>
