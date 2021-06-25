import React from 'react';
import CollectionItem from '../collection-items/collection-item.component';
import './preview-collection.styles.scss';

const PreviewCollection = ({title, items}) => {
    return ( 
        <div className="preview-collection">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items.slice(0,4).map(({id, ...itemProps}) => {
                        return(
                            <CollectionItem key={id} {...itemProps}/>
                        )
                    })
                }
            </div>
        </div>
    );
}
 
export default PreviewCollection;