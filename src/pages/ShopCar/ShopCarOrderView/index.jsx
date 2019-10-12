import React from "react"
import Item from "./Item"

export default class ShopCarOrderView extends React.Component{
    render(){
        const data = this.props.orders;
        return(
            <div>
                {
                    data.map((element, index) => {
                        return <Item key={index} data={element}></Item>
                    })
                }
            </div>
        )
    }
}