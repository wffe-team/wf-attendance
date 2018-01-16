<template>
  <div id="app">
    <!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
      <el-menu-item index="1"><router-link tag="li" to="/enter">
  <a>请假</a>
</router-link></el-menu-item>
      <el-menu-item index="2"><router-link tag="li" to="/attendanceList">
  <a>请假</a>
</router-link></el-menu-item>
    </el-menu> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.el-menu-demo {
  margin-bottom: 40px;
}
</style>
