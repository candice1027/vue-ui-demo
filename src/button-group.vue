<template>
    <div class="g-button-group">
        <slot></slot>
    </div>

</template>
<script>
    export default {
        mounted() {//mounted就是当dom出现在页面上之后执行的
            for (let node of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button') {
                    console.warn('g-button-group中的子元素应该全是button')
                }
            }
           // console.log(this.$el.children) //打印出g-button-group的子元素
        }

    }

</script>
<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover {
                position: relative;
                z-index: 2;
            }
        }
    }

</style>