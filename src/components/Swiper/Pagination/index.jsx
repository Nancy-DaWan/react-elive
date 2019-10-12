import React from "react"
import "./style.less"

export default class Pagination extends React.Component {
    render(){
        const dots = this.props.dots;
        const currentIndex = this.props.index;
        return(
            <div className="swiper-pagination">
                <ul>
                    {
                        dots.map((element,index) =>{
                            return(
                                <li key={index} className={ currentIndex === index ? 'selected':'' }></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}