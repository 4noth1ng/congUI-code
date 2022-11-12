<template>
    <button class="c-button" :class="[type, size, { animation: animation }]">
        <slot>当对</slot>
    </button>
</template>

<script>
export default {
    name: "c-button",
    props: {
        type: {
            type: String,
            default: "default"
        },
        size: {
            type: String,
            default: "normal"
        },
        animation: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
// type

</style>