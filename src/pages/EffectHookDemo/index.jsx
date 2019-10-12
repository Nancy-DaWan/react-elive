// import React from "react"

// /**
//  * Effect Hook
//  */

// export default class EffectHookDemo extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             eliveTitle:"宜居",
//             count:0
//         }
//     }

//     componentDidMount(){
//         document.title = this.state.eliveTitle +":"+ this.state.count
//     }

//     componentDidUpdate(){
//         document.title = this.state.eliveTitle +":"+ this.state.count
//     }

//     clickHandler = () =>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <button onClick={ this.clickHandler }>增加</button>
//             </div>
//         )
//     }
// }


// 无需清除Effect  :useEffect => componentDidMount，componentDidUpdate

// import React,{ useState,useEffect  } from "react"

// export default function EffectHookDemo(){
//     const [count,setCount] = useState(0);
//     const [eliveTitle] = useState("宜居");

//     useEffect(() =>{
//         document.title = eliveTitle +":"+count
//     })

//     function clickHandler(){
//         setCount(count+1)
//     }

//     return(
//         <div>
//             <button onClick={ clickHandler }>增加</button>
//         </div>
//     )
// }


// 需要清除的Effect ：useEffect => componentDidMount，componentDidUpdate和componentWillUnmount 
// import React,{ useState,useEffect  } from "react"

// export default class EffectHookDemo extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             timer:null
//         }
//     }

//     componentDidMount(){
//         this.state.timer = setInterval(() =>{
//             console.log(111);
//         },1000)
//     }

//     componentWillUnmount(){
//         clearInterval(this.state.timer)
//     }

//     render(){
//         return(
//             <div>
//                 Hello
//             </div>
//         )
//     }
// }

// 副作用! 如果的接触操作，就会有额外的不良情况产生
import React, { useState, useEffect } from "react"

export default function EffectHookDemo() {

    useEffect(() => {
        let timer = null;
        timer = setInterval(() => {
            console.log(111);
        }, 1000)

        // componentWillUnmount
        return function clearTimer(){
            clearInterval(timer);
        }
    })

    useEffect(() =>{
        console.log("你好");
    })

    return (
        <div>
            Hello
        </div>
    )
}

// 通常我们可能有很多的处理要放到生命周期函数中！！！
// 所以，可以创建多个useEffect