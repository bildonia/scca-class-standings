<script setup lang="ts">
    import type { RunResult } from '@/scripts/interfaces';
    import { reactive } from 'vue'
    import StandingsItem from './StandingsItem.vue';

    const times: RunResult[] = [
    {
        name: "Bill Sand",
        raw_time: 45.345,
        class: {
            name: "XB",
            pax: 0.852
        }
    }, {
        name: "Matt Johnson",
        raw_time: 45.545,
        class: {
            name: "XA",
            pax: 0.845
        }
    }, {
        name: "James Glaser",
        raw_time: 45.600,
        class: {
            name: "XB",
            pax: 0.852
        }
    }];

    const items = reactive([
    {
        name: "Bill Sand",
        position: 1,
        raw_time: 45.345,
        diff: 0.000,
        class: "XB"
    }, {
        name: "Matt Johnson",
        position: 2,
        raw_time: 45.545,
        diff: 0.200,
        class: "XA"
    }, {
        name: "James Glaser",
        position: 3,
        raw_time: 45.600,
        diff: 0.055,
        class: "XB"
    }
    ])
</script>

<template>
  <div class="standings-list" >
    <StandingsItem 
        v-for="item in items" 
        :key="item.name" 
        :item="item"
    />
  </div>
</template>

<style scoped>

</style>