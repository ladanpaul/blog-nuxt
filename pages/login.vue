<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm">
    <h1 class="login-title">Login</h1>
    <el-form-item label="Name" prop="name">
      <el-input type="text" v-model="ruleForm.name" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="ruleForm.pass" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Confirm password" prop="checkPass">
      <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        pass: [{ validator: this.validatePass, trigger: "blur" }],
        checkPass: [{ validator: this.validatePass2, trigger: "blur" }],
        name: [{ validator: this.validateName, trigger: "blur" }]
      }
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.$refs[formName].resetFields();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },

    validateName(rule, value, callback) {
      if (value.length >= 2) {
        callback();
      } else {
        callback(
          new Error(
            "Please input your name, your name should be longer then 1 symbol"
          )
        );
      }
    },

    validatePass(rule, value, callback) {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    },

    validatePass2(rule, value, callback) {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    }
  }
};
</script>

<style scoped>
.el-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.el-form-item {
  width: 400px;
}
</style>