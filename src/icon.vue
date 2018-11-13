<template>
    <svg v-if="icon" class="icon">
        <use :xlink:href="`#i-${icon}`"></use>
    </svg>
</template>
<script>
    import './svg'
    export default {
        props:['icon']
    }
</script>

<style>
    .icon {
        width: 1em;
        height: 1em;
    }

</style>