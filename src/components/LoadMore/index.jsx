import React from "react"
import "./style.less"

/**
 * 触底的事件
 *     监听滚动事件
 *         视口高度 + 滚动高度  > 元素距离顶部的高度  =>  元素出现了
 *         获得元素距离顶部的距离(随着滚动，距离会发生变化) < 视口高度 => 元素出现了
 */


export default class LoadMore extends React.Component {

    constructor() {
        super();
        this.load = React.createRef();
        this.state = {
            timer:null
        }
    }

    componentDidMount() {

        // 视口高度
        const winHeight = document.documentElement.clientHeight;
        // let timer = null;
        window.addEventListener("scroll", () => {
            // getBoundingClientRect:left right top bottom:以文档为标准
            if (this.load.current) { // 避免元素未加载一起的错误信息!!!
                let scrollHeight = this.load.current.getBoundingClientRect().top
                if (this.state.timer) {
                    clearTimeout(this.state.timer)
                }
                // 最后一次
                this.state.timer = setTimeout(() => {
                    if (winHeight > scrollHeight) {
                        this.props.onLoadMore()
                        // 每次只加载一次：防抖和节流  借助定时器
                    }
                }, 300)
            }
        })
    }

    componentWillUnmount(){
        // 清除定时器
        clearTimeout(this.state.timer);
    }

    /**
     * 当加载更多的组件还没有加载的时候，就去操作了DOM，获取 getBoundingClientRect，此时会报错
     */

    render() {
        return (
            <div className="load-more" ref={this.load}>
                加载更多...
            </div>
        )
    }
}