import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import Showcase from '../../components/showcase/showcase.component';

//functional component
const HomePage = () => (
    <div className='homepage'>
        <Showcase />
        <Directory />
    </div>
);

export default HomePage;