import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const totalQuantity = useSelector((state) => state.cart.totalQuantity);
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
    const [addedToCart, setAddedToCart] = useState(cart);

    const handleAddToCart = (product) => {
        console.log("Items getting added...", product);
        dispatch(addItem(product));
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: "true", //set the product name as key value and value as true to indicate it's added to cart
        }));
    };
    useEffect(() => {
        const newAddedToCart = cart.reduce((acc, product) => {
            acc[product.name] = "true";
            return acc;
        }, {});
        setAddedToCart(newAddedToCart);
    }, [cart]);


    const plantsArray = [
        {
            category: "Air Purifying Plants",
            plants: [
                {
                    name: "Snake Plant",
                    image:
                        "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description: "Produces oxygen at night, improving air quality.",
                    cost: "$20",
                },
                {
                    name: "Spider Plant",
                    image:
                        "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                    description: "Filters formaldehyde and xylene from the air.",
                    cost: "$17",
                },
                {
                    name: "Peace Lily",
                    image:
                        "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                    description: "Removes mold spores and purifies the air.",
                    cost: "$23",
                },
                {
                    name: "Boston Fern",
                    image:
                        "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
                    description: "Adds humidity to the air and removes toxins.",
                    cost: "$14",
                },
                {
                    name: "Rubber Plant",
                    image:
                        "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
                    description: "Easy to care for and effective at removing toxins.",
                    cost: "$16",
                },
                {
                    name: "Aloe Vera",
                    image:
                        "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Purifies the air and has healing properties for skin.",
                    cost: "$28",
                },
            ],
        },
        {
            category: "Aromatic Fragrant Plants",
            plants: [
                {
                    name: "Lavender",
                    image:
                        "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$24",
                },
                {
                    name: "Jasmine",
                    image:
                        "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Sweet fragrance, promotes relaxation.",
                    cost: "$14",
                },
                {
                    name: "Rosemary",
                    image:
                        "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
                    description: "Invigorating scent, often used in cooking.",
                    cost: "$19",
                },
                {
                    name: "Mint",
                    image:
                        "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
                    description: "Refreshing aroma, used in teas and cooking.",
                    cost: "$15",
                },
                {
                    name: "Lemon Balm",
                    image:
                        "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Citrusy scent, relieves stress and promotes sleep.",
                    cost: "$17",
                },
                {
                    name: "Hyacinth",
                    image:
                        "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
                    description:
                        "Hyacinth is a beautiful flowering plant known for its fragrant.",
                    cost: "$29",
                },
            ],
        },
        {
            category: "Insect Repellent Plants",
            plants: [
                {
                    name: "oregano",
                    image:
                        "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
                    description:
                        "The oregano plants contains compounds that can deter certain insects.",
                    cost: "$15",
                },
                {
                    name: "Marigold",
                    image:
                        "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
                    description:
                        "Natural insect repellent, also adds color to the garden.",
                    cost: "$18",
                },
                {
                    name: "Geraniums",
                    image:
                        "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
                    description:
                        "Known for their insect-repelling properties while adding a pleasant scent.",
                    cost: "$22",
                },
                {
                    name: "Basil",
                    image:
                        "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
                    description: "Repels flies and mosquitoes, also used in cooking.",
                    cost: "$19",
                },
                {
                    name: "Lavender",
                    image:
                        "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Calming scent, used in aromatherapy.",
                    cost: "$26",
                },
                {
                    name: "Catnip",
                    image:
                        "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
                    description: "Repels mosquitoes and attracts cats.",
                    cost: "$18",
                },
            ],
        },
        {
            category: "Medicinal Plants",
            plants: [
                {
                    name: "Aloe Vera",
                    image:
                        "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
                    description: "Soothing gel used for skin ailments.",
                    cost: "$10",
                },
                {
                    name: "Echinacea",
                    image:
                        "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
                    description: "Boosts immune system, helps fight colds.",
                    cost: "$18",
                },
                {
                    name: "Peppermint",
                    image:
                        "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
                    description: "Relieves digestive issues and headaches.",
                    cost: "$13",
                },
                {
                    name: "Lemon Balm",
                    image:
                        "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
                    description: "Calms nerves and promotes relaxation.",
                    cost: "$17",
                },
                {
                    name: "Chamomile",
                    image:
                        "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
                    description: "Soothes anxiety and promotes sleep.",
                    cost: "$11",
                },
                {
                    name: "Calendula",
                    image:
                        "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
                    description: "Heals wounds and soothes skin irritations.",
                    cost: "$20",
                },
            ],
        },
        {
            category: "Low Maintenance Plants",
            plants: [
                {
                    name: "ZZ Plant",
                    image:
                        "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    description: "Thrives in low light and requires minimal watering.",
                    cost: "$27",
                },
                {
                    name: "Pothos",
                    image:
                        "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
                    description: "Tolerates neglect and can grow in various conditions.",
                    cost: "$14",
                },
                {
                    name: "Snake Plant",
                    image:
                        "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                    description:
                        "Needs infrequent watering and is resilient to most pests.",
                    cost: "$19",
                },
                {
                    name: "Cast Iron Plant",
                    image:
                        "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
                    description: "Hardy plant that tolerates low light and neglect.",
                    cost: "$23",
                },
                {
                    name: "Succulents",
                    image:
                        "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
                    description: "Drought-tolerant plants with unique shapes and colors.",
                    cost: "$10",
                },
                {
                    name: "Aglaonema",
                    image:
                        "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
                    description: "Requires minimal care and adds color to indoor spaces.",
                    cost: "$28",
                },
            ],
        },
    ];
    const styleObj = {
        backgroundColor: "#4CAF50",
        color: "#fff!important",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
    };
    const styleObjUl = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "1100px",
    };
    const styleA = {
        color: "white",
        fontSize: "30px",
        textDecoration: "none",
    };
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true); // Set showCart to true when cart icon is clicked
    };
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
        setShowCart(false); // Hide the cart when navigating to About Us
    };

    const handleContinueShopping = (e) => {
        if (e) e.preventDefault(); // Safeguard against undefined event
        setShowCart(false); // Your logic here
        // setAddedToCart({}); //Objects in the cart are cleared
    };
    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                            alt=""
                        />
                        <a href="/" style={{ textDecoration: "none" }}>
                            <div>
                                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        {" "}
                        <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
                            Plants
                        </a>
                    </div>
                    <div>
                        {" "}
                        <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
                            <h1 className="cart">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    id="IconChangeColor"
                                    height="68"
                                    width="68"
                                >
                                    <rect width="156" height="156" fill="none"></rect>
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path
                                        d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                                        fill="none"
                                        stroke="#faf9f9"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        id="mainIconPathAttribute"
                                    ></path>
                                </svg>
                                {totalQuantity > 0 && (
                                    <span
                                        className={`cart_quantity_count ${totalQuantity > 9 ? "double-digit" : ""
                                            } `}
                                    >
                                        {" "}
                                        {totalQuantity}{" "}
                                    </span>
                                )}
                            </h1>
                        </a>
                    </div>{" "}
                </div>
            </div>
            {!showCart ? (
                <div className="product-grid">
                    {plantsArray.map((category, index) => (
                        <div key={index}>
                            <h1>
                                <hr />
                                <div className="category-title">{category.category}</div>
                                <hr style={{ margin: "0.5rem auto 1rem" }} />
                            </h1>
                            <div className="product-list">
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex}>
                                        <img
                                            className="product-image"
                                            src={plant.image}
                                            alt={plant.name}
                                        />
                                        <div className="product-title"> {plant.name} </div>
                                        <div className="product-description">
                                            {" "}
                                            {plant.description}{" "}
                                        </div>
                                        <div className="product-cost"> {plant.cost} </div>
                                        <button
                                            className={`product-button ${addedToCart.hasOwnProperty(plant.name) ? "disabled" : ""
                                                }`}
                                            onClick={() => handleAddToCart(plant)}
                                            disabled={addedToCart.hasOwnProperty(plant.name)} //Disable button if product is in disabledProducts
                                        >
                                            {addedToCart.hasOwnProperty(plant.name)
                                                ? "Added in Cart"
                                                : "Add to Cart"}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;