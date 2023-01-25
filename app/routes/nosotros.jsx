import imagen from "../../public/img/nosotros.jpg";
import styles from '../styles/nosotros.css'

export function meta() {
    return{
        title: 'GuitarLA -Sobre Nosotros',
        description: 'Venta de guitarras, blog de musica'
    }
}

export function links(){
    return[
        {
            rel:'stylesheet',
            href: styles
        },
        {
            rel:'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>
      <div className="contenido">
        <img src={imagen} alt="nosotrosimagen" />
        <div>
          <p>
            Fusce et imperdiet ipsum, et rutrum nunc. Sed et orci consequat,
            congue nulla ut, tristique purus. Quisque felis tortor, pretium non
            consequat at, euismod non dui. Aliquam vestibulum lacus est,
            tincidunt feugiat est fermentum efficitur. Ut posuere nibh sit amet
            dui rhoncus mollis. Sed auctor posuere congue. Proin a turpis nunc.
            Mauris ut placerat elit.
          </p>
          <p>
            Fusce et imperdiet ipsum, et rutrum nunc. Sed et orci consequat,
            congue nulla ut, tristique purus. Quisque felis tortor, pretium non
            consequat at, euismod non dui. Aliquam vestibulum lacus est,
            tincidunt feugiat est fermentum efficitur. Ut posuere nibh sit amet
            dui rhoncus mollis. Sed auctor posuere congue. Proin a turpis nunc.
            Mauris ut placerat elit.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
