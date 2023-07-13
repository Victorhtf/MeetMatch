import Photo from "../assets/user.png"

import "../styles/Sidebar.sass"
import Sidecard from './Sidecard'


import mcdonaldsImage from '../assets/mcdonalds.jpg';
import outbackImage from '../assets/outback.jpg';
import maderoImage from '../assets/madero.png';
import vapianoImage from '../assets/vapiano.png';
import cookieDeliveryImage from '../assets/cookie-delivery.jpg';


const Sidebar = () => {
    const matches = [
        {name: 'McDonalds', photo: mcdonaldsImage},
        {name: 'Outback', photo: outbackImage},
        {name: 'Madero', photo: maderoImage},
        {name: 'Vapiano', photo: vapianoImage},
        {name: 'Cookies Delivery', photo: cookieDeliveryImage},
    ]

    return (
        <div className='sidebar-container'>
          <div className="secondary-content">
            <div className="user-container">
              <div className="photo-container">
                <img className="user-photo" src={Photo} alt="User"></img>
              </div>
              <p className='user-name'>Victor Formisano</p>
            </div>
          </div>
          <div className="primary-content">
            <div className="matches-container">
                <h2> Matches 💜</h2>
                <section className='items'>
                    {matches.map((match, index) => (
                    <Sidecard title={match.name} photo={match.photo} />
                    ))}
                </section>
            </div>
            <h2> Favorites 🔥</h2>
            <h2> Likes ⭐</h2>
          </div>
        </div>
      )
}

export default Sidebar;