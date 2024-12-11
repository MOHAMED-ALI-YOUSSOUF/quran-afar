import React from 'react';

export function About() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8 text-center">À propos</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1585036156171-384164a8c675?auto=format&fit=crop&w=800&q=80"
              alt="Mosquée"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3">
            <p className="text-gray-700 leading-relaxed mb-4">
              Sheikh Mohamed Hassan a consacré de nombreuses années à la traduction méticuleuse 
              du Saint Coran en langue afar. Ce projet représente un travail important pour 
              la communauté afare, permettant une meilleure compréhension des enseignements 
              sacrés dans leur langue maternelle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Chaque verset a été traduit avec le plus grand soin, en respectant à la fois 
              le sens originel du texte sacré et les subtilités de la langue afare. Les 
              enregistrements audio permettent également aux auditeurs de profiter d'une 
              récitation claire et authentique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}