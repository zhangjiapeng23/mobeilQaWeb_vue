<template>
    <div>
        <h1>{{platformName}}</h1>
    </div>
</template>

<script>
    export default {
        name: 'Platformlist',
        components: {},

        data() {
            return {
                platformName: this.$route.params.system
            };
        },
        mounted() {

        },
        methods: {

        },
    };
</script>