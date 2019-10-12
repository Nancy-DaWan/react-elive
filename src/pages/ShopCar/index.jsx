import React from "react"
import { connect } from "react-redux"
import ShopCarHeader from "../../components/Header"
import ShopCarUserInfo from "./ShopCarUserInfo"
import ShopCarOrder from "./ShopCarOrder"

class ShopCar extends React.Component{

    /**
     * 登陆的判断
     */
    componentWillMount(){
        if(!this.props.login.username){
            this.props.history.push("/login")
        }
    }

    render(){
        return(
            <div>
                <ShopCarHeader title="购物车"/>
                <ShopCarUserInfo username={ this.props.login.username } city={ this.props.city.cityName }/>
                <ShopCarOrder username={ this.props.login.username }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        login:state.login,
        city:state.city
    }
}

export default connect(mapStateToProps)(ShopCar)