<template>
  <div class="tp-wrapper">
    <div class="wrapper-top">
      <span class="tag">Console</span>
      <div class="console-wrapper">
        <el-input v-model="textarea" type="textarea" placeholder="log test report"></el-input>
      </div>
      <div class="interruption">
        <el-button type="primary" :loading="isLoading" @click="interruptionTest">Interruption</el-button>
      </div>
    </div>
    <div class="wrapper-bottom">
      <span class="tag">Test Report</span>
      <div class="download">Please download test report&nbsp;&nbsp;&nbsp;<el-button size="small" type="primary" :loading="isLoading" @click="downloadReport">Download</el-button></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLoading: false,
      textarea: ''
    }
  },
  methods: {
    interruptionTest () {},
    downloadReport () {
      this.isLoading = true
    }
  }
}
</script>

<style scoped>
.tp-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.tp-wrapper .wrapper-top, .tp-wrapper .wrapper-bottom {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  text-align: left;
  font-size: 16px;
}
.tp-wrapper .wrapper-top {
  flex: 1;
  height: 100%;
  overflow: auto;
  border: none;
}
.tp-wrapper .wrapper-top .console-wrapper {
  height: 75%;
  padding: 10px 20px;
}
.tp-wrapper .wrapper-top .console-wrapper .el-textarea {
  height: 100%;
}
.tp-wrapper .wrapper-top .console-wrapper >>> .el-textarea__inner {
  height: 100%;
}
.tp-wrapper .wrapper-top .interruption {
  padding: 0 20px 10px 20px;
  text-align: right;
}
.tp-wrapper .wrapper-bottom {
  max-height: 120px;
}
.tp-wrapper .wrapper-bottom .download {
  padding: 10px 0 20px 0;
  text-align: center;
}
.tp-wrapper span.tag {
  display: inline-block;
  padding: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 3px 3px 3px;
  background: rgb(220, 220, 220);
}
</style>
