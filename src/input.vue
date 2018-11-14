<template>
    <div class="wrapper" :class="{'error': error}">
        <input type="text" :value="value" :disabled="disabled" :readonly="readonly">
        <template v-if="error">
            <g-icon icon="err"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>

    </div>
</template>
<script>
    import Icon from './icon';
    export default {
        props: {
            value: {
                type: String
            },
            disabled:{
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String,
            }
        },
        components: {
            'g-icon': Icon
        }


    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0,0,0,.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        * {
            margin-right: .5em;
            &:last-child{margin-right: 0;}
        }
        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: 4px;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                box-shadow: $box-shadow-color;
                outline: none;
            }
            &[disabled],&[readonly] {
                border-color: #aaa;
                color: #aaa;
                cursor: not-allowed;
            }
        }
        &.error > input {
            border-color:$red;
        }
        .errorMessage {
            color: $red;
        }
    }

</style>