<script setup>
import { useI18n } from 'vue-i18n'
import { ArrowDown } from '@element-plus/icons-vue'

const { t, locale } = useI18n()

</script>

<template>
    <div class="mobile-menu-area sticky d-sm-block d-md-block d-lg-none ">
        <div class="mobile-menu mean-container">
            <div class="mean-bar">
                
                <el-dropdown trigger="click" class="el-dropdown-link mobile-menu1">
                    <span>
                        <el-icon class="el-icon--right icon-big">
                            <arrow-down />
                        </el-icon>
                    </span>
                    
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <RouterLink to="/">{{ t("nav.home") }}</RouterLink>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <RouterLink to="/product">{{ t("nav.product") }}</RouterLink>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <RouterLink to="/security">{{ t("nav.security") }}</RouterLink>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <RouterLink to="/about">{{ t("nav.about") }}</RouterLink>
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <RouterLink to="/contact">{{ t("nav.contact") }}</RouterLink>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        
                    </template>
                </el-dropdown>
                
            </div>
        </div>
    </div>

    
</template>

<style scoped>
.mobile-menu1 {
    position: relative;
    left: 90%;
}

.mean-container .mean-bar {
    background: #fdeaa8;
    float: left;
    min-height: 60px;
    padding: 4px 0 0;
    position: relative;
    width: 100%;
    z-index: 999;
}

.icon-big {
    width: 50px;
    height: 50px;
    font-size: 30px;
    background-color: #ffffff;
}
</style>