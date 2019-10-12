import React from "react"
import DetailsHeader from "../../components/Header"
import DetailsInfo from "./DetailsInfo"

export default class Details extends React.Component{
    render(){
        return(
            <div>
                <DetailsHeader title="详情页" />
                <DetailsInfo id={ this.props.match.params.id }/>
            </div>
        )
    }
}