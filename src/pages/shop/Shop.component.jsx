import React from "react"
import SHOP_DATA from "./shop_data";
import CollectionPreview from "../../components/collection-preiview/CollectionPreview.component";

class Shop extends React.Component {

    constructor(props) {
        super();

        this.state = {
            collection:SHOP_DATA, 
        }
    }

    render(){
        return(
            <div className="shop_preview">
                {this.state.collection.map(({id,...otherCollectionItems})=>{
                    return(<CollectionPreview key={id} {...otherCollectionItems}/>)
                })}
            </div>
        );
    }
}

export default Shop;