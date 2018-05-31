import React, {Component} from 'react'
import './Sensitive.less'

// 图片
import banner from '../../assets/img/products/sensitive/banner.png'
import product_logo from '../../assets/img/products/sensitive/product_logo.png'
import overview_icon from '../../assets/img/products/sensitive/overview.png'
import function_icon from '../../assets/img/products/sensitive/function.png'
// 组件
import ProductBanner from '../../components/ProductBanner'

class Sensitive extends Component {
    render() {
        return (
            <div id="sensitive">
                <ProductBanner
                    banner={banner}
                    bannerLogo={product_logo}
                    bannerTitle='迅鳐Baas平台-敏感数据与免泄露系统'/>
                <div className="overview">
                    <header>
                        <h1>产品概述</h1>
                        <h2>Product&nbsp;Overview</h2>
                    </header>
                    <section>
                        <p>迅鳐敏感信息与免泄露系统是面向企业、政府等机构推出的一款敏感数据去隐私化产品。系统内置敏感信息搜索引擎，自动检索敏感信息，基础算法+可扩充模式、自定义脱敏策略，满足不同业务场景。支持数据类型多样：PostgreSQL、MySQL、Oracle、Greenplumn、Hive、SQL SERVER、DB2等数据库，Excel、csv等结构化数据，智能、灵活、高效工作，满足企业、政府敏感信息管理与保护需求。</p>
                        <div><img src={overview_icon} alt=""/></div>
                    </section>
                </div>
                <div className="function">
                    <header>
                        <h1>产品功能</h1>
                        <h2>Product&nbsp;Function</h2>
                    </header>
                    <section>
                        <ul>
                            <li>
                                <h1>脱敏方式可选择</h1>
                                <p>可根据客户业务的需要，同一敏感数据能进行不同方式脱敏。</p>
                            </li>
                            <li>
                                <h1>整库脱敏</h1>
                                <p>支持整库脱敏，并能保证脱敏的关联性，使其保留数据的分析价值。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>任务一对多</h1>
                                <p>可根据用户需要选择相同源后，配置不同的规则，不同的装载目标，同时新建多条任务。</p>
                            </li>
                            <li>
                                <h1>多种类型算法</h1>
                                <p>支持可逆算法和不可逆算法，用户能根据业务要求选择使用可逆算法或不可逆算法。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>脱敏效果对比</h1>
                                <p>支持展示脱敏前后实际效果对比。</p>
                            </li>
                            <li>
                                <h1>任务管理</h1>
                                <p>能对各种任务进行管理，包括启停任务、任务重做等。</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h1>算法拓展</h1>
                                <p>能根据用户需要提供算法包，用户只需要按几个键傻瓜式操作就能拓展新算法。</p>
                            </li>
                            <li>
                                <h1>操作/访问监控</h1>
                                <p>对系统内各用户访问/操作记录进行监控并整理反映出来。</p>
                            </li>
                        </ul>
                        <div>
                            <h1>数据装载</h1>
                            <p>可将脱敏后数据根据客户需求装载到不同环境中，包括文件到文件（同格式/不同格式），数据库到数据库（同数据库/不同数据库），文件到数据库，反之相同。</p>
                        </div>
                        <footer><img src={function_icon} alt=""/></footer>
                    </section>
                </div>
            </div>
        )
    }
}

export default Sensitive;