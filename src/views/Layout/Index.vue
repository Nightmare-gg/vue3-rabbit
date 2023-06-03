<script setup>
import LayoutNav from './components/LayoutNav.vue';
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue';
</script>

<template>
    <Layout-nav/>
    <Layout-header/>
    <LayoutFixed/>
    <!-- 二级路由出口 -->
    <RouterView/>
    <Layout-footer/>
</template>