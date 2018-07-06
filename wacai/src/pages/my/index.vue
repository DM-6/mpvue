<template>
    <div class="container">
        <div class="header">
            <div class="userInfo" @click="toIndex">
                <div class="userInfo-avatarName">
                    <div class="userImg">
                        <open-data class="thumb" type="userAvatarUrl"></open-data>
                    </div>
                    <div class="nameInfo">
                        <div class="userName">
                            <open-data class="nackname" lang="zh_CN" type="userNickName"></open-data>
                        </div>
                        <span class="live"><p>LV 7</p></span>
                    </div>
                </div>
                <image src="/static/images/next.png"/>
            </div>
            <div class="youhui">
                <div class="qian" @click="toIndex">
                    <span class="qianbi">金币</span>
                    <span class="jine">85</span>
                </div>
                <div class="quan" @click="toIndex">
                    <span class="qianbi">优惠券</span>
                    <span class="jine">0</span>
                </div>
            </div>
        </div>
        <div class="contentList">
            <div class="list" @click="toIndex">
                <div class="item list-item">
                    <div class="item-title">
                        <image src="/static/images/mall.png"/>
                        <span class="text">金币商城</span>
                    </div>
                    <div class="item-desc">
                        <span class="desc">0元好礼在这里</span> 
                        <image src="/static/images/next.png"/>
                    </div>      
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/present.png"/>
                        <span class="text">天天挖宝</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/people.png"/>
                        <span class="text">邀请有礼</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
                <div class="item list-item">
                    <item class="item-title">
                        <image src="/static/images/touzi.png"/>
                        <span class="text">我的投资</span>
                    </item>
                    <div class="item-desc">
                        <span class="desc">昨日收益</span>
                        <span class="money">￥+0.00</span>
                        <image src="/static/images/next.png"/>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/shequ.png"/>
                        <span class="text">挖财社区</span>
                    </div>
                    <div class="item desc">
                        <span class="desc">教你一千种赚钱的方法</span>
                        <image src="/static/images/next.png"/>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/rili.png"/>
                        <span class="text"> 挖财日历</span>
                    </div>
                    <div class="item-desc">
                        <span class="desc">添加提醒</span>
                        <image src="/static/images/next.png"/>
                    </div>
                </div>
                <div class="item list-item">
                    <div class="item-title">
                        <image src="/static/images/fenxiang.png"/>
                        <span class="text">分享给好友</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/brother.png"/>
                        <span class="text">兄弟APP</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/help.png"/>
                        <span class="text"> 帮助反馈</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
                <div class="item">
                    <div class="item-title">
                        <image src="/static/images/wacai.png"/>
                        <span class="text"> 关于挖财</span>
                    </div>
                    <image src="/static/images/next.png"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){},
    methods: {
        toIndex(){
            wx.showToast({
            title: '代完善',
            icon: 'success',
            duration: 2000
            })
        }
    }
}
</script>

<style>
.container{
    font-size: 30rpx;
    background: #f6f6f6;
    height: 100%;
    box-sizing: border-box;
}
.header{
    overflow: hidden;
    padding-top: 30rpx;
}
.userInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150rpx;
    overflow: hidden;
    background: #fff;
    border-bottom: 1rpx solid #ececec;
}
.userInfo-avatarName{
    display: flex;
    overflow: hidden;
}
.userInfo image{
    width: 45rpx;
    height: 45rpx;
    margin: 10rpx;
}
.userImg{
    height: 100rpx;
    width: 100rpx;
    border-radius: 50%;
    margin: 30rpx;
}
.thumb{
    border-radius: 50%;
}
.nameInfo{
    display: flex;
    justify-content: center;
    align-items: center;
}
.userName{
    height: 50rpx;
    color: #000;
    font-size: 40rpx;
}
.live{
    margin: 10rpx;
    width: 70rpx;
    height: 35rpx;
    border: 1rpx solid #a72a17;
    color:#d25f21;
    background: #fed61b;
    border-radius: 10rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.live p{
    font-size: 25rpx;
    margin: 5rpx;
}
.youhui{
    height: 120rpx;
    background: #fff;
    display: flex;
    overflow: hidden;
}
.qian{
    width: 50%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right: 1rpx solid #ececec;
}
.quan{
    width: 50%;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.qianbi{
    color: #757575;
    font-size: 40rpx;
}
.jine{
    color: #c6c9cd;
    font-size: 35rpx;
}
.contentList{
    overflow: hidden;
    /* padding-top: 30rpx; */
}
/* .list{
    background: #fff;
} */
.item{
    height: 100rpx;
    padding-left: 20rpx;
    font-size: 35rpx;
    background: #fff;
    display: flex;
    align-items: center;  
    justify-content: space-between;  
    border-bottom: 1rpx solid #ececec; 
}
.list-item{
    margin-top: 40rpx;
}
.item-title{
    display: flex;
    align-items: center; 
}
.item-title span{
    margin-left: 10px;
    color: #333333;
}
.item-desc{
    display: flex;
    align-items: center; 
}
.item image{
    width: 45rpx;
    height: 45rpx;
    margin: 10rpx;
}
.desc{
    color: #767676;
    font-size: 30rpx;
}
.money{
    color: #2ccf98;
    font-size: 30rpx;
    margin-left: 10rpx;
}
</style>