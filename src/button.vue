<template>
    <button @click="$emit('click')" class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <g-icon v-if="!loading && icon" :icon="icon"></g-icon>
        <g-icon v-if="loading" class="loading icon" icon="loading" ></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script>
    export default {
        props: {
            icon: {},
            loading: {
                type: Boolean,
                default: false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            }
        },
    }
</script>
<style lang="scss">
    @keyframes spin {
        0% {transform: rotate(0deg);}
        100% {transform: rotate(360deg);}
    }
    .loading {
        animation: spin 1s infinite linear;
    }
    .g-button {
        font-size: var(--font-size);
        color: var(--color);
        height: var(--button-height);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        padding: 0 1em;
        border-radius: var(--border-radius);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > .icon {
            order: 1;
            margin-right: .3em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .3em;
            }
            > .content {
                order: 1;
            }

        }
    }
</style>