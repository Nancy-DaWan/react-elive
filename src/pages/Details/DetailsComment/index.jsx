import React from "react"
import api from "../../../api"
import LoadMore from "../../../components/LoadMore"
import DetailsCommentView from "../DetailsCommentView"

export default class DetailsComment extends React.Component {

    constructor() {
        super();
        this.state = {
            commentData: [],
            hasMore: false
        }
    }

    componentDidMount() {
        const id = this.props.id;
        this.http(id);
    }

    http(id) {
        api.getComment(id).then(res => res.json())
            .then(data => {
                this.setState({
                    commentData: this.state.commentData.concat(data.data),
                    hasMore: data.hasMore
                })
            })
    }

    loadMoreHandler() {
        const id = this.props.id;
        this.http(id);
    }

    render() {
        const { commentData, hasMore } = this.state;
        return (
            <div>
                {
                    commentData.length > 0 ?
                        <DetailsCommentView data={commentData} /> :
                        <div>等待数据加载...</div>
                }
                {
                    hasMore ?
                        <LoadMore onLoadMore={this.loadMoreHandler.bind(this)} /> :
                        <div>被你看光了</div>
                }
            </div>
        )
    }
}