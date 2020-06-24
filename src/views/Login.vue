<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/logo.jpg" alt="my login image" />
    </div>
    <InputGroup type="text" v-model="account" placeholder="帳號" :error="error" />
    <InputGroup type="text" v-model="password" placeholder="密碼" :error="error" />
    <div v-if="error" class="invalid-feedback">{{errorMsg}}</div>
    <div class="login-btn">
      <button :disabled="wrongInput" @click="login">登入</button>
    </div>
  </div>
</template>

<script>
import InputGroup from "../components/InputGroup";
export default {
  name: "login",
  data() {
    return {
      account: "",
      password: "",
      errorMsg: "",
      error: false
    };
  },
  components: {
    InputGroup
  },
  computed: {
    wrongInput() {
      return !this.account || !this.password;
    }
  },
  methods: {
    login() {
      console.log("登入");
      this.error = false;
      this.$axios
        .post("/api/signin", {
          username: this.account,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.success) {
            console.log("登入成功");
            localStorage.setItem('ele_login', true);
            this.$router.push('/');
          } else {
            console.log("登入失敗");
            this.errorMsg = "帳號密碼錯誤";
            this.error = true;
          }
        })
        .catch(err => {
          console.log(err);
          console.log('連線失敗');
          this.errorMsg = "連線失敗";
          this.error = true;
        });
    }
  }
};
</script>


<style scoped>
.login {
  max-width: 500px;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
  margin: auto;
}

.logo {
  text-align: center;
}
.logo img {
  width: 150px;
}
.text-group,
.login-btn {
  margin-top: 20px;
}
.login-btn button {
  width: 100%;
  height: 40px;
  background-color: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
.login-btn button[disabled] {
  background-color: #8bda81;
}

.invalid-feedback {
  color: red;
  padding-top: 10px;
  margin: auto;
}
</style>