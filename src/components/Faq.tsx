import React from 'react';

const Faq = () => {
  return (
    <section id="faq" className="px-12 py-24 grid place-items-center bg-slate-800">
      <h2 className="font-lato text-2xl md:text-5xl font-bold text-gray-200">DUDAS FRECUENTES</h2>
      <div className="lg:px-36 w-full text-gray-200 py-12">
        <div className="collapse collapse-arrow bg-slate-500">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Cuáles son los métodos de pago?
          </div>
          <div className="collapse-content">
            <p className="font-serif">Respuesta</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-500">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Cuánto es el costo de envío?
          </div>
          <div className="collapse-content">
            <p className="font-serif">Respuesta</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-slate-500">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Qué garantía tienen los productos?
          </div>
          <div className="collapse-content">
            <p className="font-serif">Respuesta</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;