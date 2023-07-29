import '../styles/sidecard.sass'

const Sidecard = (props) => {
    return (
    <div className="sidecard-container">
        <img className='restaurant-image' src={props.photo}></img>
        <h5>
            <div>{props.title}</div>
        </h5>
    </div>
    );
  };
  
  export default Sidecard;