import React from 'react';

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function Composition() {
    return (
        <FancyBorder color="pink">
            <h1 className="Dialog-title">
                Welcome to my our website
        </h1>
            <p className="Dialog-message">
                Xin chào tất cả mọi người!
        </p>
        </FancyBorder>
    );
}

export default Composition;