import cx from 'classnames';
import { Button } from 'antd';

const SubscriptionCard = (props) => {
    const onClick = () => {
        props.click();
    }

    return (
        <div className={ cx('subscription-card', props.subscription.is_premium ? 'premium' : '') }>
            <h2 className="subscription-price">${ props.subscription.price }</h2>
            <p className="subscription-desc">{ props.subscription.desc }</p>
            <h3 className="subscription-title">{ props.subscription.title }</h3>
            <p className="subscription-sub-title">{ props.subscription.sub_title }</p>
            <ul className="subscription-features">
                { props.subscription.features.map((feature, i) => <><li key={i} className="subscription-feature-name">{feature.name}</li><li key={`val-${i}`} className={cx(feature.available ? 'available' : 'not-available', 'value')}>{feature.value}</li></>) }
            </ul>
            <Button onClick={onClick} className={ cx('subscription-button full-width', props.subscription.is_premium ? 'secondary' : 'primary')}>{ props.subscription.button_txt }</Button>
        </div>
    )
}

export default SubscriptionCard
