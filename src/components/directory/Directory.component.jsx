import React from "react";
import './directory.style.css'
import MenuItem from "../menu-item/MenuItem.component";

class Directory extends React.Component{

    constructor(){
        super();

        this.state={
            section:[
                {
                    title:"HATS",
                    imageUrl:"https://i.ibb.co/cvpntL1/hats.png",
                    id:1,
                    linkUrl:"hats"
                },
                {
                    title:"Jackets",
                    imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",
                    id:2
                },
                {
                    title:"Sneakers",
                    imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",
                    id:3
                },
                {
                    title:"Womens",
                    imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",
                    size:'large',
                    id:4
                },
                {
                    title:"Mens",
                    imageUrl:"https://i.ibb.co/R70vBrQ/mens.png",
                    size:'large',
                    id:5
                },
            ]
        }
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.section.map(({id,...otherSection})=>{
                        return(<MenuItem  key={id} {...otherSection}/>)
                    })
                }
            </div>
        );
    }
}

export default Directory;