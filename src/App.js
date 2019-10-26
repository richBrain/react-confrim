import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import Confirm from "./zz-ui/confirm";
class App extends React.Component{
    static propTypes = {
        name: PropTypes.string
    };

    static defaultProps = {
        name:'aaa'
    };



    render() {
        return(
            <div>
                hello
            </div>
        )
    }
    async  componentDidMount(){
        let res = await Confirm('确定删除吗?');
        res.myConfirm();
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
}

export default App;
