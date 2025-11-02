function Button(props) {
    const buttonStyle = {
        color: props.color,
        fontSize: props.fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{props.text}</button>
    );
}

export default function MultipleButtons() {
    return (
        <div>
            <Button text="Click me!" color="blue" fontSize={12} />
            <Button text="Don't Click me!" color="red" fontSize={12} />
            <Button text="Click me!" color="blue" fontSize={20} />
        </div>
    );
}