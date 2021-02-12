import React from 'react';
import {NextComponentType} from 'next';
import 'flexboxgrid2';

import {Header, Footer, MessagesBox} from '@/parts';

import './app.scss';


type AppProps = {
    Component: NextComponentType
}

const App = ({Component, ...props}: AppProps) => {
    return (
        <div className="appContainer">
            <div>
                <Header />
                <Component {...props} />
            </div>

            <MessagesBox />

            <Footer />
        </div>
    );
};

export default App;
