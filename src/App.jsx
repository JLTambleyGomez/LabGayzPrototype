/* eslint-disable react/no-unescaped-entities */
// src/App.js
import { useEffect } from 'react';
import logo from "../src/imgs/logo.png";
import img1 from "../src/imgs/1.png";
import img2 from "../src/imgs/2.png";
import img3 from "../src/imgs/3.png";
import img4 from "../src/imgs/4.png";
import img5 from "../src/imgs/5.png";
import img6 from "../src/imgs/6.png";
import img7 from "../src/imgs/7.png";
import img8 from "../src/imgs/8.png";
import img10 from "../src/imgs/10.png";
import "./App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 300,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);

    return (
        <>
            <div className="d1">
                <img src={logo} alt="logo" />
                <h1 className="h1-1">Prototipo</h1>
            </div>
            <div className="seccion1" data-aos="fade-up">
                <img src={img1} className="img" />
                <img src={img2} className="img" />
                <div className="d21">
                    <h1> Descripción de los elementos </h1>
                    <p>
                        La imagen muestra la interfaz de una app móvil de comercio electrónico dental:
                    </p>
                    <ul>
                        <li><strong>Encabezado:</strong> Logo Lab gayz a la izquierda; menú de hamburguesa y carrito a la derecha.</li>
                        <li><strong>Barra de búsqueda:</strong> Centrada bajo el encabezado, mejora la usabilidad.</li>
                        <li><strong>Categorías:</strong> Imágenes con etiquetas (Lámparas, Impresión, etc.), fáciles de identificar.</li>
                        <li><strong>Banner promocional:</strong> Imagen grande en la parte inferior, destacando promociones.</li>
                    </ul>
                    <h2>Justificación del diseño:</h2>
                    <ul>
                        <li><strong>UX:</strong> Navegación clara, búsqueda prominente y elementos táctiles grandes.</li>
                        <li><strong>Visuales:</strong> Imágenes de alta calidad, etiquetas claras y uso atractivo del color.</li>
                    </ul>
                    <ul className="uls">
                        <img className="promo" src="https://res.cloudinary.com/ddectuilp/image/upload/v1716137400/BotSentinel/removal.ai__ee97c248-51b8-44a6-89dd-ce30d5e27135-oig3_bzvshl.png" alt="Promo" />
                        <p>Elementos intercambiables por administrador</p>
                    </ul>
                </div>
            </div>
            <div className="seccion2" data-aos="fade-up">
                <div className="d21">
                    <h1> Descripción de los elementos </h1>
                    <ul>
                        <li><strong>Imagen destacada:</strong> "Ofertas por tiempo limitado", ubicada bajo la barra de búsqueda para atraer la atención del usuario hacia promociones actuales.</li>
                        <li><strong>Productos destacados:</strong>Imágenes y precios: Se muestran productos con sus nombres, precios y botones de compra rápida, permitiendo a los usuarios agregar productos al carrito directamente.</li>
                        <li><strong>Sección de contacto:</strong> : Opciones como "Contacto", "Whatsapp" y "Showroom", ofreciendo diferentes medios de comunicación.</li>
                    </ul>
                    <h2>Justificación del diseño:</h2>
                    <ul>
                        <li><strong>UX:</strong> Navegación clara, búsqueda prominente y elementos táctiles grandes.</li>
                        <li><strong>Visuales:</strong> Imágenes de alta calidad, etiquetas claras y uso atractivo del color.</li>
                        <li><strong>Adaptabilidad:</strong>Elementos táctiles grandes y fácilmente interactuables en dispositivos móviles.</li>
                    </ul>
                    <ul className="uls">
                        <img className="promo" src="https://res.cloudinary.com/ddectuilp/image/upload/v1716137400/BotSentinel/removal.ai__ee97c248-51b8-44a6-89dd-ce30d5e27135-oig3_bzvshl.png" alt="Promo" />
                        <p>Productos,Banners intercambiables por administrador</p>
                    </ul>
                </div>
                <img src={img3} className="img" alt="Imagen 3" />
                <img src={img4} className="img" alt="Imagen 4" />
            </div>
            <div className="seccion1" data-aos="fade-up">
                <img src={img5} className="img" alt="Imagen 5" />
                <img src={img6} className="img" alt="Imagen 6" />
                <div className="d21">
                    <h1> Descripción de los elementos </h1>
                    <ul>
                        <li><strong>Información importante:</strong> Servicio técnico, facilidades de contacto, información sobre privacidad, devoluciones, envíos y dirección de domicilio fiscal.</li>
                    </ul>
                    <h2>Justificación del diseño:</h2>
                    <ul>
                        <li><strong>UX:</strong> Navegación clara, búsqueda prominente </li>
                        <li><strong>Visuales:</strong> Texto claro .</li>
                    </ul>
                </div>
            </div>
            <div className="seccion1" data-aos="fade-up">
                <div className="d21">
                    <h1> Descripción de los elementos </h1>
                    <ul>
                        <li><strong>Formulario de contacto:</strong> Facilidades de contacto, servicio técnico, dudas.</li>
                        <li><strong>Dirección de sucursal:</strong> Ubicación, horarios, contacto.</li>
                    </ul>
                    <h2>Justificación del diseño:</h2>
                    <ul>
                        <li><strong>UX:</strong> Navegación clara, formulario comprensible  </li>
                        <li><strong>Visuales:</strong>Uso de contrastes,texto claro, mapa de dirección .</li>
                    </ul>
                </div>
                <img src={img7} className="img" alt="Imagen 7" />
                <img src={img8} className="img" alt="Imagen 8" />
            </div>
            <div className="seccion1" data-aos="fade-up">
                <img src={img10} className="img" alt="Imagen 10" />
                <div className="d21">
                    <h1> Descripción de los elementos </h1>
                    <ul>
                        <li><strong>Edición y eliminación:</strong> Posibilidad de seleccionar para editar o eliminar productos, banners y promociones.</li>
                    </ul>
                    <h2>Justificación del diseño:</h2>
                    <ul>
                        <li><strong>UX:</strong> Navegación clara, necesidad de administración.</li>
                        <li><strong>Visuales:</strong>Uso de contrastes,texto claro, elementos visuales.</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default App;
