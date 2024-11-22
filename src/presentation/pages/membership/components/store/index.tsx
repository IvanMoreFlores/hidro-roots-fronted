import React from "react";
import "./styles.css";
import Image from "next/image";

const StoreComponent: React.FC = () => {
    return (
        <div className="container-store">
            <div className="grid-container-store">
                <div className="card">
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="tag vendido">10% DSCTO</div>
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="two-text-store">Quedan 4 unidades</p>
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                            <p className="two-text-store">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                <div className="tag vendido">10% DSCTO</div>
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                        <p className="two-text-store">Quedan 4 unidades</p>
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                            <p className="two-text-store">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                        <p className="two-text-store">Quedan 4 unidades</p>
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="tag vendido">10% DSCTO</div>
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                            <p className="two-text-store">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn">Comprar</button>
                            <button className="detalle-btn">Detalle</button>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="tag agotado">Agotado</div>
                    <Image
                        width={308}
                        height={400}
                        src="/img/store/one.png"
                        alt="Hidro Boost 8 Plantas"
                        className="image disabled"
                    />
                    <div className="card-content">
                        <div className="text-hidro">
                            <p className="product-name">Hidro Boost 8 Plantas</p>
                            <p className="price">S/ 321.00</p>
                        </div>
                        <div className="store-div">
                            <button className="comprar-btn-agotado">Comprar</button>
                            <button className="detalle-btn-agotado">Detalle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreComponent;
