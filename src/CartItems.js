import './CartItem.css'

const CartItem = ({ item, img, price, quantity }) => (
    <div className="CartItem">
        <h4>{item}</h4>
        <img src={img} className="Cart-img" alt='' />
        <ul>
            <li>Price: ${price}</li>
            <li>Quantity: {quantity}</li>
            <li>Subtotal: {price * quantity}</li>
        </ul>
    </div>
)

export default CartItem;