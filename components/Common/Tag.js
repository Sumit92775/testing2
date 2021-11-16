import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import cx from 'classnames';

const Tag = ({name, icon, selected}) => {
    return (
        <div className={ cx(styles['tag'], selected ? styles['selected'] : '')}>
            { icon ? <span className="mr-8">{ icon }</span> : '' }
            { name }
        </div>
    )
}

Tag.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.element,
    selected: PropTypes.bool
}

export default Tag
