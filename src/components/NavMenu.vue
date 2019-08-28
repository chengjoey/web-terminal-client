<template>
    <el-row class="tac">
        <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        router
        >
        <el-menu-item v-for="item in menu" :index="item.path" :key="item.id">
            <template slot="title">
                <icon :name="item.icon"></icon>
                <span v-text="item.name"></span>
            </template>
            <!-- <el-menu-item-group class="oner-hide" v-for="sub in item.sub" :key="sub.componentName">
                <el-menu-item :index="sub.componentName" v-text="sub.name">
                </el-menu-item>
            </el-menu-item-group> -->
        </el-menu-item>
        </el-menu>
        </el-col>
    </el-row>
</template>

<style scoped>
    .over-hide{
        overflow: hidden;
    }
</style>


<script>
    import menu from '@/config/menu-config'

    export default {
        data() {
            return {
                menu: menu
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>