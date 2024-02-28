import React from 'react';
import ProductCard from './ProductCard';

const Drops = () => {
  return (
    <section id="drops" className="px-12 py-24 grid place-items-center bg-slate-800">
      <h2 className="font-lato text-5xl font-bold text-gray-200">DROPS</h2>
      <div className="flex flex-col xl:flex-row gap-4 py-12">
        <ProductCard name="REMERA MARCO AURELIO" description="Remera oversize diseñada para todos los pensadores y amantes de la filosofía estoica." image="https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=826&t=st=1709087786~exp=1709088386~hmac=5c7569936c6cec25644c98e0295c640551324a3880ac686df8bc7a3da3894eae" />
        <ProductCard name="REMERA ESSENTIAL NEGRA" description="Remera básica oversize perfecta para cualquier momento de tu vida cotidiana, desde salidas hasta tardes relajadas en casa." image="https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=826&t=st=1709087786~exp=1709088386~hmac=5c7569936c6cec25644c98e0295c640551324a3880ac686df8bc7a3da3894eae" />
        <ProductCard name="REMERA ESSENTIAL BLANCA" description="Remera básica oversize perfecta para cualquier momento de tu vida cotidiana, desde salidas hasta tardes relajadas en casa." image="https://img.freepik.com/free-psd/simple-black-men-s-tee-mockup_53876-57893.jpg?w=826&t=st=1709087786~exp=1709088386~hmac=5c7569936c6cec25644c98e0295c640551324a3880ac686df8bc7a3da3894eae" />
      </div >
    </section>
  );
};

export default Drops;