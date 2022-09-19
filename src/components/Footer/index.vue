<template>
    <!-- 底部 -->
    <div class="footer">
        <div class="footer-container">
            <div class="footerList">
                <div class="footerItem">
                    <h4>帮助中心</h4>
                    <ul class="footerItemCon">
                        <li>关于adidas</li>
                        <li>职业发展</li>
                        <li>员工登录</li>
                        <li>常见问题</li>
                        <li>购物指南</li>
                    </ul>

                </div>
                <div class="footerItem">
                    <h4>配送方式</h4>
                    <ul class="footerItemCon">
                        <li>上门自提</li>
                        <li>211限时达</li>
                        <li>配送服务查询</li>
                        <li>配送费收取标准</li>
                        <li>海外配送</li>
                    </ul>
                </div>
                <div class="footerItem">
                    <h4>支付方式</h4>
                    <ul class="footerItemCon">
                        <li>货到付款</li>
                        <li>在线支付</li>
                        <li>分期付款</li>
                        <li>邮局汇款</li>
                        <li>公司转账</li>
                    </ul>
                </div>
                <div class="footerItem">
                    <h4>售后服务</h4>
                    <ul class="footerItemCon">
                        <li>售后政策</li>
                        <li>价格保护</li>
                        <li>退款说明</li>
                        <li>返修/退换货</li>
                        <li>取消订单</li>
                    </ul>
                </div>
                <div class="footerItem">
                    <h4>企业团购热线及邮箱：</h4>
                    <ul class="footerItemCon">
                        <li>热线：021-2525 6881</li>
                        <li>邮箱：adidas.b2b@adidas.com</li>
                    </ul>
                </div>
            
            </div>
            <div class="copyright">
                <ul class="helpLink">
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>联系我们
                        <span class="space"></span>
                    </li>
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>商家入驻
                        <span class="space"></span>
                    </li>
                    <li>营销中心
                        <span class="space"></span>
                    </li>
                    <li>友情链接
                        <span class="space"></span>
                    </li>
                    <li>关于我们
                        <span class="space"></span>
                    </li>
                    <li>营销中心
                        <span class="space"></span>
                    </li>
                    <li>友情链接
                        <span class="space"></span>
                    </li>
                    <li>关于我们</li>
                </ul>
                <p>地址：阿迪达斯体育（中国）有限公司保留所有权利</p>
                <p>苏ICP备14048805号-1</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.footer {
    background-color: #F9F9F9;

    .footer-container {
        width: 1200px;
        margin: 0 auto;
        padding: 0 15px;

        .footerList {
            padding: 20px;
            border-bottom: 1px solid #e4e1e1;
            border-top: 1px solid #e4e1e1;
            overflow: hidden;
            padding-left: 40px;

            .footerItem {
                width: 16.6666667%;
                float: left;


                h4 {
                    padding: 6px 0;
                    font-size: 15px;
                    line-height: 20px;
                    font-weight: 700;
                    letter-spacing: .5px;
                    // font-family: AdihausDIN, PingFang SC, sans-serif, 微软雅黑;
                    font-style: normal;
                    color: #000;
                }

                .footerItemCon {
                    li {
                        line-height: 18px;
                        padding: 8px 0;
                        cursor: pointer;
                        font-size: 11px;
                        line-height: 16px;
                        font-weight: 400;
                        letter-spacing: .5px;
                        // font-family: AdihausDIN, PingFang SC, sans-serif, 微软雅黑;
                        font-style: normal;
                        color: #000;
                    }
                }

                &:last-child img {
                    width: 121px;
                }
            }
        }

        .copyright {
            padding: 20px;

            .helpLink {
                text-align: center;

                li {
                    display: inline;

                    font-size: 11px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: .5px;
    // font-family: AdihausDIN,PingFang SC,sans-serif,微软雅黑;
    font-style: normal;
    color: #000;
                    .space {
                        border-left: 1px solid #666;
                        width: 1px;
                        height: 13px;
                        background: #666;
                        margin: 8px 10px;
                    }
                }
            }

            p {
                margin: 10px 0;
                text-align: center;
            }
        }
    }
}
</style>
