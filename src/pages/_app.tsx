import React from 'react';
import {NextComponentType} from 'next';
import 'flexboxgrid2';

import {Header} from '@/parts';

import './app.scss';


type AppProps = {
    Component: NextComponentType
}

const App = ({Component, ...props}: AppProps) => {
    return (
        <div>
            <Header />
            <Component {...props} />
        </div>
    );
};

export default App;
