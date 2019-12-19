<template lang="pug">
    include ../../../pug/bemto-master/bemto
    component.button(:is="tag" :href="href" :class="type", :disabled="disabled" @click="callback($event)")
        span(v-if="icon")
            slot
        slot(v-else)
</template>

<script>

export default {
    name: 'TheButton',
    props: {
        tag: String,
        href: String,
        type: String,
        icon: String,
        disabled: Boolean
    },
    methods: {
        callback: function(e) {
        this.$emit('click', e);
        }
    }
}
</script>

<style lang="scss" scoped>

    // vars
    @import  '../../../assets/scss/utils/vars';
    $radius: 5px;

    // body
    .button {
        padding: 10px 20px;
        border: 1px solid $border-base;
        color: $neutral-primary;
        background-color: $default-color;
        border-radius: $radius;
        font-size: $mainFontSize;
        cursor: pointer;
        display: inline-flex;
        vertical-align: top;
        text-decoration: none;

        &[disabled]{
            cursor: not-allowed;
            opacity:0.5;
        }

        // colors
        &.danger {
            background-color: $danger-color;
            border-color: $danger-color;
            color: $default-color;
        }
        &.success {
            background-color: $success-color; 
            border-color: $success-color;
            color: $default-color;
        }
        &.primary {
            background-color: $primary-color; 
            border-color: $primary-color;
            color: $default-color;
        }

        // sizes
        
    }

</style>
