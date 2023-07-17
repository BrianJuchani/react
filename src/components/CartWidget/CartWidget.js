
import cart from "./assets/carrito.svg.png"
const CartWidget = ()=>{
    return(
        <figure className="image is-128x128">
            <img className ="image is-128x128"src={cart} alt="carrito"/>
            0
        </figure>
    )
}

export default CartWidget;