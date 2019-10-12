import React from "react"
import SearchHeader from "./SearchHeader"
import SearchList from "./SearchList"
// import ComponentLife from "./ComponentLife"
import { connect } from "react-redux"

class Search extends React.Component{
    render(){
        return(
            <div>
                <SearchHeader keywords={ this.props.search }/>
                <SearchList keyworks={ this.props.match.params.keywords }/>
                {/* <ComponentLife /> */}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        search:state.search
    }
}

export default connect(
    mapStateToProps
)(Search)