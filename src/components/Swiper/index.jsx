import React from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from "./Pagination"
import "./style.less";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Swiper extends React.Component {

    constructor(){
        super();
        this.state = {
            currentIndex:0
        }
    }

    changeIndexHandler = (index) =>{
        this.setState({
            currentIndex:index
        })
    }

    render() {
        const banners = this.props.banners;
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews interval={5000} onChangeIndex={ this.changeIndexHandler }>
                    {
                        banners.map((element,index) => {
                            return (
                                <div key={ index }>
                                    <img src={element} alt="" />
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination index={ this.state.currentIndex } dots={ banners }/>
            </div>
        )
    }
}