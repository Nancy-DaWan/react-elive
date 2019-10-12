// import React from "react"

// export default class HookDemo extends React.Component{

//     constructor(){
//         super();
//         this.state = {
//             count:0
//         }
//     }

//     clickHandler = () =>{
//         this.setState({
//             count:this.state.count+1
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <p>{ this.state.count }</p>
//                 <button onClick={ this.clickHandler }>Add</button>
//             </div>
//         )
//     }
// }


import React, { useState }  from "react"

export default function HookDemo(){
    // 声明一个count初始化为0
    const [count,setCount] = useState(0);
    // flag 真假的操作
    const [flag,setFlag] = useState(false);

    function clickHandler(){
        setCount(count+1);
        setFlag(!flag);
    }

    return(
        <div>
            <p>{ count }</p>
            <button onClick={ clickHandler }>Add</button>
            <div>
                {
                    flag ? <div>这猴子</div> : <div>六耳猕猴</div>
                }
            </div>
        </div>
    )
}