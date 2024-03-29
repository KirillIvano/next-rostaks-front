import React from 'react';
import {useRouter} from 'next/router';

import {PriceListDownloadButton} from '@/components';
import {useScrollTop} from '@/hooks/useScrollTop';
import {Box, Button} from '@/uikit';
import {getCatalogPath} from '@/routes';

import styles from './styles.module.scss';


type AssortmentSectionProps = {
    className?: string;
}

const AssortmentSection = ({className}: AssortmentSectionProps) => {
    const router = useRouter();

    return (
        <div className={className}>
            <Button
                className={styles.assortmentLink}
                onClick={() => router.push(getCatalogPath())}
            >
                Перейти в каталог
            </Button>
        </div>
    );
};

// TODO: сделать компоненты для типографики
const About = () => {
    useScrollTop();

    return (
        <Box>
            <div className={styles.aboutContainer}>
                <h1 className={styles.aboutHeading}>О нас</h1>

                <p className={styles.aboutParagraph}>
                    <span className={styles.strong}>ООО ПКФ «РОСТАКС»</span>{' '}
                    работает на рынке лакокрасочной продукции с <span className={styles.strong}>1994 года</span>!
                </p>
                <p className={styles.aboutParagraph}>
                    За это время наша компания прочно завоевала своё место на рынке и уверенно смотрит в будущее!
                </p>

                <p className={styles.aboutParagraph}>
                    Компания постоянно совершенствует технологию производства,
                    благодаря чему достигается качество выпускаемой продукции.
                    Деятельность компании основана на разработке и производстве
                    лакокрасочных материалов с использованием импортных высококачественных
                    сырьевых компонентов компаний-лидеров мировой химической промышленности,
                    а также отечественных производителей сырья.
                </p>

                <p className={styles.aboutParagraph}>
                    Мы производим колеровку красок по каталогам <span className={styles.strong}>«RAL», «Monicolor»,
                    «Московская палитра» и по образцам клиентов.</span>
                </p>

                <p className={styles.aboutParagraph}>
                    Работаем с юридическими и физическими лицами, по наличному и безналичному расчёту.
                </p>

                <p className={styles.aboutParagraph}>
                    Если вы заинтересовались нашей продукцией или вам нужны профессиональные рекомендации по
                    использованию и нанесению лакокрасочных материалов, Вы можете позвонить на один из этих номеров:
                </p>

                <ul className={styles.aboutPhones}>
                    <li className={styles.aboutPhone}>
                        8(499) 550-23-53
                    </li>
                    <li className={styles.aboutPhone}>
                        8(495) 972-28-24
                    </li>
                </ul>

                <p className={styles.aboutParagraph}>
                    Или пишите на наш электронный адрес <span className={styles.strong}>rostax@mail.ru</span>
                </p>

                <p className={styles.aboutParagraph}>
                    Почему мы?<br />
                    <ul>
                        <li>Лучшее соотношение цена/качество.</li>
                        <li>Индивидуальный подход к каждому клиенту. </li>
                        <li>Скидки постоянным клиентам</li>
                        <li>Стабильный производитель ЛКМ продукции с 1994 года. </li>
                    </ul>
                </p>

                <AssortmentSection />
            </div>
        </Box>
    );
};

export default About;
