import VueRouter from 'vue-router'

// 一级页面 公共样式footer
import Home from './components/tabber/Home.vue'
import Free from './components/tabber/Free.vue'
import Quotation from './components/tabber/Quotation.vue'
import Transaction from './components/tabber/Transaction.vue'

// 二级页面公共header样式 
import Public from './components/homeNews/Public.vue'
import MarketIndex from './components/homeNews/MarketIndex.vue'
import StockRegister from './components/homeNews/StockRegister.vue'
import StockIntroduction from './components/homeNews/StockIntroduction.vue'
import StockChoice from './components/homeNews/StockChoice.vue'
import HotTongHuaShun from './components/homeNews/HotTongHuaShun.vue'
import LineK from './components/homeNews/LineK.vue'
import PunchRecord from './components/homeNews/PunchRecord.vue'
import More from './components/homeNews/More.vue'

// 三级页面 更多
import ShenMore from './components/homeNews/ShenMore.vue'
import WorldMore from './components/homeNews/WorldMore.vue'

import HotLoader from './components/homeNews/HotLoader.vue'
import HotText from './components/homeNews/HotText.vue'

// 资讯
import zixun from './components/tapfour/ZiXun.vue'
import news from './components/tapfour/QuickNews.vue'
import pan from './components/tapfour/Pan.vue'
import datas from './components/tapfour/Datas.vue'

// 新闻详情
import newsinfo from './components/homeNews/NewsInfo.vue' 

// 评论
import comment from './components/homeNews/Comment.vue'

// 扫码
import saom from './components/homeNews/SaoM.vue'

var router = new VueRouter ({
    routes:[
        { path: '/', redirect: '/index/zixun'},
        { 
            path:'/index',
            component: Home,
            children: [
                { path:'zixun', component: zixun},
                { path:'pan', component: pan},
                { path:'news', component: news},
                { path:'datas', component: datas}
            ],
            linkActiveClass: 'van-tabbar-item--active'

        },
        { path: '/saoM', component: saom},
        { path: '/comment', component: comment},
        { path: '/news/:id', component: newsinfo},
        { path:'/free', component: Free },
        { path:'/quotation', component: Quotation },
        { path:'/transaction', component: Transaction },

        // 二级页面，公共header样式
        { 
            path: '/public', 
            component: Public,
            children: [
                { path: 'marketIndex', component: MarketIndex},
                { path: 'stockRegister', component: StockRegister},
                { path: 'stockIntroduction', component: StockIntroduction},
                { path: 'stockChoice', component: StockChoice},
                { 
                    path: 'hotTongHuaShun', 
                    component: HotTongHuaShun,
                    children: [
                        {path: 'hotLoader', component: HotLoader},
                        {path: 'hotText', component: HotText}
                    ]
                },
                { path: 'lineK', component: LineK},
                { path: 'punchRecord', component: PunchRecord},
                { path: 'more', component: More},
                { path: 'shenMore', component: ShenMore},
                { path: 'worldMore', component: WorldMore}
            ]
        }
    ],
    linkActiveClass: 'van-tabbar-item--active'
})
router.beforeEach((to, from, next) => {
    // 让页面回到顶部
    document.documentElement.scrollTop = 0
    // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
   next()
})

export default router