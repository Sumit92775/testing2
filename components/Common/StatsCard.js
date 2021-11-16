// import styles from './StatsCard.module.scss';
import cx from 'classnames';

const StatsCard = (props) => {
    return (
        <div className={ cx('stats-card', props.stats.class) }>
            <div className={ cx('stats-card-icon') }>
                <span className="material-icons">{ props.stats.icon }</span>
            </div>
            <h6 className={ cx('stats-card-data', 'mt-4') }>{ props.stats.value }</h6>
            <p className={ cx('stats-card-name') }>{ props.stats.label }</p>
        </div>
    )
}

export default StatsCard
