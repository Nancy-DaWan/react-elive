import React from "react"
import { withRouter } from "react-router-dom"
import "./style.less"
import { connect } from "react-redux"

class SearchInput extends React.Component {
    /**
     * 受控组件：input少
     * 非受控组件：input多
     */

    constructor(){
        super();
        this.state = {
            searchValue:""
        }
    }

    inputChangeHandler(e){
        this.setState({
            searchValue:e.target.value
        })
    }

    keyPressHandler = (e) =>{
        // 监听回车事件:keyCode
        /**
         * 每一个物理按键都有唯一的keyCode
         */
        if(e.keyCode === 13){
            // 跳转搜索页面
            this.props.history.push("/search/"+this.state.searchValue)
        }
    }


    /**
     * 我在父级读取一次数据，传递到input里面
     * 
     */
    componentDidUpdate(prevProps,prevState){
        if(prevProps.keywords === this.props.keywords){
            return;
        }
        this.setState({
            searchValue:this.props.search.keywords
        })
    }

    render() {
        return (
            <input
                type="text"
                value={this.state.searchValue}
                className="search-input"
                placeholder="请输入搜索内容"
                onKeyUp={ this.keyPressHandler }
                onChange={this.inputChangeHandler.bind(this)}
            />
        )
    }
}

function mapStateToProps(state){
    return{
        search:state.search
    }
}

export default withRouter(connect(
    mapStateToProps
)(SearchInput))