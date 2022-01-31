import React from 'react';

function Child(props){
    
    const data = "I am from child component";
    props.onChildData(data);

    return (
        <div>
            <p>I am child component</p>
            <p>{props.data}</p>
        </div>
    )
}

export default Child;
