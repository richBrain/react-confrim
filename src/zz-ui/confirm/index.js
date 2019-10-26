import React,{Component,useEffect} from 'react';
import './style.css'
import PropTypes from "prop-types";
let myPromise;


function  Confirm(props){

    let hasSuccess_ = true;
    let content  = props;
    const p = new Promise(function (resolve, reject) {
        //做一些异步操作
        if (hasSuccess_) {
            resolve('挂载成功');
        } else {
            reject('挂载失败')
        }

    });
    return {
        p,
        myConfirm:()=>{
            window.confirm(content)
        }
    };

};

 export default Confirm




// export default function(){
//
//     return class extends Component {
//
//         constructor ( props ) {
//
//             super ( props );
//
//             this.state={
//
//                 Now:null
//
//             };
//
//         };
//
//         componentWillMount(){
//
//             new Promise((resolve,reject)=>{
//
//                 resolve('success');
//
//
//             }).then((data)=>{
//
//                 this.setState({
//
//                     Now:data
//
//                 });
//
//             });
//
//         };
//
//         render(){
//
//             let Now=this.state.Now;
//
//             return Now?<Now/>:null;
//
//         };
//
//     };
//
// };