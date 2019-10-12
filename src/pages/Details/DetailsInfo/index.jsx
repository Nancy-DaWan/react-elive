import React from "react"
import api from "../../../api"
import Swiper from "../../../components/Swiper"
import DetailsInfoView from "../DetailsInfoView"

export default class DetailsInfo extends React.Component{

    constructor(){
        super();
        this.state = {
            detailsImgs:[],
            detailsData:{}
        }
    }

    componentDidMount(){
        const id = this.props.id;
        api.getDetails(id).then(res => res.json())
        .then(data =>  {
            this.setState({
                detailsImgs:data.imgs,
                detailsData:data
            })
        })
    }

    render(){
        const { detailsImgs,detailsData } = this.state;
        return(
            <div>
                {
                    detailsImgs.length > 0 ?
                    <Swiper banners={detailsImgs}/> :
                    <div>期待的画面没出现...</div>
                }
                {
                    detailsData.title ?
                    <DetailsInfoView data={ detailsData } id={ this.props.id }/> :
                    <div>期待的画面没出现...</div>
                }
            </div>
        )
    }
}