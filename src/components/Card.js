import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap css
import "./card.css"; // Import module.css file
import personImg from "../images/mohammed.png"; // Import image file

function Card() {
  return (
    <>
      {/* <h1>Hello in Social Card</h1> */}
      <div className="card">
        <img src={personImg} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">mohammed ibrahim</h5>
          <hr />
          <ul className="list">
            <li className="item">
              phone number: <a href="tel:+97433656566">+97433656566</a>
            </li>
            <li className="item">
              email:{" "}
              <a href="mailto:mi33656566@gmail.com">mi33656566@gmail.com</a>
            </li>
          </ul>
          <a href="tel:+97433656566" className="btn btn-primary">
            call me
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
