import React from 'react';
import './Styles/Body.css';
import Image1 from './Resources/discord.webp';

function Body() {
  return (
    <div className="body">
      <section className="hero">
        <div className="hero-content">
          <h1>UN CHAT DE GRUPO LLENO DE JUEGOS Y DIVERSIÓN</h1>
          <p>Discord es la plataforma perfecta para jugar y pasarlo bien con amigos, o incluso para crear una comunidad con miembros en todo el mundo. Personaliza tu propio espacio para hablar, jugar y socializar.</p>
        </div>
      </section>
      <img src={Image1} alt='discord'></img>
    </div>
  );
}

export default Body;
