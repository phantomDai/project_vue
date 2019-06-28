<template>
  <el-row>
    <el-col class="wrapper" :span="18" :offset="3">
      <div class="top">
        <p>Dynamic Random Testing for Web Service</p>
      </div>
      <el-row class="bottom" type="flex">
        <el-col :span="4" class="bottom-left">
          <ul>
            <router-link to="/dynamicPage/serviceParsing">Service Parsing</router-link>
            <router-link to="/dynamicPage/configuration">Configuration</router-link>
            <router-link to="/dynamicPage/testingProcess">Testing Process</router-link>
          </ul>
        </el-col>
        <el-col :span="20" class="bottom-right">
          <router-view></router-view>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px 0;
}
.top {
  position: relative;
  height: 100px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background: rgba(169, 169, 169, 0.3);
}
.top p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
}
.bottom {
  flex: 1;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-top: none;
  background: rgba(220, 220, 220, 0.2);
}
.bottom-right {
  border-left: 1px solid rgba(0, 0, 0, 0.3);
}
.bottom-left ul {
  padding: 20px 0;
  font-size: 14px;
  font-weight: bold;
}
.bottom-left ul a {
  display: block;
  padding: 10px 0;
  color: #1E90FF;
  cursor: pointer;
}
.bottom-left ul .router-link-active {
  color: #00FA9A;
}
.right-wrapper {
  height: 100%;
  font-size: 20px;
  font-weight: bold;
}
</style>
