<template>
  <div class="con-wrapper">
    <div class="test-suite">
      <span class="tag">Test Suite</span>
      <div class="file-wrapper">
        <el-upload
          ref="upload"
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          :limit="1"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button slot="trigger" style="margin-right: 20px">Import File</el-button>
          <el-button type="primary" :loading="isFileUpload" @click="uploadFile">OK</el-button>
        </el-upload>
      </div>
    </div>
    <div class="partition-setting">
      <span class="tag">Partition Setting</span>
      <div class="table-wrapper">
        <table>
          <tr>
            <th>Partition</th>
            <th>Choices</th>
            <th>Output</th>
          </tr>
          <tr v-for="(item, index) in table_1" :key="index">
            <td>{{item.partition}}</td>
            <td><el-input v-model="item.choice"></el-input></td>
            <td><el-input v-model="item.output"></el-input></td>
          </tr>
        </table>
        <div class="for-icon">
          <el-button size="mini" @click="addToTable">Add</el-button>
          <el-button size="mini" @click="deleteTable">Delete</el-button>
          <el-button size="mini" type="primary" @click="submitTable">OK</el-button>
        </div>
      </div>
    </div>
    <div class="termination">
      <span class="tag">Termination</span>
      <div class="radio-wrapper">
        <p>Please choose a termination from the blow list:</p>
        <el-radio v-model="radio" label="0">Detect one fault</el-radio>
        <el-radio v-model="radio" label="1">Detect many faults<el-input v-model="detect_1" :disabled="radio !== '1'"></el-input></el-radio>
        <el-radio v-model="radio" label="2">Execute test cases<el-input v-model="detect_2" :disabled="radio !== '2'"></el-input></el-radio>
        <div class="right-button">
          <el-button type="primary" @click="submitTermination">OK</el-button>
        </div>
      </div>
    </div>
    <div class="test-repeat">
      <span class="tag">Test Repeat</span>
      <div class="test-repeat-number">Please input the maximum number of tests<el-input v-model="number" type="number" :min="1" :max="1000"></el-input><el-button size="small" type="primary" @click="submitRepeatCount">OK</el-button>
        <div class="right-button">
          <el-button @click="submitTermination">Test</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fileList: [],
      isFileUpload: false,
      table_1: [{
        partition: 1,
        choice: '',
        output: ''
      }],
      radio: '',
      detect_1: '',
      detect_2: '',
      number: 1
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`只能选择1个文件！`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除${file.name}？`)
    },
    uploadFile () {
      this.isFileUpload = true
      console.log(this.fileList)
    },
    addToTable () {
      this.table_1.push({
        partition: this.table_1.length ? this.table_1.length + 1 : 1,
        choice: '',
        output: ''
      })
    },
    deleteTable () {
      this.table_1.splice(this.table_1.length - 1, 1)
    },
    submitTable () {
      console.log(this.table_1)
    },
    submitTermination () {
      console.log(this.radio, this.detect_1, this.detect_2)
      this.$router.push({ path: '/dynamicPage/testingProcess' })
    },
    submitRepeatCount () {
      console.log(this.number)
    }
  }
}
</script>

<style scoped>
.con-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
}
.con-wrapper span.tag {
  display: inline-block;
  padding: 10px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 0 3px 3px 3px;
  background: rgb(220, 220, 220);
}
.test-suite, .partition-setting, .termination, .test-repeat {
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  text-align: left;
}
.con-wrapper .test-suite {
  border: none;
}
.file-wrapper, .table-wrapper, .radio-wrapper, .test-repeat-number {
  padding: 10px 20px 20px 20px;
  text-align: center;
}
.file-wrapper .upload-demo {
  max-width: 360px;
  margin: 0 auto;
}
.table-wrapper table {
  width: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;
}
.table-wrapper table th, .table-wrapper table td {
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.for-icon .el-icon-circle-plus-outline, .for-icon .el-icon-remove-outline {
  font-size: 28px;
  cursor: pointer;
}
.for-icon .el-button--mini {
  margin-left: 10px;
  vertical-align: top;
}
.radio-wrapper p {
  margin: 10px;
  font-size: 18px;
  font-weight: bold;
}
.radio-wrapper .el-radio {
  display: block;
  margin-left: 30px;
  padding: 5px 0;
  text-align: left;
}
.radio-wrapper .el-radio .el-input {
  max-width: 300px;
  margin-left: 20px;
}
.test-repeat-number .el-input {
  max-width: 80px;
  margin: 0 20px;
}
.right-button {
  margin-top: 5px;
  text-align: right;
}
.radio-wrapper >>> .el-input__inner, .test-repeat-number >>> .el-input__inner {
  height: 32px;
  line-height: 32px;
}
</style>
