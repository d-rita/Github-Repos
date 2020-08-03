import React from 'react';

function Card(props) {
    return (
        <div className="profileCard">
            <div className="imgContainer">
                <img className="avatar" src={props.photoUrl} alt=""/>
            </div>
            <div className="profileSection">
                <div className="upperSection">
                    <h3>{props.name}</h3>
                    <p>{props.description}</p>
                </div>
                
                <div className="lowerSection">
                    <div className="distinct">
                        <p>Stars: {props.stars}</p>
                    </div>
                    <div className="distinct">
                        <p>Issues: {props.issues}</p>
                    </div>
                    <div className="timeSection">
                        <p>Submitted {props.days} days ago by {props.owner} </p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card;
