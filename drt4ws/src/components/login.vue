<template>
  <div ref="bg" class="bg-wrapper">
    <div class="login-wrapper">
      <div class="input-wrapper">
        <label>UserName:</label>
        <el-input
          suffix-icon="el-icon-edit"
          v-model="userName"
          size="small"
          placeholder="admin"
          :disabled="count === 0">
        </el-input>
      </div>
      <div class="input-wrapper">
        <label>Password:</label>
        <el-input
          suffix-icon="el-icon-edit"
          v-model="password"
          size="small"
          type="password"
          placeholder="admin"
          :disabled="count === 0">
        </el-input>
      </div>
      <el-button type="primary" :loading="isLoading" :disabled="count === 0" @click="routeToDynamicPage">Login</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      isLoading: false,
      count: 3
    }
  },
  methods: {
    routeToDynamicPage () {
      if (this.userName && this.password && this.count > 0) {
        this.isLoading = true
        if (this.userName === 'admin' && this.password === 'admin') {
          this.isLoading = false
          this.$router.push({ path: '/dynamicPage/serviceParsing' })
        } else {
          this.count--
          this.isLoading = false
          this.$message({
            type: 'warning',
            message: `UserName or Password is wrong! please enter again! You have ${this.count} frequency left!`
          })
        }
      } else {
        this.count--
        this.$message({
          type: 'warning',
          message: `please make sure you have entered your UserName and Password! You have ${this.count} frequency left!`
        })
      }
    }
  },
  mounted () {
    // this.$refs.bg.style.width = window.innerWidth ? window.innerWidth : (document.body.clientWidth ? document.body.clientWidth : document.documentElement.clientWidth)
    // this.$refs.bg.style.height = window.innerHeight ? window.innerHeight : (document.body.clientHeight ? document.body.clientHeight : document.documentElement.clientHeight)
    // console.log(this.$refs.bg.style.width, this.$refs.bg.style.height)
    this.$refs.bg.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        this.routeToDynamicPage()
      }
    })
  }
}
</script>

<style scoped>
.bg-wrapper {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/bg.jpg');
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-family: 'Helvetica Neue';
}
.login-wrapper {
  position: fixed;
  top: 30%;
  right: 80px;
  transform: translateY(-50%);
  padding: 50px 30px 20px 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  text-align: center;
  background: rgba(219, 236, 244, 0.1);
}
.input-wrapper {
  margin-bottom: 20px;
}
.input-wrapper label {
  display: inline-block;
  width: 100px;
  font-size: 16px;
}
.input-wrapper .el-input {
  max-width: 200px;
}
</style>
