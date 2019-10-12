import React from "react"
import "./style.less"

export default class DetailsBuyStoreView extends React.Component {

    clickStoreHandler = () =>{
        this.props.onStore();
    }

    clickBuyHandler = () =>{
        this.props.onBuy();
    }

    render() {
        const isCollected = this.props.isCollected;
        return (
            <div>
                <div className="buy-store-container clear-fix">
                    <div className="item-container float-left">
                        {
                            isCollected ?
                            <button className="selected o" onClick={ this.clickStoreHandler }>已收藏</button>
                            :
                            <button className="selected" onClick={ this.clickStoreHandler }>收藏</button>
                        }
                    </div>
                    <div className="item-container float-right">
                        <button onClick={ this.clickBuyHandler }>购买</button>
                    </div>
                </div>
            </div>
        )
    }
}