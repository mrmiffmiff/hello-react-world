function Button({ text = "Click me!", color = "blue", fontSize = 12 }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button style={buttonStyle}>{text}</button>
    );
}

export default function MultipleButtons() {
    return (
        <div>
            <Button />
            <Button text="Don't Click me!" color="red" />
            <Button fontSize={20} />
        </div>
    );
}