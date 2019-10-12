import React from "react"
import "./style.less"

/**
 * tabs的加载
 * 
 * 使用点：
 *     <tabs defaultActiveKey="1" onChange={callback}>
 *         <div tab="标题1" key="1">
 *             <div>tab1内容</div>
 *         </div>
 *         <div tab="标题2" key="2">
 *             <div>tab1内容</div>
 *         </div>
 *     </tabs>
 * 
 * 渲染点：
 *  <div>
 *      <ul>
 *          <li>标题1</li>
 *          <li>标题2</li>
 *      </ul>
 *     <div>
 *          <div>内容1</div>
 *          <div>内容2</div>
 *     </div>
 *  </div>
 * 
 * 知识点：
 *      React.Children.map
 *      this.props.children
 * 
 */

export default class Tabs extends React.Component{

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    clickHandler(index){
        this.setState({
            currentIndex:index
        })
    }

    check_title_index(index){
        return this.state.currentIndex == index ? 'Tab_title active' : "Tab_title"
    }

    check_item_index(index){
        return this.state.currentIndex == index ? "show" :'hide'
    }

    render(){
        return(
            <div>
                <ul className="Tab_title_wrap">
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return (
                                <li onClick={ this.clickHandler.bind(this,index) } className={ this.check_title_index(index) }>{ element.props.tab }</li>
                            )
                        }) 
                    }
                </ul>
                <div>
                    {
                        React.Children.map(this.props.children,(element,index) =>{
                            return (
                                <li className={ this.check_item_index(index) }>{ element.props.children }</li>
                            )
                        }) 
                    }
                </div>
            </div>
        )
    }
}

