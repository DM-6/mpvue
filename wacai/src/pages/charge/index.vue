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
        <div class="bill-content">
            <div class="bill">
                <div class="bill-item">
                    <div class="bill-name">
                        <span class="spend-type">午餐</span>
                        <div class="spend-content">
                            <span class="time">07-05 13:55</span>
                            <span class="goods">面包 酸奶</span>
                        </div>
                    </div>
                    <span class="price">￥12.30</span>
                </div>
            </div>
            <div class="bill">
                <div class="bill-item">
                    <div class="bill-name">
                        <span class="spend-type">午餐</span>
                        <div class="spend-content">
                            <span class="time">07-05 13:55</span>
                            <span class="goods">面包 酸奶</span>
                        </div>
                    </div>
                    <span class="price">￥12.30</span>
                </div>
            </div>
            <div class="bill">
                <div class="bill-item">
                    <div class="bill-name">
                        <span class="spend-type">午餐</span>
                        <div class="spend-content">
                            <span class="time">07-05 13:55</span>
                            <span class="goods">面包 酸奶</span>
                        </div>
                    </div>
                    <span class="price">￥12.30</span>
                </div>
            </div>
            <div class="bill">
                <div class="bill-item">
                    <div class="bill-name">
                        <span class="spend-type">午餐</span>
                        <div class="spend-content">
                            <span class="time">07-05 13:55</span>
                            <span class="goods">面包 酸奶</span>
                        </div>
                    </div>
                    <span class="price">￥12.30</span>
                </div>
            </div>
        </div>
        <div class="up">
            <image src="/static/images/up.png"/>
        </div>
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
    margin-top: 40rpx;
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
    margin: 40rpx 0;
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
.bill{
    overflow: hidden;
}
.bill-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    padding: 0 40rpx;
    background: #fff;
    border: .5rpx solid #ececec;
}
.bill-name{
    width: 500rpx;
    margin: 12rpx 0;
}
.spend-type{
    color: #757575;
    font-size: 40rpx;
}
.spend-content{
    color: #babec3;
    font-size: 30rpx;
    margin-top: 6rpx;
    display: flex;
}
.goods{
    width: 300rpx;
    margin-left: 20rpx;
    overflow: hidden; 
    text-overflow: ellipsis;
    display: -webkit-box; 
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; 
}
.price{
    color: #ff5e5b;
    font-size: 35rpx;
}
.up{
    background: #fff;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}
.up image{
    width: 60rpx;
    height: 30rpx;
    margin: 20rpx;
}
</style>