import React, { Component } from "react";
//import Ad from "..src/Components/Pages/Ad.jsx";
import Ad from "./Ad";

class AdPage extends Component{
    constructor(props){
        super(props);
        this.state={
            showAd: false,
        }
    }

    handleToggleClick=()=>{
        this.setState((prevState)=>({
            showAd: !prevState.showAd,
        })
        );
    };
    render(){
        return (
            <div>
                {this.state.showAd? <Ad />:null}
                <button onClick={this.handleToggleClick}>
                    {this.state.showAd? '광고 안보기': '광고보기'}
                </button>
            </div>
        );
    }
}
export default AdPage;