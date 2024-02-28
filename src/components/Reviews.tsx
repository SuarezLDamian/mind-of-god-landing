import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
  return (
    <section id="reviews" className="px-12 py-24 grid place-items-center bg-gray-950">
      <h2 className="font-lato text-4xl md:text-5xl font-bold text-gray-200">TESTIMONIOS</h2>
      <div className="py-12">
        <ReviewCard title="Muy bueno" description="La calidad y el diseño son excelentes" />
      </div>
    </section>
  );
};

export default Reviews;