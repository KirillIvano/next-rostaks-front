import React from 'react';
import {NextComponentType} from 'next';
import Head from 'next/head';
import 'flexboxgrid2';

import {Header, Footer, MessagesBox} from '@/parts';
import {Metrika} from '@/components';

import './app.scss';


type AppProps = {
    Component: NextComponentType
}

const App = ({Component, ...props}: AppProps) => (
    <>
        <Head>
            <title>Ростакс, производство красок</title>
        </Head>

        <Metrika />

        <div className="appContainer">
            <div>
                <Header />
                <Component {...props} />
            </div>

            <MessagesBox />

            <Footer />
        </div>
    </>
);

export default App;
