import React from "react"
import "./style.less"
import api from "../../../../api"

export default class Item extends React.Component {
    /**
     * 评价状态：commentState
     *  0：未评价
     *  1：评价中
     *  2：已评价
     * 
     * 
     *  props的值是不允许在子元素中进行修改的！！！
     * 
     */

    constructor() {
        super();
        this.state = {
            commentState: 0
        }
        this.feelBackText = React.createRef();
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    clickFeelHandler = () => {
        this.setState({
            commentState: 1
        })
    }

    onSubmitHandler = () => {
        /**
         * 请求发送数据
         */
        api.setFeelBack({ content: this.feelBackText.current.value })
            .then(res => res.json())
            .then(data => {
                if (data.msg === "评价成功") {
                    this.setState({
                        commentState: 2
                    })
                    alert(data.msg)
                }else{
                    this.setState({
                        commentState: 0
                    })
                    alert(data.msg)
                }

            })
    }

    onCancelHandler = () => {
        this.setState({
            commentState: 0
        })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        this.state.commentState === 0 ?
                            <button className="btn" onClick={this.clickFeelHandler}>评价</button>
                            :
                            <button className="btn unseleted-btn" onClick={this.clickFeelHandler}>已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {/* 评价框 */}
                {
                    this.state.commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.feelBackText}></textarea>
                            <button className="btn" onClick={this.onSubmitHandler}>提交</button>
                            <button className="btn unseleted-btn" onClick={this.onCancelHandler}>取消</button>
                        </div>
                        : ""
                }
            </div>
        )
    }
}