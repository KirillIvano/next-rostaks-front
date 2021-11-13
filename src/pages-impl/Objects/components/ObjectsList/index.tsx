import React from 'react';
import classnames from 'classnames';
import {useObjectStaticData} from '../../hooks/useObjectStaticData';


type CatalogCategoriesProps = {
    className?: string;
}

const ObjectsList = ({className}: CatalogCategoriesProps) => {
    const {objects} = useObjectStaticData();

    return (
        <div
            className={classnames(
                className,
                'row',
            )}
        >
            {objects.map(
                object => (
                    <div
                        className="col-md-3 col-xs-6"
                        key={object.id}
                    >
                        {object.name}
                    </div>
                ),
            )}
        </div>
    );
};

export default ObjectsList;
