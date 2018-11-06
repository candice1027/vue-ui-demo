<template>
    <button class="g-button">按钮</button>
</template>
<script>
    export default {

    }

</script>
<style lang="scss">
    .g-button {
        font-size: var(--font-size);
        color: var(--color);
        height: var(--button-height);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        padding: 0 1em;
        border-radius: var(--border-radius);
        &:hover {
            border-color: var(--border-color-hover);

        }
        &:active {
            background: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }


</style>