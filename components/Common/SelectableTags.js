import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import cx from 'classnames';
import Icon from '@material-ui/core/Icon';


const Tag = ({ item, className="", onClick }) => {
    const [selected, updateSelection] = useState(item.selected),
    click = () => {
        item.selected = !item.selected;
        updateSelection(item.selected);
        onClick && onClick(item);
    }

    return (
        <div key={item.id} className={ cx(styles['tag'], styles[className], selected ? styles['selected'] : '')} onClick={ () => click() }>
            { item?.icon ? <span className={ cx(styles['icon'], "mr-8") }><Icon>{item?.icon}</Icon></span> : '' }
            { item?.name }
        </div>
    )
}

const SelectableTags = ({items, onChange, multiSelect=false, className=""}) => {
    const [tags, updateTags] = useState(items),

    click = (item) => {
        item.selected = !item.selected;
        if(!multiSelect && item.selected) {
            items.filter(tag => tag.id != item.id).forEach(tag => tag.selected = false);
        }
        onChange && onChange();
    };

    return (
        <>
            { items.map(item => <Tag key={ item.id } item={ item } className={ className } onChange={ click } />) }
        </>
    )
}

export default SelectableTags