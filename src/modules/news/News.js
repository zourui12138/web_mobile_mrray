import React, {Component} from 'react'
import './News.less'

// 图片
import banner_icon from '../../assets/img/news/banner_icon.png'
import newsImg from '../../assets/img/news/newsImg.png'

class News extends Component {
    render() {
        return (
            <div id="news">
                <div className="banner">
                    <img src={banner_icon} alt=""/>
                </div>
                <div className="newsList">
                    <ul>
                        <li>
                        <img src={newsImg} alt=""/>
                        <div>
                            <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流 通助力</span><strong/></h1>
                            <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                        </div>
                    </li>
                        <li>
                            <img src={newsImg} alt=""/>
                            <div>
                                <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流 通助力</span><strong/></h1>
                                <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                            </div>
                        </li>
                        <li>
                            <img src={newsImg} alt=""/>
                            <div>
                                <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流 通助力</span><strong/></h1>
                                <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                            </div>
                        </li>
                        <li>
                            <img src={newsImg} alt=""/>
                            <div>
                                <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流 通助力</span><strong/></h1>
                                <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                            </div>
                        </li>
                        <li>
                            <img src={newsImg} alt=""/>
                            <div>
                                <h1><span>迅鳐科技受邀参加2016大数据 产业峰会 ——为大数据安全流 通助力</span><strong/></h1>
                                <h2><span>2017-10-12 21:21</span><span>来源：迅鳐科技</span></h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default News;