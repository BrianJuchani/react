import CartWidget from "../CartWidget/CartWidget";



const NavBar=()=>{
    return(
        <nav>
            <section className="hero is-primary">
                <div className="hero-body">
                    <h1 className="title">BJFIT</h1> 
                </div>
            </section>
            <div>
                <button>Remera</button>
                <button>Buzo</button>
                <button>Pantalon</button>
                <button>Musculosa</button>
            </div>
            <CartWidget/>       
        </nav>
    )
}
export default NavBar;    
