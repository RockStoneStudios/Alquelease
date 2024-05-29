import { Link } from "react-router-dom";
import "./card.scss";

function Card({ item }) {
  console.log('****************************',item);
  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <div>

        <div className="title-container">
          <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <h6 className={item.verificada === "verificado" ? "verificada" : "no-verificada"}>{item.verificada}</h6>
        </div>
        <div>
            <h6 className={item.estado === 'disponible' ? 'dispo' : 'no-dispo'}>{item.estado}</h6>
        </div>
        </div>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Habitaciones</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} Baños</span>
            </div>
          </div>
         
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
