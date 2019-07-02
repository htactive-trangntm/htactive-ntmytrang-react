import React, { Component } from 'react';


const content = (props) => (
    <div className=" row product">
    {
        props.product.map(item => {
        return (
            
                <div className="column">
                    <div className="card" style={{width: '18rem'}}>
                        <img className="card-img-top imgProduct" src={item.img} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="#" className="btn btn-primary">Rent</a>
                        </div>
                    </div>
                </div>
            
        );
    }) 
    }
    
    </div> 
     
)

export default content