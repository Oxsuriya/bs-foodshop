import burger from "../assets/cardburger.jpg";
import pizza from "../assets/cardpizza.jpg";
import tacos from "../assets/taccos.jpg";
import ramen from "../assets/ramen.jpg";
import cf from "../assets/chickenfry.jpg";
import cg from "../assets/cadgrill.jpg";
import "./menu.css";

function Menu() {
    const menuItems = [
        { name: "Chicken Burger", img: burger, price: "$3.50", rating: 160 },
        { name: "Chicken Pizza", img: pizza, price: "$4.20", rating: 142 },
        { name: "Chicken Fry", img: cf, price: "$5.00", rating: 123 },
        { name: "Grilled Sandwich", img: cg, price: "$3.80", rating: 98 },
        { name: "Tacos", img: tacos, price: "$4.50", rating: 85 },
        { name: "Ramen", img: ramen, price: "$6.00", rating: 120 }
    ];

    return (
        <section className="menu">
            <div className="ormcntmain">
                <div className="ormcnt">
                    <div className="orm">
                        <h1>Our <span>Regular</span> Menu</h1>
                    </div>
                    <div className="ormsub">
                        <p>These Are Our Regular Menus. You Can Order Anything You Like.</p>
                    </div>
                </div>
                <div className="seeall">
                    <button className="seall">See All</button>
                </div>
            </div>

            <div className="sixcards">
                {menuItems.map((item, index) => (
                    <div className="card" key={index}>
                        <div className="imgcdiv">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <h2>{item.name}</h2>
                        <div className="stars">⭐ ⭐ ⭐ ⭐ ⭐ ({item.rating})</div>
                        <div className="price">{item.price}</div>
                        <button className="buy-now">Buy Now</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Menu;
