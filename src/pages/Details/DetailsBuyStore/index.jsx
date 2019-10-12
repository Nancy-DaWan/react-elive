import React from "react"
import DetailsBuyStoreView from "../DetailsBuyStoreView"
import { connect }  from "react-redux"
import { withRouter } from "react-router-dom"
import { bindActionCreators } from "redux"
import * as collectActions from "../../../actions/collect"

/**
 * 1.点击收藏要先判断是否登陆
 * 2.登陆之后，将数据是收藏到redux中
 */

class DetailsBuyStore extends React.Component{

    constructor(){
        super();
        this.state = {
            isCollected:false
        }
    }

    componentDidMount(){
        this.setState({
            isCollected:this.isStore()
        })
    }

    storeHandler = () =>{
        // 判断用户是否登陆
        if(this.props.login.username){
            // 首先收藏功能
            // 判断用户是否搜藏过，如果收藏过就取消收藏，未收藏的情况下才是收藏
            if(this.isStore()){
                // 取消收藏
                this.props.collectActions.unCollect({
                    id:this.props.id
                })
                this.setState({
                    isCollected:false
                })
            }else{
                // 收藏
                this.props.collectActions.collect({
                    id:this.props.id
                })
                this.setState({
                    isCollected:true
                })
            }
           
        }else{
            // 去登陆
            this.props.history.push("/login");
        }
        
    }

    /**
     * 收藏的判断
     *     收藏：true
     *     未收藏：false
     */
    isStore(){
        // 当前的数据的id 和 redux中的数据进行对比
        const id = this.props.id;
        const collects = this.props.collect
        return collects.some(item=>{
            return item.id === id;
        })
    }


    buyHandler = () =>{
    }

    render(){
        return(
            <div>
                <DetailsBuyStoreView isCollected={ this.state.isCollected } onStore={ this.storeHandler } onBuy={ this.buyHandler }/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        login:state.login,
        collect:state.collect
    }
}

function mapDispatchToProps(dispatch){
    return{
        collectActions:bindActionCreators(collectActions,dispatch)
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsBuyStore))