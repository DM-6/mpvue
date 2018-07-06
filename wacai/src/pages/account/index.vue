<template>
    <div class="page">
        <div class="header">
            <div class="nav">
                <div class="money-type">
                    <span>全部</span>
                    <image class="down" src="/static/images/down.png"/>
                </div>
                <image class="nav-icon" src="/static/images/add.png"/>
            </div>
            <div class="total">
                <span>￥-2000.45</span>
            </div>
            <div class="bal">
                <div class="balance">
                    <span>余额</span>
                    <span class="money">￥-2000.45</span>
                </div>
                <div class="borrow">
                    <span>借贷</span>
                    <span class="money">￥0.00</span>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="cash">
                <span>现金</span>
                <span>￥-2000.45</span>
            </div>
            <div class="account-list">
                <div class="list-item">
                    <div class="list-title list-itemTop">
                        <image class="list-icon" src="/static/images/money.png"/>
                        <span class="title">现金</span>
                    </div>
                    <span class="money-cash">￥-2000.45</span>
                </div>
                <div class="list-item list-toItem">
                    <div class="list-title">
                        <image class="list-icon" src="/static/images/yincang.png"/>
                        <div class="title-desc">
                            <span>隐藏账户</span>
                            <span>账户右移即可隐藏</span>
                        </div>
                    </div>
                    <image class="next" src="/static/images/next.png"/>
                </div>
                <div class="list-item list-toItem">
                    <div class="list-title">
                        <image class="list-icon" src="/static/images/add1.png"/>
                        <span>添加新账户</span>
                    </div>
                    <image class="next" src="/static/images/next.png"/>
                </div>
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
    background: #d94b40;
    overflow: hidden;
}
.nav{
    display: flex;
    justify-content: space-between;
    padding: 0 30rpx;
}
.down{
    width: 40rpx;
    height: 40rpx;
    margin: 15rpx;
}
.nav-icon{
    width: 60rpx;
    height: 60rpx;
    margin: 15rpx;
}
.money-type{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
}
.money-type span{
    font-size: 40rpx;
    color: #fff;
}
.total{
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 60rpx;
    font-weight: bold;
}
.bal{
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    color: #fff;
    font-size: 35rpx;
    margin: 20rpx 0;
}
.balance{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.borrow{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}
.money{
    margin-left: 10rpx;
}
.cash{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40rpx;
    color: #8e8e8e;
    font-size: 35rpx;
}
.cash span{
    margin: 10rpx 0;
}
.list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0 40rpx;
    border-bottom: .5rpx solid #dbdbdb;
}
.list-title{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35rpx;
    margin: 15rpx 0;
}
.list-toItem{
    border-top: .5rpx solid #dbdbdb;
    margin: 40rpx 0;
}
.money-cash{
    color: #ff5e5b;
}
.list-icon{
    width: 60rpx;
    height: 60rpx;
    margin: 15rpx;
}
.next{
    width: 45rpx;
    height: 45rpx;
    margin: 10rpx;
}
</style>
