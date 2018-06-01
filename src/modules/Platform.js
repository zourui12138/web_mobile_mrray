import React, {Component} from 'react'
import { browserHistory } from 'react-router'
import './Platform.less'

// 图片
import Logo from '../assets/img/logo.png'
import BreadCrumbs from '../assets/img/breadCrumbs.png'
import QrCode from '../assets/img/QrCode.png'

class Platform extends Component {
    constructor(props){
        super(props);
        this.state = {
            navShow: false,
            navProductShow: false
        };
    }
    href(arg){
        browserHistory.push(arg);
        this.setState({navShow : false});
        this.setState({navProductShow : false});
    }
    toggleNavShow() {
        this.setState({navShow : !this.state.navShow});
        this.setState({navProductShow : false});
    }
    toggleNavProductShow() {
        this.setState({navProductShow : !this.state.navProductShow});
    }
    render() {
        return (
            <div id="platform">
                <header id="header">
                    <img className="logo" src={Logo} alt=""/>
                    <img className="breadCrumbs" src={BreadCrumbs} alt="" onClick={() => this.toggleNavShow()}/>
                    {
                        this.state.navShow &&
                        <div>
                            <ul>
                                <li><h3 onClick={() => this.href('/home')}>首页</h3></li>
                                <li>
                                    <h3 onClick={() => this.toggleNavProductShow()}>产品服务</h3>
                                    {
                                        this.state.navProductShow &&
                                        <ol>
                                            <li><h4 onClick={() => this.href('/baas')}>迅鳐RayBaas平台</h4></li>
                                            <li><h4 onClick={() => this.href('/sensitive')}>敏感数据与免泄露系统</h4></li>
                                            <li><h4 onClick={() => this.href('/watermark')}>数字水印系统</h4></li>
                                        </ol>
                                    }
                                </li>
                                <li><h3 onClick={() => this.href('/news')}>新闻资讯</h3></li>
                                <li><h3 onClick={() => this.href('/about')}>关于我们</h3></li>
                            </ul>
                        </div>
                    }
                </header>
                <div id="main">
                    {this.props.children}
                    <footer id="footer">
                        <div>
                            <img src={QrCode} alt=""/>
                            <ul>
                                <li>公司网址：www.mrray.cn</li>
                                <li>公司电话：028—87827621</li>
                                <li>西区地址：成都市郫都区菁蓉镇静园东路28号优易数据大厦5F</li>
                                <li>南区地址：成都市高新区菁蓉国际广场1栋A区3楼</li>
                            </ul>
                        </div>
                        <h1>Copyright © 2015-2035 迅鳐成都科技有限公司 版权所有 蜀ICP备16007868号</h1>
                    </footer>
                </div>
            </div>
        )
    }
}

export default Platform;