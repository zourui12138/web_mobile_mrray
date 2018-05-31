import React, {Component} from 'react'
import './Baas.less'

// 图片
import banner from '../../assets/img/products/baas/banner.png'
import product_logo from '../../assets/img/products/baas/product_logo.png'
import overview_icon from '../../assets/img/products/baas/overview.png'
import service1 from '../../assets/img/products/baas/service1.png'
import service2 from '../../assets/img/products/baas/service2.png'
import service3 from '../../assets/img/products/baas/service3.png'
import service4 from '../../assets/img/products/baas/service4.png'
import service5 from '../../assets/img/products/baas/service5.png'
import service6 from '../../assets/img/products/baas/service6.png'
import service7 from '../../assets/img/products/baas/service7.png'
import service8 from '../../assets/img/products/baas/service8.png'
import core1 from '../../assets/img/products/baas/core1.png'
import core2 from '../../assets/img/products/baas/core2.png'
import core3 from '../../assets/img/products/baas/core3.png'
import core4 from '../../assets/img/products/baas/core4.png'
import core5 from '../../assets/img/products/baas/core5.png'
import core6 from '../../assets/img/products/baas/core6.png'
import scenario from '../../assets/img/products/baas/scenario.png'
// 组件
import ProductBanner from '../../components/ProductBanner'

class Baas extends Component {
    render() {
        return (
            <div id="baas">
                <ProductBanner
                    banner={banner}
                    bannerLogo={product_logo}
                    bannerTitle='迅鳐RayBaas平台'/>
                <div className="overview">
                    <header>
                        <h1>产品概述</h1>
                        <h2>Product&nbsp;Overview</h2>
                    </header>
                    <section>
                        <div>
                            <p>迅鳐区块链即服务(Ray Blockchain as a Service)是拥有自主知识产权的分布式账本系统，其功能和性能均优于其他同类平台。</p>
                            <p>客户可以通过灵活、可扩展的API接口，简便、快捷、高效、低成本的构建基于区块链的服务和应用，推动企业实现业务运行和商业模式创新。</p>
                        </div>
                        <img src={overview_icon} alt=""/>
                    </section>
                </div>
                <div className="service">
                    <header>Baas产品服务</header>
                    <section>
                        <ul>
                            <li>
                                <img src={service1} alt=""/>
                                <p>政务区块链平台</p>
                            </li>
                            <li>
                                <img src={service2} alt=""/>
                                <p>运力共享区块链</p>
                            </li>
                            <li>
                                <img src={service3} alt=""/>
                                <p>仓储区块链平台</p>
                            </li>
                            <li>
                                <img src={service4} alt=""/>
                                <p>医疗区块链平台</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src={service5} alt=""/>
                                <p>敏感数据与免泄露系统</p>
                            </li>
                            <li>
                                <img src={service6} alt=""/>
                                <p>数字水印系统</p>
                            </li>
                            <li>
                                <img src={service7} alt=""/>
                                <p>大数据安全网关</p>
                            </li>
                            <li>
                                <img src={service8} alt=""/>
                                <p>数据资产防护系统</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="core">
                    <header>
                        <h1>平台核心</h1>
                        <h2>Platform&nbsp;Core</h2>
                    </header>
                    <section>
                        <ul>
                            <li>
                                <div><img src={core1} alt=""/></div>
                                <h1>兼容现有异构网络设施</h1>
                                <p>提供一体机，云部署多种部署方式，可以满足现有各类异构网络需求。</p>
                            </li>
                            <li>
                                <div><img src={core2} alt=""/></div>
                                <h1>支持大并发&海量数据</h1>
                                <p>高效交易验证和同步，支撑千万甚至亿级用户规模。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div><img src={core3} alt=""/></div>
                                <h1>多模式的数据共享与交付</h1>
                                <p>包括数据接口，容器，请求路由，多态呈现等方式。</p>
                            </li>
                            <li>
                                <div><img src={core4} alt=""/></div>
                                <h1>数据权属认定与保护</h1>
                                <p>丰富的权限策略配置，依据应用需求进行隐私保护。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div><img src={core5} alt=""/></div>
                                <h1>区块链领域的三权分立</h1>
                                <p>立法(共识机制)，执法（智能合约），司法（审计）</p>
                            </li>
                            <li>
                                <div><img src={core6} alt=""/></div>
                                <h1>“+区块链”模式的DAPP</h1>
                                <p>大数据+区块链，AI+区块链，安全+区块链，芯片+区块链。</p>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="scenario">
                    <header>
                        <h1>应用场景</h1>
                        <h2>Application&nbsp;Scenario</h2>
                    </header>
                    <section><img src={scenario} alt=""/></section>
                </div>
            </div>
        )
    }
}

export default Baas;