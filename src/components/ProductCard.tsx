import React from 'react';

interface CardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard = (props: CardProps) => {
  return (
    <div className="card md:w-96 bg-slate-500 shadow-xl md:p-4">
      <figure><img className="size-2/4 md:size-full" src={props.image} alt="T-shirt" /></figure>
      <div className="card-body">
        <h2 className="card-title text-slate-900">{props.name}</h2>
        <p className="font-serif text-gray-200">{props.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Ver en la tienda</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;