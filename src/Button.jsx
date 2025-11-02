function Button({ text = "Click me!", color = "blue", fontSize = 12, handleClick }) {
    const buttonStyle = {
        color: color,
        fontSize: fontSize + 'px'
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            {text}
        </button>
    );
}

export default function MultipleButtons() {
    const handleButtonClick = () => {
        window.location.href = "https://www.google.com";
    };

    return (
        <div>
            <Button />
            <Button text="Don't Click me!" color="red" />
            <Button fontSize={20} />
            <Button handleClick={handleButtonClick} />
        </div>
    );
}