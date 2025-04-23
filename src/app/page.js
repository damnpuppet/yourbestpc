"use client";

import { useState } from 'react';

export default function Home() {
  const [budget, setBudget] = useState('');
  const [profile, setProfile] = useState('gaming');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!budget || isNaN(parseFloat(budget)) || parseFloat(budget) <= 0) {
      setError('Por favor, introduce un presupuesto válido');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // Redirigir a la página de resultados con los parámetros
      window.location.href = `/results?budget=${budget}&profile=${profile}`;
    } catch (error) {
      console.error('Error al generar configuración:', error);
      setError('Ha ocurrido un error al generar la configuración. Por favor, inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-violet-400">YourBestPC</h1>
          <p className="text-gray-300 mt-2">Configurador de presupuestos de PC personalizados</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Configura tu PC ideal</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="budget" className="block text-lg mb-2">Presupuesto máximo (€)</label>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                placeholder="Ej: 1500"
                min="300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="profile" className="block text-lg mb-2">Perfil de uso</label>
              <select
                id="profile"
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500"
                required
              >
                <option value="gaming">Gaming</option>
                <option value="average">Usuario medio</option>
                <option value="programming">Programación</option>
                <option value="rendering">Renderizado / edición</option>
                <option value="allinone">Todo en uno</option>
              </select>
            </div>
            
            {error && (
              <div className="bg-red-900 text-white p-3 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 disabled:opacity-50"
            >
              {loading ? 'Generando configuración...' : 'Generar configuración'}
            </button>
          </form>
          
          <div className="mt-8 text-gray-300 text-sm">
            <h3 className="font-bold text-lg mb-2">¿Cómo funciona?</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Introduce tu presupuesto máximo en euros</li>
              <li>Selecciona tu perfil de uso</li>
              <li>Nuestra aplicación consultará los catálogos de PcComponentes y CoolMod</li>
              <li>Compararemos los precios de cada componente</li>
              <li>Te mostraremos la mejor configuración posible para tu presupuesto</li>
            </ol>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>YourBestPC © 2025 - Comparador de precios entre PcComponentes y CoolMod</p>
        </div>
      </footer>
    </div>
  );
}
