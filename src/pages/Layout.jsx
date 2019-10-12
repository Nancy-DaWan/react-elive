import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as cityActions from "../actions/city"

/**
 * layout组件存在意义：初始化
 */

class Layout extends React.Component{

    componentDidMount(){
        // 初始化城市
        this.props.cityActions.initCity({
            cityName:"上海"   // 可以搞成定位获取
        })
    }

    render(){
        return(
            <div>
                { this.props.children }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        
    }
}

function mapDispatchToProps(dispatch){
    return {
        cityActions:bindActionCreators(cityActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout)