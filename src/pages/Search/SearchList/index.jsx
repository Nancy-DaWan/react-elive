import React from "react"
import api from "../../../api"
import SearchListView from "../SearchListView"
import LoadMore from "../../../components/LoadMore"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as searchActions from "../../../actions/search"

class SearchList extends React.Component {

    constructor() {
        super();
        this.state = {
            searchData: [],
            hasMore: false
        }
    }

    componentDidMount() {
        const keywords = this.props.keyworks;
        this.http(keywords);
        // 第一次写入到redux
        this.props.searchActions.updateKeywords({
            keywords:keywords
        })
    }


    /**
     * 生命周期函数：
     *     componentWillMount
     *     componentDidMount
     *     componentWillUpdate
     *     componentDidUpdate
     *     shouldComponentUpdate
     *     componentWillReceiveProps
     *     componentWillUnmount
     */


    /**
     * 再次搜索
     */
    componentDidUpdate(prevProps, prevState) {
        // prevProps:上一次的props的值  返回的是对象
        // prevState:上一次的state的值  返回的是对象
        const keywords = this.props.keyworks;
        if (prevProps.keyworks === keywords) {
            return;
        }
        // 清空数据
        this.setState({
            searchData:[]
        })
        this.http(keywords);
        // 再次写入到redux中
        this.props.searchActions.updateKeywords({
            keywords:keywords
        })
    }

    /**
     * 网络请求
     */
    http(keywords) {
        api.getSearch(keywords).then(res => res.json())
            .then(data => {
                this.setState({
                    // 累加操作:concat
                    searchData: this.state.searchData.concat(data.data),
                    hasMore: data.hasMore
                })
            })
    }

    loadMoreHandler = () => {
        const keywords = this.props.keyworks;
        // 做网络请求
        this.http(keywords);
    }

    render() {
        return (
            <div>
                {
                    this.state.searchData.length > 0 ?
                        <SearchListView data={this.state.searchData} /> :
                        <div>数据正在加载中...</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore onLoadMore={this.loadMoreHandler} /> :
                        <div>没有更多数据了</div>
                }

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        search:state.search
    }
}

function mapDispatchToProps(dispatch){
    return{
        searchActions:bindActionCreators(searchActions,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchList)