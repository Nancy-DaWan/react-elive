import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as loginActions from "../../actions/login"

/**
 * 登陆：
 *     
 */

class Login extends React.Component{

    loginHandler = (data) =>{
        /**
         * 存储用户登陆信息
         */
        this.props.loginActions.login({
            username:data
        })
        // 返回到上一级页面
        window.history.back();
    }

    render(){
        return(
            <div>
                <LoginView onLogin={ this.loginHandler }/>
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
        loginActions:bindActionCreators(loginActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)