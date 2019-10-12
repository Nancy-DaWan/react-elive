import React from "react"

export default class ComponentLife extends React.Component{

    constructor(){
        super();
        this.state = {
            flag:true
        }
    }

    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    clickHandler = () =>{
        this.setState({
            flag:false
        })
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}