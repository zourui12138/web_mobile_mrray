import React, {Component} from 'react'
import './ProductBanner.less'

// 图片

class ProductBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background : {
                background: 'url('+ this.props.banner +') no-repeat center',
                backgroundSize: '100%'
            }
        }

    }
    render() {
        return (
            <div id="ProductBanner" style={this.state.background}>
                <img src={this.props.bannerLogo} alt=""/>
                <h1>{this.props.bannerTitle}</h1>
                <button type="button">申请试用</button>
            </div>
        )
    }
}

export default ProductBanner;