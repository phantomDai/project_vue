<template>
  <div class="sp-wrapper">
    <div class="wrapper-top">
      <label>WSDL EndPoint:</label>
      <el-input v-model="endPoint" placeholder="url"></el-input>
      <el-button @click="submitButton" type="primary">Parse</el-button>
    </div>
    <div class="wrapper-bottom">
      <div class="operation-wrapper">
        <p>operations</p>
        <el-select v-model="selected" placeholder="select" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="right-button" style="padding: 0 10px 20px 0;">
          <el-button type="primary" size="small" @click="showTableContent">OK</el-button>
        </div>
      </div>
      <div class="table-wrapper">
        <table>
          <tr>
            <th>Parameters</th>
            <th>Type</th>
            <th>Choics</th>
          </tr>
          <tr v-for="(item, index) in table_1" :key="index">
            <td><el-input v-model="item.parameters"></el-input></td>
            <td><el-input v-model="item.tre"></el-input></td>
            <td><el-input v-model="item.choice"></el-input></td>
          </tr>
        </table>
        <div class="right-button">
          <el-button type="primary" size="small">OK</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      endPoint: '',
      selected: '',
      options: [{
        label: 'consignmentFee',
        value: '0'
      }],
      table_1: [{
        parameters: '',
        tre: '',
        choice: ''
      }]
    }
  },
  methods: {
    showTableContent () {
      if (this.selected) {
        this.table_1 = [{
          parameters: 'cabinClass',
          tre: 'Int',
          choice: ''
        }, {
          parameters: 'region',
          tre: 'Int',
          choice: ''
        }, {
          parameters: 'isStudent',
          tre: 'Boolean',
          choice: ''
        }, {
          parameters: 'weight',
          tre: 'Double',
          choice: ''
        }]
      } else {
        this.table_1 = [{
          parameters: '',
          tre: '',
          choice: ''
        }]
      }
    },
    submitButton () {
      console.log(this.endPoint)
    }
  }
}
</script>

<style scoped>
.sp-wrapper {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.wrapper-top {
  padding-top: 20px;
}
.wrapper-top label {
  font-size: 18px;
  font-weight: bold
}
.wrapper-top .el-input {
  width: 250px;
  margin: 0 10px
}
.wrapper-bottom {
  display: flex;
  margin: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
.operation-wrapper {
  border-right: 1px solid rgba(0, 0, 0, 0.3);
}
.operation-wrapper p {
  padding: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 16px;
  font-weight: bold;
}
.operation-wrapper .el-select--small {
  max-width: 200px;
  margin: 20px 10px;
}
.table-wrapper {
  flex: 1;
  padding: 20px;
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
.right-button {
  text-align: right;
}
</style>
