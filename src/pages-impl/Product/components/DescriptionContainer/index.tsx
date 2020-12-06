import React, {useMemo} from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';


type DescriptionContainerProps = {
    content: string;

    className?: string;
}

const DescriptionContainer = ({
    content,

    className,
}: DescriptionContainerProps) => {
    const contentObj = useMemo(() => ({__html: content}), [content]);

    return (
        <div
            className={classnames(styles.descriptionContainer, className)}
            dangerouslySetInnerHTML={contentObj}
        />
    );
};
export default DescriptionContainer;
