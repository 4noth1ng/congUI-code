<template>
    <ul class="pag">
        <li class="pag-item" @click="delPage">&lt;</li>
        <li class="pag-item" v-for="(item, index) in itemList" :key="index"
        :class="{ active: activeIndex === index}"
        @click="activeIndex = index"
        >
           {{item}}
        </li>
        <li class="pag-item" @click="addPage">&gt;</li>
    </ul>
</template>

<script>
    export default {
        name: "c-pager",
        data() {
            return {
                itemList: [],
                activeIndex: 0
            }
        },
        props: {
            pagesize: {
                type: Number,
                default: 10
            },
            total: {
                type: Number,
                default: 100
            }
        },
        created() {
            let length = Math.ceil(this.total / this.pagesize)
            for(let i = 1; i <= length; i++) {
                this.itemList.push(i)
            }
        },
        methods: {
            addPage() {
                let activePage = this.activeIndex + 1, length = this.total / this.pagesize
                if(activePage + 1 <= length) {
                    this.activeIndex ++
                }
            },
            delPage() {
                let activePage = this.activeIndex + 1
                if(activePage - 1 >= 1) {
                    this.activeIndex --
                }
            },
        },
        watch: {
            activeIndex: {
                handler(newVal, oldVal) {
                    this.$emit('current-change', newVal, oldVal)
                },
                immediate:true
            }
        }
    }
</script>

<style lang="scss" scoped>


</style>