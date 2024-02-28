import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="hero h-95v" style={{ backgroundImage: 'url(https://w.wallhaven.cc/full/v9/wallhaven-v9yx1l.png)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-8 text-6xl font-bold  text-gray-300">MIND OF GOD</h1>
          <p className="mb-5 text-lg font-serif text-gray-200">Somos una comunidad que busca inspirar a todos los soñadores a salir de su zona de confort y transformar sus vidas.
          </p>
          <p className="mb-5 text-lg  text-gray-200">Nos negamos a conformarnos con una existencia mediocre impuesta por otros; en su lugar, alentamos a perseguir activamente nuestros sueños y aspiraciones.
          </p>
          <p className="mb-5 text-lg  text-gray-200">
            Nuestro objetivo es fomentar un nuevo paradigma de pensamiento, una mentalidad que desafíe lo convencional y desbloquee todo nuestro potencial.
          </p>
          <Link className="btn btn-gray-200 text-slate-800 text-bold" href={"https://mindofgod.empretienda.com.ar/"} target="_blank">Llévame a la tienda</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;