<template>
    <div class="container">
        <div class="header">
            <div class="nav">
                <div class="accountBook">
                    <image class="icon" src="/static/images/zhangben.png"/>
                </div>
                <span class="bookName">日常账本</span>
                <div class="spendType">
                    <image class="icon" src="/static/images/yuanbing.png"/>
                </div>
                <div class="msg">
                    <image class="icon" src="/static/images/message.png"/>
                </div>
            </div>
            <div class="record">
                <div class="spend">
                    <span class="title">本月支出</span>
                    <span class="pay">104.89</span>
                </div>
                <div class="bal">
                    <div class="income">
                        <span class="title">本月收入</span>
                        <span class="incomeMoney">0.00</span>
                    </div>
                    <div class="balance">
                        <span class="title">预算余额</span>
                        <span class="set">去设置</span>
                    </div>
                </div>
            </div>
            <div class="write">
                <button class="btn">
                    <span class="writeOne">记一笔</span>
                    <span class="writeQuick">速记</span>
                </button>
            </div>
        </div>
        <bill></bill>
    </div>
</template>

<script>
export default {
    
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
    background: #7894be;
}
.nav{
    display: flex;
    overflow: hidden;
    margin-left: 30rpx;
    margin-right: 40rpx;
}
.icon{
    width: 60rpx;
    height: 60rpx;
    margin: 15rpx;
}
.bookName{
    width: 500rpx;
    color: #fff;
    font-size: 40rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.record{
    overflow: hidden;
}
.spend{
    margin-left: 40rpx;
    margin-top: 50rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.title{
    font-size: 35rpx;
    color: #fff;
}
.pay{
    font-size: 60rpx;
    color: #fff;
    margin-top: 20rpx;
}
.bal{
    display: flex;
    overflow: hidden;
    margin: 45rpx 0;
}
.income{
    width: 50%;
    margin-left: 40rpx;
}
.incomeMoney{
    font-size: 35rpx;
    color: #fff;
    margin-left: 30rpx;
}
.balance{
    width: 50%;
}
.set{
    font-size: 35rpx;
    color: #fff;
    margin-left: 30rpx;
}
.write{
    padding: 0 40rpx;
    border-radius: 10rpx;
    margin-bottom: 10rpx;
}
.btn{
    background: linear-gradient(to right, rgba(255,156,70,1) 0%,rgba(255,137,69,1) 35%,rgba(255,119,69,1) 67%,rgba(255,97,68,1) 100%);
    color: #fff;
    overflow: hidden;
    display: flex;
}
.writeOne{
    font-size: 45rpx;
    width: 550rpx;
}
.writeQuick{
    width: 250rpx;
    height: 60rpx;
    margin: 30rpx 15rpx;
    font-size: 35rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 2rpx solid #f05631;
}
</style>