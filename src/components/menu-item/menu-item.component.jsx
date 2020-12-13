import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div
        className={`${size} menu-item`}
    >
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})` // template literals, javascript interpolation stuff
            }}
        />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
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