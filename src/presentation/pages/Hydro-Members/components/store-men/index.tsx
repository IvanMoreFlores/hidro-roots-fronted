import React, { useState } from "react";
import "./styles.css";
import Image from "next/image";
import DividerComponent from "../../../membership/components/divider/index";

const HComponent = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        cantidad: false,
        cultivo: false,
        frecuencia: false,
        tiempo: false,
    });

    const toggleOption = (option: keyof typeof selectedOptions) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [option]: !prevState[option],
        }));
    };

    return (
        <div className="container-home-hero-store-men">
            <div className="pricing-container-store-men">
                <div className="pricing-card-store-men">
                    <div className="card-image-store-men">
                        <Image
                            src="/img/men-store/1.png"
                            alt="Plántulas hidropónicas"
                            width={340}
                            height={150}
                        />
                    </div>
                    <div className="princing-padre">
                        <div className="card-type-store-men">
                            <p className="plantulas-s">Plántulas</p>
                        </div>
                        <div className="card-title-store-men">Plántulas sembradas en bandejas</div>
                        <div className="card-description-store-men">
                            Plántulas listas para trasplante en 3-4 semanas optimizando tu producción.
                        </div>
                        <div className="price-store-men">
                            <p className="p-price-sore">S/ 600.00</p>
                            <p className="p2-price-sore">c/mes</p>
                        </div>

                        <div className="dropdown-section-store-men">
                            <div className="dropdown-store-men" onClick={() => toggleOption("cantidad")}>
                                <span>Cantidad: 40 plántulas</span>
                                <i className={`arrow-store-men ${selectedOptions.cantidad ? "up" : "down"}`}></i>
                                {selectedOptions.cantidad && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("cultivo")}>
                                <span>Cultivo: Lechuga</span>
                                <i className={`arrow-store-men ${selectedOptions.cultivo ? "up" : "down"}`}></i>
                                {selectedOptions.cultivo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("frecuencia")}>
                                <span>Frecuencia: 1 vez al mes</span>
                                <i className={`arrow-store-men ${selectedOptions.frecuencia ? "up" : "down"}`}></i>
                                {selectedOptions.frecuencia && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("tiempo")}>
                                <span>Tiempo: 3 meses</span>
                                <i className={`arrow-store-men ${selectedOptions.tiempo ? "up" : "down"}`}></i>
                                {selectedOptions.tiempo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="select-plan-store-men">Elegir plan</button>
                        <DividerComponent width="308px" height="1px" color=" background: rgba(229, 229, 229, 1);
)" />
                        <div className="features-store-men">
                        <div className="feature-item-store-men2">INCLUYE TODO ESTO</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />

                                Compra de unidad de cultivo</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Asesoría gratuita y un mantenimiento</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Insumos hasta 5 meses</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Recibe HidroBeneficios
                                (Comisiones, Promociones y acceso gratuito a clases hidropónica,
                                cultivo y desarrollo
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-card-store-men">
                    <div className="card-image-store-men">
                        <Image
                            src="/img/men-store/1.png"
                            alt="Plántulas hidropónicas"
                            width={340}
                            height={150}
                        />
                    </div>
                    <div className="princing-padre">
                        <div className="card-type-store-men">
                            <p className="plantulas-s">Plántulas</p>
                        </div>
                        <div className="card-title-store-men">Plántulas sembradas en bandejas</div>
                        <div className="card-description-store-men">
                        Hortalizas frescas y sostenibles, ideales para tus clientes.
                        </div>
                        <div className="price-store-men">
                            <p className="p-price-sore">S/ 600.00</p>
                            <p className="p2-price-sore">c/mes</p>
                        </div>

                        <div className="dropdown-section-store-men">
                            <div className="dropdown-store-men" onClick={() => toggleOption("cantidad")}>
                                <span>Cantidad: 40 plántulas</span>
                                <i className={`arrow-store-men ${selectedOptions.cantidad ? "up" : "down"}`}></i>
                                {selectedOptions.cantidad && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("cultivo")}>
                                <span>Cultivo: Lechuga</span>
                                <i className={`arrow-store-men ${selectedOptions.cultivo ? "up" : "down"}`}></i>
                                {selectedOptions.cultivo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("frecuencia")}>
                                <span>Frecuencia: 1 vez al mes</span>
                                <i className={`arrow-store-men ${selectedOptions.frecuencia ? "up" : "down"}`}></i>
                                {selectedOptions.frecuencia && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("tiempo")}>
                                <span>Tiempo: 3 meses</span>
                                <i className={`arrow-store-men ${selectedOptions.tiempo ? "up" : "down"}`}></i>
                                {selectedOptions.tiempo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="select-plan-store-men">Elegir plan</button>
                        <DividerComponent width="308px" height="1px" color=" background: rgba(229, 229, 229, 1);
)" />
                        <div className="features-store-men">
                        <div className="feature-item-store-men2">INCLUYE TODO ESTO</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />

                                Compra de unidad de cultivo</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Asesoría gratuita y un mantenimiento</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Insumos hasta 5 meses</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Recibe HidroBeneficios
                                (Comisiones, Promociones y acceso gratuito a clases hidropónica,
                                cultivo y desarrollo
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pricing-card-store-men">
                    <div className="card-image-store-men">
                        <Image
                            src="/img/men-store/1.png"
                            alt="Plántulas hidropónicas"
                            width={340}
                            height={150}
                        />
                    </div>
                    <div className="princing-padre">
                        <div className="card-type-store-men">
                            <p className="plantulas-s">Plántulas</p>
                        </div>
                        <div className="card-title-store-men">Plántulas sembradas en bandejas</div>
                        <div className="card-description-store-men">
                        Cuidamos tus cultivos hidropónicos con atención eficiente y de calidad.
                        </div>
                        <div className="price-store-men">
                            <p className="p-price-sore">S/ 600.00</p>
                            <p className="p2-price-sore">c/mes</p>
                        </div>

                        <div className="dropdown-section-store-men">
                            <div className="dropdown-store-men" onClick={() => toggleOption("cantidad")}>
                                <span>Cantidad: 40 plántulas</span>
                                <i className={`arrow-store-men ${selectedOptions.cantidad ? "up" : "down"}`}></i>
                                {selectedOptions.cantidad && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("cultivo")}>
                                <span>Cultivo: Lechuga</span>
                                <i className={`arrow-store-men ${selectedOptions.cultivo ? "up" : "down"}`}></i>
                                {selectedOptions.cultivo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("frecuencia")}>
                                <span>Frecuencia: 1 vez al mes</span>
                                <i className={`arrow-store-men ${selectedOptions.frecuencia ? "up" : "down"}`}></i>
                                {selectedOptions.frecuencia && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>

                            <div className="dropdown-store-men" onClick={() => toggleOption("tiempo")}>
                                <span>Tiempo: 3 meses</span>
                                <i className={`arrow-store-men ${selectedOptions.tiempo ? "up" : "down"}`}></i>
                                {selectedOptions.tiempo && (
                                    <div className="dropdown-content-store-men">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                )}
                            </div>
                        </div>

                        <button className="select-plan-store-men">Elegir plan</button>
                        <DividerComponent width="308px" height="1px" color=" background: rgba(229, 229, 229, 1);
)" />
                        <div className="features-store-men">
                        <div className="feature-item-store-men2">INCLUYE TODO ESTO</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />

                                Compra de unidad de cultivo</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Asesoría gratuita y un mantenimiento</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Insumos hasta 5 meses</div>
                            <div className="feature-item-store-men1">
                                <Image
                                    src="/img/men-store/2i.png"
                                    alt="Plántulas hidropónicas"
                                    width={16}
                                    height={16}
                                />
                                Recibe HidroBeneficios
                                (Comisiones, Promociones y acceso gratuito a clases hidropónica,
                                cultivo y desarrollo
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HComponent;
