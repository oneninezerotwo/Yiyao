<template>
    <div style="width:100%;height:100%">
        <xCommodityList/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import xCommodityList from '@/components/xCommodityList.vue';
export default Vue.extend({
  components: {
    xCommodityList,
  },
});
</script>

