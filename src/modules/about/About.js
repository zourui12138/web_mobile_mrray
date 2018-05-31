import React, {Component} from 'react'
import './About.less'

// 图片
import banner_icon from '../../assets/img/about/banner_icon.png'
import profile from '../../assets/img/about/profile.png'
import partner1 from '../../assets/img/about/partner1.png'
import partner2 from '../../assets/img/about/partner2.png'
import partner3 from '../../assets/img/about/partner3.png'
import partner4 from '../../assets/img/about/partner4.png'
import partner5 from '../../assets/img/about/partner5.png'
import partner6 from '../../assets/img/about/partner6.png'
import partner7 from '../../assets/img/about/partner7.png'
import partner8 from '../../assets/img/about/partner8.png'
import partner9 from '../../assets/img/about/partner9.png'
import yearPoint from '../../assets/img/about/yearPoint.png'
import dayPoint from '../../assets/img/about/dayPoint.png'

class About extends Component {
    render() {
        return (
            <div id="about">
                <div className="banner">
                    <img src={banner_icon} alt=""/>
                </div>
                <div className="profile">
                    <header>
                        <h1>公司简介</h1>
                        <h2>Company&nbsp;Profile</h2>
                    </header>
                    <section>
                        <img src={profile} alt=""/>
                        <p>迅鳐成都科技有限公司（简称‘迅鳐科技’）成立于2015年，由国内首位网络安全长江学者领头创办，是国内第一批大数据安全基础设施制造商与服务商，直接服务于国家信息中心重点筹建的政务数据支撑平台，具有国家级数据资源安全视角。</p>
                    </section>
                </div>
                <div className="events">
                    <header>
                        <h1>企业大事记</h1>
                        <h2>Company&nbsp;Events</h2>
                    </header>
                    <section>
                        <ul>
                            <li>
                                <div className="year">
                                    <span/>
                                    <img src={yearPoint} alt=""/>
                                    <p>2015</p>
                                </div>
                                <div>
                                    <span>10月09日</span>
                                    <img src={dayPoint} alt=""/>
                                    <p>迅鳐成都科技有限公司成立</p>
                                </div>
                                <div>
                                    <span>12月</span>
                                    <img src={dayPoint} alt=""/>
                                    <p>与电子科大、成都优易数据有限公司联合申报《大数据安全与共享四川省实验室》</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className="partner">
                    <header>
                        <h1>合作伙伴</h1>
                        <h2>Company&nbsp;Partner</h2>
                    </header>
                    <section>
                        <ul>
                            <li><img src={partner1} alt=""/></li>
                            <li><img src={partner2} alt=""/></li>
                            <li><img src={partner3} alt=""/></li>
                            <li><img src={partner4} alt=""/></li>
                            <li><img src={partner5} alt=""/></li>
                        </ul>
                        <ol>
                            <li><img src={partner6} alt=""/></li>
                            <li><img src={partner7} alt=""/></li>
                            <li><img src={partner8} alt=""/></li>
                            <li><img src={partner9} alt=""/></li>
                        </ol>
                    </section>
                </div>
            </div>
        )
    }
}

export default About;