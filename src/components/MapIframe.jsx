
function MapIframe({mapStyle}) {


  return (
    <iframe className="border-solid border-2 border-black" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.060276483078!2d19.116504776905085!3d47.43026800013665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dd453e059039%3A0x104d089ff016db66!2zVGF0YU1vdG8gbW90b3JrZXLDqWtww6FyIGphdsOtdMOhcyDDqXMgc3plcnbDrXogQnVkYXBlc3Q!5e0!3m2!1sen!2shu!4v1719217223301!5m2!1sen!2shu" style={mapStyle} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default MapIframe
