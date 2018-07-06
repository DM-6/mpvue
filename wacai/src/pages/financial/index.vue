<template>
    <div class="page">
        <div class="header">
            <div class="title">
                <image class="icon" src="/static/images/tuijian.png"/>
                <span>产品推荐</span>
            </div>
            <div class="content">
                <div class="goods-title">
                    <span>众邦宝</span>
                    <div class="tag">
                        <span>众邦银行存款产品</span>
                    </div>
                </div>
                <div class="income">
                    <span class="income-num">4.1%</span>
                    <span class="desc">今日支取年收益率</span>
                </div>
                <div class="goods-tag">
                    <div class="tag-desc">
                        <image class="tag-icon" src="/static/images/time.png"/>
                        <span>随时存取</span>
                    </div>
                    <div class="tag-desc">
                        <image class="tag-icon" src="/static/images/lixi.png"/>
                        <span>当日起息</span>
                    </div>
                    <div class="tag-desc">
                        <image class="tag-icon" src="/static/images/fengxian.png"/>
                        <span>低风险</span>
                    </div>
                </div>
            </div>
            <div class="button">
                <button class="btn">
                    <span class="enter">立即存入</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.page{
    background: #f6f6f6;
    overflow: hidden;
    height: 100vh;
}
.header{
    overflow: hidden;
    background: #fff;
    display: flex; 
    flex-direction: column;
    margin-top: 30rpx;
}
.title{
    overflow: hidden;
    display: flex; 
    flex-direction: row;
    align-items: center;
    padding: 0 30rpx;
    margin: 20rpx;
}
.icon{
    width: 30rpx;
    height: 30rpx;
    margin: 10rpx;
}
.title span{
    font-size: 35rpx;
}
.content{
    overflow: hidden;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.goods-title{
    font-size: 40rpx;
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.tag{
    background: #ffa726;
    transform:skew(-25deg);
    display: flex; 
    justify-content: center;
    align-items: center;
    border-radius: 10rpx;
    margin-left: 20rpx;
}
.tag span{
    color: #fff;
    font-size: 25rpx;
    margin: 5rpx 10rpx;
}
.income{
    margin-top: 40rpx;
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.income-num{
    color: #ff6044;
    font-size: 70rpx;
    font-weight: bold;
}
.desc{
    color: #bbbec3;
    font-size: 25rpx;
}
.goods-tag{
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.goods-tag span{
    color: #7e7e7e;
    font-size: 25rpx;
}
.tag-icon{
    width: 40rpx;
    height: 40rpx;
    margin: 10rpx;
}
.tag-desc{
    display: flex; 
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 20rpx 30rpx;
}
.button{
    padding: 0 40rpx;
    border-radius: 10rpx;
    margin-bottom: 20rpx;
}
.btn{
    background: linear-gradient(to right, rgba(255,156,70,1) 0%,rgba(255,137,69,1) 35%,rgba(255,119,69,1) 67%,rgba(255,97,68,1) 100%);
    color: #fff;
    overflow: hidden;
    display: flex;
}
.enter{
    font-size: 35rpx;
    width: 550rpx;
}
</style>