import React from 'react';
import MenuItem from '../menu-item/menu-item.component.jsx';
import './directory.styles.scss'

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: /* array of objects, Directory holds state i.e class */
                [{
                    title: 'hats',
                    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/EfofY_OWkAEXhLS-5f3db23d5c660__700.jpg',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/EfofY_OWkAEXhLS-5f3db23d5c660__700.jpg',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/EfofY_OWkAEXhLS-5f3db23d5c660__700.jpg',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/EfofY_OWkAEXhLS-5f3db23d5c660__700.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://static.boredpanda.com/blog/wp-content/uploads/2020/08/EfofY_OWkAEXhLS-5f3db23d5c660__700.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => // instead of section.something i.e .map(seciton =>) destructure
                    (<MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />))}
            </div>
        )
    }

}

export default Directory;