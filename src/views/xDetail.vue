<template>
    <div style="width:100%;height:100%;">
        <xDetailList/>
        <carts/>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import xDetailList from '@/components/xDetailList.vue';
import carts from '@/components/carts.vue';
export default Vue.extend({
    components: {
        xDetailList,
        carts,
    },
});
</script>

