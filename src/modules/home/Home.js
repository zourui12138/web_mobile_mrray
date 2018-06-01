import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import './Home.less'

// 图片
import emphasis_blockChain from '../../assets/img/home/emphasis_blockChain.png'
import emphasis_dataSecurity from '../../assets/img/home/emphasis_dataSecurity.png'
import core_product_icon from '../../assets/img/home/core_product_icon.png'
import solution_icon_1 from '../../assets/img/home/solution_icon_1.png'
import partner1 from '../../assets/img/home/partner1.png'
import partner2 from '../../assets/img/home/partner2.png'
import partner3 from '../../assets/img/home/partner3.png'
import arrow_left from '../../assets/img/home/arrow_left.png'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            navProductShow: false
        };
    }
    href(arg){
        browserHistory.push(arg);
    }
    toggleNavProductShow() {
        this.setState({navProductShow : !this.state.navProductShow});
    }
    render() {
        return (
            <div id="home">
                <div className="banner">
                    <p>用安全和区块链</p>
                    <p>构建可信体系的领军企业</p>
                    <button type="button">联系我们</button>
                </div>
                <div className="emphasis">
                    <header>两个重点发展方向</header>
                    <section>
                        <div>
                            <h1>区块链</h1>
                            <p>助力各企事业等行业用户的区块链布局，为企业定制区块链技术，建立应用场景，提升行业服务效能，致力成为行业应用解决方案提供服务商。</p>
                        </div>
                        <img src={emphasis_blockChain} alt=""/>
                    </section>
                    <section>
                        <img src={emphasis_dataSecurity} alt=""/>
                        <div>
                            <h1>区块链</h1>
                            <p>助力各企事业等行业用户的区块链布局，为企业定制区块链技术，建立应用场景，提升行业服务效能，致力成为行业应用解决方案提供服务商。</p>
                        </div>
                    </section>
                </div>
                <div className="core_product">
                    <header>一个核心平台级产品</header>
                    <section>
                        <p>迅鳐区块链即服务(Ray Blockchain as a Service)是拥有自主知识产权的分布式账本系统，其功能和性能均优于其他同类平台。客户可以通过灵活、可扩展的API接口，简便、快捷、高效、低成本的构建基于区块链的服务和应用，推动企业实现业务运行和商业模式创新。</p>
                        <img src={core_product_icon} alt=""/>
                    </section>
                </div>
                <div className="field">
                    <header>五个扩展领域</header>
                    <section>
                        <ul>
                            <li><span>大数据</span><strong>区块链</strong></li>
                            <li><strong>区块链</strong><span>人工智能</span></li>
                            <li><span>芯片</span><strong>区块链</strong></li>
                            <li><strong>区块链</strong><span>与计算</span></li>
                            <li><span>数据安全</span><strong>区块链</strong></li>
                        </ul>
                    </section>
                </div>
                <div className="solution">
                    <header>十二大行业解决方案</header>
                    <h1>针对各行业的特点，RBaaS提供定制化的应用，比如：物流也可以通过区块链实现快速、可信的的车货匹配，做到零成本运维；政务方面可以通过区块链实现不同部门间数据的打通，且可控的流通。</h1>
                    <ul>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                        <li>
                            <img src={solution_icon_1} alt=""/>
                            <p>电子证照</p>
                        </li>
                    </ul>
                </div>
                <div className="partner">
                    <header>三个联合发起单位</header>
                    <h1>迅鳐科技凝结电子科技大学大数据研究中心、网络空间安全研究中心等重磅级机构1０余载技术积淀。努力成为最先“将安全基因注入信息社会”的行业领导企业。</h1>
                    <ul>
                        <li><img src={partner1} alt=""/></li>
                        <li><img src={partner2} alt=""/></li>
                        <li><img src={partner3} alt=""/></li>
                    </ul>
                </div>
                <div className="nav">
                    <ul>
                        <li>
                            <h2 onClick={() => this.toggleNavProductShow()}><span>产品服务</span><img src={arrow_left} alt=""/></h2>
                            {
                                this.state.navProductShow &&
                                <div>
                                    <h3 onClick={() => this.href('/baas')}>迅鳐RayBaas平台</h3>
                                    <h3 onClick={() => this.href('/sensitive')}>敏感数据与免泄露系统</h3>
                                    <h3 onClick={() => this.href('/watermark')}>数字水印系统</h3>
                                </div>
                            }
                        </li>
                        <li><h2 onClick={() => this.href('/news')}><span>新闻资讯</span><img src={arrow_left} alt=""/></h2></li>
                        <li><h2 onClick={() => this.href('/about')}><span>关于我们</span><img src={arrow_left} alt=""/></h2></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;