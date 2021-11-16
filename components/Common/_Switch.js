import cx from 'classnames';

const Switch = (props) => {
    let
    bg,
    onClick = event => {
        bg.style.width = `${event.target.parentElement.offsetWidth}px`;
        bg.style.left = `${event.target.parentElement.offsetLeft}px`;

        [...event.target.parentElement.parentElement.children].forEach(element => {
            if(element.nodeName.toLowerCase() == 'label') {
                element.className = '';
            }
        });
        event.target.parentElement.className = 'active';
    },
    options = props.hasOwnProperty('options') && Array.isArray(props['options']) ? props['options'] : [
        { label: 'Provider', value: 'provider' },
        { label: 'Freelancer', value: 'freelancer', selected: true },
    ];

    return (
        <div className="switch-wrapper">
            { options.map((opton, i) => (
                <label key={i}>
                    <input type="radio" name="radio" value={ opton.value } onClick={onClick} />
                    <span>{ opton.label }</span>
                </label>
            ))}
            <span ref={c => {bg = c}} className="bg"></span>
        </div>
    )
}

export default Switch
