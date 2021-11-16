import React from 'react';
import styles from './Style.module.scss';

const FileModal = () =>{

    const mapDetails = [
        { 
            title: 'Building Number',
            value: '8228'
        },
        { 
            title: 'Unit Number/Address',
            value: 'King abdul aziz south road'
        },
        { 
            title: 'Street',
            value: 'Street Name'
        },
        { 
            title: 'Square/City',
            value: 'Riyadh'
        },
        { 
            title: 'Zip Code/Postal Code',
            value: '2121'
        },
        { 
            title: 'State/Region',
            value: 'Najd'
        },
        { 
            title: 'Country',
            value: 'Saudi Arabia'
        },
    ]

    return(
        <div className={ styles["map-details"] }>
            { mapDetails.map(detail => (
                <span key={ detail.title }>
                    <span>{ detail.title }</span><br/>
                    <strong>{ detail.value }</strong>
                </span>
            )) }
        </div>
    )
}

export default FileModal;