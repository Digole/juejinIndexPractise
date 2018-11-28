<template>
  <div class="container">
    <a class="logo">
      <img src="@/assets/logo.svg" :alt="alts">
    </a>
    <nav role="navigation" class="main-nav">
      <ul class="navigation">
        <li class="nav-title">
          <ul>
            <li><a>{{ index }}</a></li>
            <li><a>{{ news }}</a></li>
            <li><a>{{ booklet }}</a></li>
            <li><a>{{ opensource }}</a></li>
            <li><a>{{ activity }}</a></li>
          </ul>
        </li>
        <li class="nav-item searchbar">
          <form class="search-form">
            <input :placeholder="searchTips" class="input">
            <img src="@/assets/search.svg">
          </form>
        </li>
        <li class="nav-item add">
          <img src='@/assets/edit.svg'>
          <span class="add-btn add-button">{{ edit }}</span>
        </li>
        <li class="nav-item auth">
          <span class="auth-text">{{ auth }}</span>
          <span>{{ register }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'titeline',
  data () {
    return {
      alts: '掘金',
      index: '首页',
      news: '动态',
      booklet: '小册',
      opensource: '开源库',
      activity: '活动',

      searchTips: '搜索掘金',
      edit: '写文章',
      auth: '登录',
      register: '注册',

      publish: '发布沸点',
      link: '分享链接'
    }
  }
}
</script>

<style scoped>
.container {
  width: 80rem;
  height: 100%;
  display: flex;
  align-content: center;
  margin: auto;
}

.logo {
  min-width: 98px;
  height: 3.5rem;
  margin: auto 2rem auto 0;
}
.main-nav {
  flex: auto;
  display: flex;
  align-items: center;
}

.navigation {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.navigation .nav-item {
  padding: 0 1.2rem;
  color: #007fff;
  font-size: 1.33rem;
}
.navigation .nav-title ul {
  display: flex;
}
.navigation .nav-title ul li {
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
  color: #71777c;
  font-size: 1.33rem;
}
.navigation .searchbar {
  display: flex;
  flex: auto;
  justify-content: flex-end;
  font-size: 1.33rem;
}
.navigation .searchbar .search-form {
  display: flex;
  align-content: center;
  justify-content: space-between;
  border: 1px solid hsla(0, 0%, 59%, 0.2);
  border-radius: 2px;
  background-color: rgba(227, 231, 236, 0.2);
}
.navigation .searchbar .search-form input {
  width: 8rem;
  padding: 0.6rem 1rem;
  outline: none;
  border: none;
  /* font: inherit; */
  font-size: 16px;
  background-color: transparent;
  color: #fff;
}
.navigation .searchbar .search-form input::placeholder {
  color: hsla(0, 0%, 59%, 0.8);
  font-size: 1.1rem;
}
.navigation .searchbar .search-form img {
  padding: 0 0.5rem;
}
.navigation .add {
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.navigation .add img {
  height: 22px;
  width: 22px;
}
.navigation .add .add-btn {
  background-color: #fff;
  outline: none;
  border: none;
  font-size: calc(7rem / 6);
}
.navigation .add .add-button {
  font-size: 1.33rem;
}
.navigation .add::after {
  content: "|";
  position: absolute;
  left: 100%;
  top: 20px;
  color: hsla(0,0%,59%,.4);
}
.navigation .add .more-list {
  position: absolute;
  top: 100%;
  display: flex;
  padding: 5px 0;
  border: 1px solid #ebebeb;
  border-radius: 2px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: #3b76c5;
  font-size: calc(7rem / 6);
}
.navigation .add .more-list .list-item {
  padding-left: 0.8rem;
  line-height: 1.9;
  color: inherit;
}
.navigation .auth {
  padding-right: 0;
  display: flex;
  align-items: center;
}
.navigation .auth .auth-text::after {
  content: "\B7";
  width: 3px;
  margin: 0 .4rem;
}
</style>
