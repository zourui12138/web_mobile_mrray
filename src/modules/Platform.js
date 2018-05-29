import React, {Component} from 'react'
import './Platform.less'

// 图片
import Logo from '../assets/img/logo.png'
import QrCode from '../assets/img/QrCode.png'

class Platform extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        };
    }
    componentDidMount() {
        console.log(this.state.date);
    }
    render() {
        return (
            <div id="platform">
                <header id="header">
                    <img src={Logo} alt=""/>
                    <img src={Logo} alt=""/>
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