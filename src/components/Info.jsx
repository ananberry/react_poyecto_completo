import '../styles/Info.css';
import logoImg from '../assets/logo.png';

function Info() {

    return (

        <section className='tarjeta'>

            {/* LOGO Y TÍTULO */}
            <div className='contenedor1'>

                <img
                    className='logo'
                    src={logoImg}
                    alt="logo empresa"
                />

                <h2 className='titulo'>
                    NUESTRA <br />
                    AGENCIA
                </h2>

            </div>

            {/* CONTENIDO */}
            <div className='contenedor2'>

                <p className='contenido'>
                    Este proyecto tiene el propósito de brindar un
                    sistema novedoso y eficaz a las instalaciones
                    de Cosmos Schools con una arquitectura web
                    que permita la trazabilidad de objetos
                    prestados y su integridad estructural.
                </p>

                <button className='boton'>
                    USA NUESTROS SERVICIOS
                </button>

            </div>

        </section>
    );
}

export default Info;