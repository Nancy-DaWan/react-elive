import React from "react"
import CityHeader from "../../components/Header"
import CityCurrent from "./CityCurrent"
import CityChange from "./CityChange"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as ctiyActions from "../../actions/city"

class City extends React.Component{

    /**
     * 城市切换
     */
    changeHandler = (cityName) =>{
        this.props.ctiyActions.updateCity({
            cityName:cityName
        })

        // 返回首页
        window.history.back();
    }
    
    render(){
        return(
            <div>
                {/* <CityHeader title="城市选择" history={ this.props.history }/> */}
                <CityHeader title="城市选择" />
                <CityCurrent cityName={ this.props.city.cityName }/>
                <CityChange onChangeCity={ this.changeHandler }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        city:state.city
    }
}

function mapDispatchToProps(dispatch){
    return{
        ctiyActions:bindActionCreators(ctiyActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)