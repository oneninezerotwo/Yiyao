<template>
    <div class="page_categories">
        <!-- <router-view/> -->
        <xFindacureList/>
    </div>

</template>

<script lang="ts">
import Vue from 'vue';
import xFindacureList from '../components/xFindacureList.vue';
export default Vue.extend({
  components: {
    xFindacureList,
  },
});
</script>

<style>
    .page_categories{
        width: 100%;
        height: 100%;
    }
</style>


