import React from 'react';
import CardItem from '../card-item/card-item.component';

import lemonImg from '../../assets/lemon_gummy_home.jpg';
import peachImg from '../../assets/peach_juice_home.jpg';
import chipsImg from '../../assets/spicy_chips_home.jpg';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [{
        imageUrl: lemonImg,
        title: 'Juicy Lemon Gummy',
        id: 1,
        text: 'Japanese people sure love sour candies! This cute candy bag is packed with sweet lemon flavored and sour powder covered gummy by Kanro!'
      },
      {
        imageUrl: peachImg,
        title: 'Cherry & Peach Juice',
        id: 2,
        text: 'This is a special edition cherry and peach fusion from Minute Maid Japan! It also has sakura essence mixed in so both the fruity sweet and sour flavor and the floral fragrance reminds one of spring!'
      },
      {
        imageUrl: chipsImg,
        title: 'Hot Chili Chips',
        id: 3,
        text: 'Original hot chili potato chips since 1984. Its taste has not only "Hot" but also mixed delicious meat and vegetable flavor.'
      }]
    }
  }

  render() {
    return (
      <div className="update-content">
        <h2>WHAT'S NEW </h2>
        <div className='sub-title'>Check out our new snacks and drinks!</div>
        <div className="directory-menu">
          {
            this.state.sections.map(({imageUrl, title, id, text}) => (
              <CardItem key={id} title={title} imageUrl={imageUrl} text={text} />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Directory;