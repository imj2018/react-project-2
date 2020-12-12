import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size}) => (
    <div
        style={{
            backgroundImage: `url(${imageUrl})` // template literals, javascript interpolation stuff
        }}
        className= {`${size} menu-item`}
    >
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle>">SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;

// const MenuItem = (props.title) => { 
//     <div className="menu-item">
//         <div className="content">
//             <h1 className="title">props.title</h1>
//             <span className="subtitle>">SHOP NOW</span>
//         </div>
//     </div>
// }