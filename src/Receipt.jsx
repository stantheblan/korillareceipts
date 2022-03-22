export default function Receipt(props) {
    console.log(props)
    const { person, order, paid } = props
    return (
        <div className="person-card">
            <h1>{person}</h1>
            <div className="order-card">
                <p>Main: {order.main}</p>
                <p>Protein: {order.protein}</p>
                <p>Rice: {order.rice}</p>
                <p>Sauce: {order.sauce}</p>
                <p>Toppings: {order.toppings}</p>
                <p>Drink: {order.drink}</p>
                <p>Cost: {order.cost}</p>
                <p>Paid: {paid}</p>
            </div>
        </div>
    )
}