import React from 'react';
const Card = (props) => 
{
    return (<div><p style= {{backgroundColor: 'Red', width: '200px' }}>{props.lable}</p>
    <p>{props.desc}</p></div>)
}

export default Card;