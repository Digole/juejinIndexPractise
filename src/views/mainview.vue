<template>
  <div class="main-content">
    <div class="view welcome-view">
      <div class="feed welcome-feed">
        <nav class="nav">
          <h5>{{ topic }}</h5>
          <ul class="nav-list left">
            <li class="nav-item"><a>{{ recom }}</a></li>
            <li class="nav-item"><a>{{ frontend }}</a></li>
            <li class="nav-item"><a>{{ android }}</a></li>
            <li class="nav-item"><a>{{ backend }}</a></li>
            <li class="nav-item"><a>{{ ai }}</a></li>
            <li class="nav-item"><a>{{ ios }}</a></li>
            <li class="nav-item"><a>{{ source }}</a></li>
            <li class="nav-item"><a>{{ read }}</a></li>
            <li class="nav-item"><a>{{ maintenance }}</a></li>
          </ul>
        </nav>
        <ul class="entry-list">
          <li
            class="item"
            v-for="item in contentList"
            :key="(item,index) in contentList"
          >
            <div class="content-box">
              <div class="info-box">
                <div class="info-row meta-row">
                  <ul class="meta-list">
                    <li
                      class="item hot"
                      v-if="item.meta.hot"
                    ><a>{{item.meta.hot}}</a></li>
                    <li
                      class="item post"
                      v-if="item.meta.post"
                    ><a>{{item.meta.post}}</a></li>
                    <li
                      class="item username"
                      v-if="item.meta.username"
                    ><a>{{item.meta.username}}</a></li>
                    <li
                      class="item time"
                      v-if="item.meta.time"
                    ><a>{{item.meta.time}}</a></li>
                    <li
                      class="item tag"
                      v-if="item.meta.tag"
                    ><a>{{item.meta.tag}}</a></li>
                  </ul>
                </div>
                <div class="info-row title-row">
                  <a>{{item.title}}</a>
                </div>
                <div class="info-row action-row">
                  <ul class="action-list">
                    <li class="item like clickable">
                      <a>
                        <img src="@/assets/like.svg">
                        <span class="count">{{item.like}}</span>
                      </a>
                    </li>
                    <li class="item comment clickable">
                      <a>
                        <img src="@/assets/dislike.svg">
                        <span class="count">{{item.dislike}}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div></div>
              </div>
              <div class="icon-right"></div>
            </div>
          </li>
        </ul>
      </div>
      <aside class="welcome-side">
        <div class="shadow section auth-section">
          <auth-section></auth-section>
        </div>
        <div class="shadow section tag-list">
        </div>
        <div class="shadow section recommend-book">
        </div>
        <div class="shadow section qrcode">
        </div>
        <div class="shadow section link">
        </div>
        <div class="follow-section">
          <header>{{ followUs }}</header>
          <ul class="account-list">
            <li>
              <img src="@/assets/weibo.png">
            </li>
            <li>
              <img src="@/assets/weixin.png">
            </li>
            <li>
              <img src="@/assets/zhihu.png">
            </li>
            <li>
              <img src="@/assets/jianshu.png">
            </li>
          </ul>
        </div>
        <div class="more-section">
          <ul>
            <li>关于</li>
            <li>招聘</li>
            <li>商务合作</li>
            <li>友情链接</li>
          </ul>
          <ul>
            <li>发现更多</li>
            <li>©2018掘金</li>
          </ul>
          <ul>
            <li>津ICP备15003202号-2</li>
          </ul>
          <ul>
            <li>京公网安备11010802026719号</li>
          </ul>
        </div>
      </aside>
    </div>

    <div></div>

  </div>
</template>

<script>
import { authSection } from './components'
export default {
  name: 'mainView',
  components: {
    authSection
  },
  data () {
    return {
      topic: '热门文章',

      recom: '推荐',
      frontend: '前端',
      android: 'Android',
      backend: '后端',
      ai: '人工智能',
      ios: 'iOS',
      source: '工具资源',
      read: '阅读',
      maintenance: '运维',

      followUs: '关注我们',

      contentList: [
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        },
        {
          meta: {
            hot: '热',
            post: '专栏',
            username: '渔人码头',
            time: '7小时前',
            tag: 'Vue.js/前端'
          },
          title: 'Vue.js 3.0 新特性预览',
          like: 67,
          dislike: 20
        }
      ]
    }
  }
}
</script>

<style scoped>
.view {
  margin-top: 1.767rem;
}
.welcome-view {
  display: flex;
  align-items: flex-start;
}
.welcome-view .welcome-feed {
  flex-grow: 1;
}
.welcome-view .welcome-feed .nav {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #f6f6f6;
  background-color: #fff;
}
.welcome-view .welcome-feed .nav h5 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}
.welcome-view .welcome-feed .nav .nav-list {
  display: flex;
  align-items: baseline;
}
.welcome-view .welcome-feed .nav .nav-list .nav-item {
  margin-right: 20px;
  font-size: 14px;
  color: #90979c;
}
.welcome-view .welcome-feed .nav .nav-list .nav-item:last-child {
  margin-right: 0;
}
.welcome-view .entry-list {
  width: 100%;
  background-color: #fff;
}
.welcome-view .entry-list .item {
  border-bottom: 1px solid rgba(178, 186, 194, 0.15);
}
.welcome-view .entry-list .item .content-box {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
}
.welcome-view .entry-list .item .content-box .info-box {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.welcome-view .entry-list .item .content-box .info-box .meta-row {
  /* height属性不应该出现的 */
  height: 17px;
  font-size: 1rem;
  color: #b2bac2;
}
.welcome-view .entry-list .item .content-box .info-box .meta-row .meta-list {
  display: flex;
  align-items: baseline;
  white-space: nowrap;
}
.welcome-view
  .entry-list
  .item
  .content-box
  .info-box
  .meta-row
  .meta-list
  .hot {
  color: red;
  font-weight: 500;
}
.welcome-view
  .entry-list
  .item
  .content-box
  .info-box
  .meta-row
  .meta-list
  .item::after {
  content: "\B7";
  margin: 0 0.4em;
  color: #b2bac2;
}
.welcome-view
  .entry-list
  .item
  .content-box
  .info-box
  .meta-row
  .meta-list
  .item:last-child:after {
  content: "";
}
.welcome-view .entry-list .item .content-box .info-box .title-row {
  margin: 0.5rem 0 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
}
.welcome-view .entry-list .item .content-box .info-box .title-row a {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.2;
  color: #2e3135;
}
.welcome-view .entry-list .item .content-box .info-box .action-row {
  display: flex;
}
.welcome-view .entry-list .item .content-box .info-box .action-list {
  display: inline-flex;
  white-space: nowrap;
}
.welcome-view .entry-list .item .content-box .info-box .action-list .item {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  height: 2rem;
  font-size: 1.083rem;
  white-space: nowrap;
  color: #b2bac2;
  border-radius: 1px;
  border: 1px solid #edeeef;
}
.welcome-view .entry-list .item .content-box .info-box .action-list .item a {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
}
.welcome-view
  .entry-list
  .item
  .content-box
  .info-box
  .action-list
  .item
  a
  .count {
  color: #b2bac2;
  margin-left: 0.2em;
  font-weight: 700;
}
.welcome-view .welcome-side {
  width: 240px;
  min-width: 240px;
  margin-left: 20px;
}
.welcome-view .welcome-side .shadow {
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}
.welcome-view .welcome-side .section {
  display: block;
  background-color: #fff;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  overflow: hidden;
}
.welcome-view .welcome-side .follow-section {
  text-align: center;
  color: #909090;
}
.welcome-view .welcome-side .follow-section .account-list {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
.welcome-view .welcome-side .follow-section .account-list li img {
  width: 2rem;
  margin: 0 0.5rem;
  cursor: pointer;
}
.welcome-view .welcome-side .more-section {
  text-align: center;
  font-size: 1.1rem;
  color: #909090;
}
.welcome-view .welcome-side .more-section ul {
  display: flex;
  justify-content: center;
}
.welcome-view .welcome-side .more-section ul li {
  line-height: 19px;
}
.welcome-view .welcome-side .more-section ul li::after {
  content: "/B7";
  margin: 0 0.4rem;
}
.welcome-view .welcome-side .more-section ul li:last-child::after {
  content: "";
}
</style>
