import React from "react"
// withRouter是路由提供的，所以就让Header具有了路由的对象
import { withRouter } from "react-router-dom"
import "./style.less"

class Header extends React.Component{


    backClickHandler = () =>{
        /**
         * 要使用一下属性，必须基于先天条件：当前组件被路由直接管理着
         */
        // this.props.history.push("/");
        /**
         * 跳转更换方案
         */
        window.history.back(); // 返回上一级
    }

    render(){
        return(
            <div id="common-header">
                <span className="back-icon" onClick={ this.backClickHandler }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}

export default withRouter(Header)