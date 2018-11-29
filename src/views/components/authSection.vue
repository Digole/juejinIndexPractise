<template>
  <div class="content">
    <div class="title">掘金 - juejin.im</div>
    <div class="slogan">一个帮助开发者成长的社区</div>
    <div class="ticket">现在注册，送你<a class="highlight">45元</a>买小册</div>
    <div class="input-grounp">
      <div
        class="input-box"
        v-for="(item, index) in list"
        :key="index"
      >
        <input
          :name="item.name"
          :placeholder="item.tip"
          class="input"
        />
      </div>
    </div>
    <button class="btn submit-btn">立即注册</button>
    <div class="auth-box">第三方登录：<img
        src="https://b-gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg"
        class="auth-icon"
      >
      <img
        src="@/assets/github.svg"
        class="auth-icon"
      >
      <img
        src="https://b-gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg"
        class="auth-icon"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'authSection',
  data () {
    return {
      list: [
        {
          name: 'name',
          tip: '用户名'
        },
        {
          name: 'cellphone',
          tip: '手机号'
        },
        {
          name: 'passwd',
          tip: '密码（不少于 6 位）'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
  padding: 1.33rem;
  text-align: left;
}
.content .title {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #2e3135;
  font-weight: 600;
}
.content .slogan {
  margin-bottom: 0.5rem;
  font-size: 1.167rem;
  color: #2e3135;
}
.content .ticket {
  font-size: 14px;
  color: #8f969c;
  margin-bottom: 1rem;
}
.content .ticket .highlight {
  margin-left: 5px;
  margin-right: 5px;
  color: #007fff;
}
.content .input-grounp .input-box {
  position: relative;
  margin-bottom: 0.833rem;
}
.content .input-grounp .input-box .input {
  overflow: visible;
  padding: 0.7rem 0.6rem;
  width: 100%;
  font-size: 1.167rem;
  line-height: 20px;
  background-color: #fbfbfb;
  border: 1px solid #f4f4f4;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}
.content .submit-btn {
  padding: 0.7rem 0;
  width: 100%;
  font-size: 1.167rem;
}
.content .auth-box {
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.9rem;
  color: #8f969c;
}
.content .auth-box .auth-icon {
  margin-left: 1.2rem;
  height: 1.9rem;
  vertical-align: bottom;
  cursor: pointer;
}
</style>
