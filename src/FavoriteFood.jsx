import noodles from '/public/noodles-and-cottage-cheese.jpg';

function GreatEasyMeal() {
    return <div>
        <img src={noodles} alt="Noodles and Cottage Cheese" />
        <p>I&#39;m personally rather fond of this basic dish. Cook some noodles, heap on some cottage cheese, warm it more if you wish, and dig in.</p>
    </div>
}

function AnotherGoodMeal() {
    return <>
        <h2>
            I also suggest lentil stews in slow cookers.
        </h2>
        <h3>
            Slow cookers are great in general.
        </h3>
    </>
}

export { GreatEasyMeal, AnotherGoodMeal }