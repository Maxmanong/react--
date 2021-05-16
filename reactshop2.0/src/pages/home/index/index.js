
import React from 'react'
import Css from '../../../assets/css/home/index/index.css'
import Swiper from '../../../assets/js/libs/swiper.min.js'
import '../../../assets/css/common/swiper.min.css'
export default class IndexComponent extends React.Component {
    componentDidMount() {
        new Swiper("." + Css['swiper-wrap'], {
            // 可选项，自动滑动
            autoplay: 3000,
            pagination: ".swiper-pagination",
            autoplayDisableOnInteraction: false
        })
    }
    component
    render() {
        return (
            <React.Fragment>
                <div className={Css['page']}>
                    <div className={Css['search-header']}>
                        <div className={Css['classify-icon']}></div>
                        <div className={Css['search-wrap']}>
                            <div className={Css['search-icon']}></div>
                            <div className={Css['search-text']}>请输入宝贝名称</div>
                        </div>
                        <div className={Css['login-wrap']}>
                            <div className={Css['login-text']}>登录</div>
                        </div>
                    </div>
                    <div className={Css['swiper-wrap']}>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                                <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt="" />
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                    <div className={Css['quick-nav']}>
                        <ul className={Css['item']}>
                            <li className={Css['item-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" />
                            </li>
                            <li className={Css['item-text']}>潮流女装</li>
                        </ul>
                        <ul className={Css['item']}>
                            <li className={Css['item-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" />
                            </li>
                            <li className={Css['item-text']}>潮流女装</li>
                        </ul>
                        <ul className={Css['item']}>
                            <li className={Css['item-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" />
                            </li>
                            <li className={Css['item-text']}>潮流女装</li>
                        </ul>
                        <ul className={Css['item']}>
                            <li className={Css['item-img']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" />
                            </li>
                            <li className={Css['item-text']}>潮流女装</li>
                        </ul>
                    </div>

                    {/* 潮流女装 */}
                    <div className={Css['goods-level-wrap']}>
                        <div className={Css['classify-title'] + " " + Css['color1']}>—— 潮流女装 ——</div>
                        <div className={Css['goods-level1-wrap']}>
                            <div className={Css['goods-level1-item0']}>
                                <div className={Css['goods-title']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                                <div className={Css['goods-text']}>精品打折</div>
                                <div className={Css['goods-price1']}>128元</div>
                                <div className={Css['goods-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                                </div>
                            </div>
                            <div className={Css['goods-level1-item1']}>
                                <div className={Css['goods-row']}>
                                    <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                                    <div className={Css['goods-row-text']}>品质精挑</div>
                                    <div className={Css['goods-row-img']}>
                                        <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="" />
                                    </div>
                                </div>
                                <div className={Css['goods-row']}>
                                    <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                                    <div className={Css['goods-row-text']}>品质精挑</div>
                                    <div className={Css['goods-row-img']}>
                                        <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Css['goods-list-wrap']}>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                        </div>
                    </div>

                    {/* 品牌男装 */}
                    <div className={Css['goods-level-wrap']}>
                        <div className={Css['classify-title'] + " " + Css['color2']}>—— 品牌男装 ——</div>
                        <div className={Css['goods-level1-wrap']}>
                            <div className={Css['goods-level1-item0']}>
                                <div className={Css['goods-title2']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                                <div className={Css['goods-text2']}>火爆开售</div>
                                <div className={Css['goods-img2']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                                </div>
                            </div>
                            <div className={Css['goods-level1-item0']}>
                                <div className={Css['goods-title2']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                                <div className={Css['goods-text2']}>火爆开售</div>
                                <div className={Css['goods-img2']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={Css['goods-list-wrap']}>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                        </div>
                    </div>

                    {/* 电脑办公 */}
                    <div className={Css['goods-level-wrap']}>
                        <div className={Css['classify-title'] + " " + Css['color3']}>—— 电脑办公 ——</div>
                        <div className={Css['goods-level1-wrap']}>
                            <div className={Css['goods-level1-item0']}>
                                <div className={Css['goods-title']}>高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带</div>
                                <div className={Css['goods-text']}>精品打折</div>
                                <div className={Css['goods-price1']}>128元</div>
                                <div className={Css['goods-img']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />
                                </div>
                            </div>
                            <div className={Css['goods-level1-item1']}>
                                <div className={Css['goods-row']}>
                                    <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                                    <div className={Css['goods-row-text']}>品质精挑</div>
                                    <div className={Css['goods-row-img']}>
                                        <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="" />
                                    </div>
                                </div>
                                <div className={Css['goods-row']}>
                                    <div className={Css['goods-row-title']}>欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                                    <div className={Css['goods-row-text']}>品质精挑</div>
                                    <div className={Css['goods-row-img']}>
                                        <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Css['goods-list-wrap']}>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                            <div className={Css['goods-list']}>
                                <div className={Css['title']}>小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋</div>
                                <div className={Css['image']}>
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" alt="" />
                                </div>
                                <div className={Css['price']}>￥288</div>
                                <div className={Css['unprice']}>￥288</div>
                            </div>
                        </div>
                    </div>

                    {/* 为您推荐 */}
                    <div className={Css['reco-title-wrap']}>
                        <div className={Css['line']}></div>
                        <div className={Css['reco-text-wrap']}>
                            <div className={Css['reco-icon']}></div>
                            <div className={Css['reco-text']}>为您推荐</div>
                        </div>
                        <div className={Css['line']}></div>
                    </div>
                    <div className={Css['reco-item-wrap']}>
                        <div className={Css['reco-item']}>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484283665.jpg" alt="" />
                            </div>
                            <div className={Css['title']}>
                                ONLY冬装新品雪纺拼接流苏腰带长款连衣裙女
                            </div>
                            <div className={Css['price']}>
                                ￥399
                            </div>
                        </div>
                        <div className={Css['reco-item']}>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="" />
                            </div>
                            <div className={Css['title']}>
                                韩都衣舍2016秋新款时尚拼接色宽松显瘦气质长款长袖连衣裙
                            </div>
                            <div className={Css['price']}>
                                ￥399
                            </div>
                        </div>
                        <div className={Css['reco-item']}>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484284394.jpg" alt="" />
                            </div>
                            <div className={Css['title']}>
                                美动态胖妹妹春装打底裙2017新款加肥加大码女装胖mm显瘦连衣裙
                            </div>
                            <div className={Css['price']}>
                                ￥399
                            </div>
                        </div>
                        <div className={Css['reco-item']}>
                            <div className={Css['image']}>
                                <img src="//vueshop.glbuys.com/uploadfiles/1484283964.jpg" alt="" />
                            </div>
                            <div className={Css['title']}>
                                韩都衣舍2017韩版女装春装新款木耳边卡通刺绣显瘦连衣裙
                            </div>
                            <div className={Css['price']}>
                                ￥399
                            </div>
                        </div>
                    </div>



                </div>
            </React.Fragment>
        )
    }
}