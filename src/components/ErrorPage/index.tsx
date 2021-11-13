import {useRouter} from 'next/router';
import React from 'react';

import {Box, Button} from '@/uikit';

import css from './styles.module.scss';

export const ErrorPage = () => {
    const router = useRouter();

    return (
        <Box className={css.container}>
            <h1 className={css.heading}>Сейчас страница не работает</h1>
            <p className={css.subheading}>Попробуйте перезагрузить страницу или приходите позже</p>

            <Button onClick={() => router.reload()}>Перезагрузить</Button>
        </Box>
    );
};
