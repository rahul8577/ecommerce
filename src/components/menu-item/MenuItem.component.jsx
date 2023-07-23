import React from "react";
import './menu-item.style.css';
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

function MenuItem({ title, id, imageUrl, size, history, linkUrl, match }) {
    // console.log(history )
    return (

        <div
            className={`${size} menu-items`}
            key={id}
            onClick={()=>{
                history.push(`${match.url}${linkUrl}`)
            }}

        >
            <div className="background-img" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">subtitle</span>
            </div>
        </div>
    );
}

export default withRouter(MenuItem)