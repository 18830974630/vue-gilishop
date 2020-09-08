<template>
  <div class="type-nav">
    <div class="container">
      <div>
        <h2 class="all">全部商品分类</h2>
        <div class="sort">
          <div class="all-sort-list2" @click="toSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{item_on:currentIndex === index}"
              @mouseenter="moveIn(index)"
            >
              <h3>
                <!-- <router-link
                  :to="{name:'search',query:{categoryName:c1.categoryName,category1id:c1.category1id }}"
                >{{c1.categoryName}}</router-link>-->
                <!-- <a href>{{c1.categoryName}}</a> -->
                <a
                  href="javascript:;"
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <!-- <router-link
                        :to="{name:'search',query:{categoryName:c2.categoryName,category1id:c2.category1id}}"
                      >{{c2.categoryName}}</router-link>-->
                      <!-- <a href>{{c2.categoryName}}</a> -->
                      <a
                        href="javascript:;"
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                        <!-- <router-link
                          :to="{name:'search',query:{categoryName:c3.categoryName,}}"
                        >{{c3.categoryName}}</router-link>-->
                        <!-- <a href>{{c3.categoryName}}</a> -->
                        <a
                          href="javascript:;"
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
    };
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },
    // moveIn(index) {
    //   console.log(index);
    //   this.currentIndex = index;
    // },
    moveIn: throttle(
      function (index) {
        // console.log(index);
        this.currentIndex = index;
      },
      50,
      { trailing: false }
    ),
    toSearch(event) {
      let target = event.target; //代表目标元素  目标元素有可能是a 也有可能不是a
      let data = target.dataset; //dataset 拿的就是元素身上以data-开头的所有的属性和值组成的一个对象 里面的属性都改为了小写
      // console.log(data)

      let { categoryname, category1id, category2id, category3id } = data;

      if (categoryname) {
        //如果categoryname是存在的代表点的一定是a

        //既然点的是a 那么一定会跳转，所以我们创建跳转的对象
        let location = {
          name: "search",
        };

        //创建query参数的对象，来收集整理query参数
        let query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        //把query参数放到location当中
        location.query = query;

        this.$router.push(location);
      }
    },
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang='less' scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: hotpink;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
