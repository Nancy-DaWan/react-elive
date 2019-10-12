import React from "react"
import HomeHotView from "../HomeHotView"
import api from "../../../api"

export default class HomeHot extends React.Component{

    /**
     * 智能组件：网络请求
     * 木偶组件：视图渲染
     */
    constructor(){
        super();
        this.state = {
            homehot1Data:[],
            homehot2Data:[]
        }
    }
    
    componentDidMount(){
        const cityName = this.props.cityName
        api.getHomehot1(cityName)
        .then(res => res.json())
        .then(data => {
            this.setState({
                homehot1Data:data
            })
        })

        api.getHomehot2(cityName)
        .then(res => res.json())
        .then(data => {
            this.setState({
                homehot2Data:data
            })
        })
    }

    render(){
        /* 常见的视图渲染错误 */
        return(
            <div>
                {
                    this.state.homehot1Data.length > 0 ?
                    <HomeHotView title="热销单品" data={ this.state.homehot1Data } /> :
                    <div>等待数据加载...</div>
                }
                {
                    this.state.homehot2Data.length > 0 ?
                    <HomeHotView title="家庭常用" data={ this.state.homehot2Data } /> :
                    <div>等待数据加载...</div>
                }
                
            </div>
        )
    }
}