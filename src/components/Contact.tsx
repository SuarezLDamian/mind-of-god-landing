import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="px-12 py-24 relative flex flex-col justify-center overflow-hidden bg-gray-950">
      <div className="w-full m-auto rounded-md shadow-md lg:max-w-xl">
        <h2 className="font-lato text-4xl md:text-5xl font-bold text-center text-gray-200 mb-8">CONTACTANOS</h2>
        <form className="space-y-4"
          action="https://formbold.com/s/oyW8K"
          method="POST">
          <div>
            <label className="label">
              <span className="text-gray-200 label-text">Nombre</span>
            </label>
            <input type="text" name="Name" placeholder="Tu nombre" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <span className="text-gray-200 label-text">E-mail</span>
            </label>
            <input type="email" name="Email" placeholder="Tu e-mail" className="w-full input input-bordered" />
          </div>
          <div>
            <label className="label">
              <span className="text-gray-200 label-text">Mensaje</span>
            </label>
            <textarea name="Message" placeholder="Tu mensaje" className="w-full textarea textarea-bordered" />
          </div>
          <div>
            <button type="submit" className="btn btn-block btn-gray-200">ENVIAR</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;