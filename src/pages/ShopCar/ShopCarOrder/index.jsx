// import React from "react"
// import api from "../../../api"
// import ShopCarOrderView from "../ShopCarOrderView"

// export default class ShopCarOrder extends React.Component {

//     constructor() {
//         super();
//         this.state = {
//             orders: []
//         }
//     }

//     componentDidMount() {
//         const username = this.props.username;
//         api.getShopCar(username).then(res => res.json())
//             .then(data => {
//                 this.setState({
//                     orders: data
//                 })
//             })  
//     }

//     componentWillUnmount() {
//         // 卸载异步操作设置状态
//         this.setState = (state, callback) => {
//             return;
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {
//                     this.state.orders.length > 0 ?
//                         <ShopCarOrderView orders={this.state.orders} /> :
//                         <div>等待加载...</div>
//                 }
//             </div>
//         )
//     }
// }



import React, { useState, useEffect } from "react"
import api from "../../../api"
import ShopCarOrderView from "../ShopCarOrderView"

export default function ShopCarOrder({ username }) { // 参数的传递

    const [orders, setOrder] = useState([]);

    useEffect(() => {
        let isLoaded = true;
        api.getShopCar(username).then(res => res.json())
            .then(data => {
                if(isLoaded){
                    setOrder(data)
                }
            })

        return function clearAsync(){
            // 清除网络请求
            isLoaded = false;
        }
    })

    return (
        <div>
            {
                orders.length > 0 ?
                <ShopCarOrderView orders={orders} /> :
                <div>等待加载...</div>
            }
        </div>
    )
}
