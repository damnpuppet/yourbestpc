"use client";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ComponentCard from '../../components/results/ComponentCard';
import PriceComparison from '../../components/results/PriceComparison';

export default function Results() {
  const searchParams = useSearchParams();
  const budget = searchParams.get('budget');
  const profile = searchParams.get('profile');
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    const fetchConfiguration = async () => {
      try {
        // En un entorno real, esto llamaría a la API para obtener la configuración
        // Por ahora, simulamos una respuesta
        setTimeout(() => {
          const mockConfiguration = {
            budget: parseFloat(budget),
            profile,
            components: {
              cpu: {
                name: 'AMD Ryzen 7 5800X',
                price: { pccomponentes: 289.90, coolmod: 299.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/32/328473/1101-amd-ryzen-7-5800x-38-ghz.jpg'
              },
              gpu: {
                name: 'NVIDIA GeForce RTX 3070',
                price: { pccomponentes: 549.90, coolmod: 539.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/35/359160/1681-gigabyte-geforce-rtx-3070-gaming-oc-8gb-gddr6.jpg'
              },
              ram: {
                name: 'Corsair Vengeance RGB Pro 32GB DDR4 3200MHz',
                price: { pccomponentes: 129.90, coolmod: 134.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/16/164822/corsair-vengeance-rgb-pro-ddr4-3200-pc4-25600-32gb-2x16gb-cl16.jpg'
              },
              motherboard: {
                name: 'MSI MAG B550 TOMAHAWK',
                price: { pccomponentes: 169.90, coolmod: 174.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/30/302255/1156-msi-mag-b550-tomahawk.jpg'
              },
              storage: {
                name: 'Samsung 970 EVO Plus 1TB SSD NVMe M.2',
                price: { pccomponentes: 119.90, coolmod: 124.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/19/199866/samsung-970-evo-plus-1tb-ssd-nvme-m2.jpg'
              },
              psu: {
                name: 'Corsair RM750 750W 80 Plus Gold Full Modular',
                price: { pccomponentes: 109.90, coolmod: 114.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/21/213019/corsair-rm750-750w-80-plus-gold-full-modular.jpg'
              },
              case: {
                name: 'NZXT H510 Negra',
                price: { pccomponentes: 79.90, coolmod: 84.95 },
                imageUrl: 'https://thumb.pccomponentes.com/w-300-300/articles/22/229636/1.jpg'
              }
            },
            totalPrice: {
              pccomponentes: 1449.30,
              coolmod: 1474.65,
              bestIndividual: 1439.30
            },
            savings: 35.35,
            bestStore: 'pccomponentes'
          };
          
          setConfiguration(mockConfiguration) ;
          setLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Error al obtener configuración:', error);
        setError('Ha ocurrido un error al generar la configuración. Por favor, inténtalo de nuevo.');
        setLoading(false);
      }
    };

    if (budget && profile) {
      fetchConfiguration();
    } else {
      setError('Parámetros de búsqueda inválidos');
      setLoading(false);
    }
  }, [budget, profile]);

  const handleExportPDF = () => {
    alert('Función de exportación a PDF implementada en la versión completa');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Generando tu configuración ideal...</h2>
          <p className="text-gray-400">Estamos buscando los mejores componentes para tu presupuesto de {budget}€</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-500">Error</h2>
          <p className="text-gray-400">{error}</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-6 bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-violet-400">YourBestPC</h1>
          <p className="text-gray-300 mt-2">Configurador de presupuestos de PC personalizados</p>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Tu configuración ideal</h2>
            
            <div className="mb-6">
              <p className="text-lg">
                <span className="text-gray-400">Presupuesto:</span> {budget}€
              </p>
              <p className="text-lg">
                <span className="text-gray-400">Perfil:</span> {profile === 'gaming' ? 'Gaming' : 
                                                              profile === 'average' ? 'Usuario medio' : 
                                                              profile === 'programming' ? 'Programación' : 
                                                              profile === 'rendering' ? 'Renderizado / edición' : 
                                                              'Todo en uno'}
              </p>
            </div>
            
            <PriceComparison 
              pccomponentesTotal={configuration?.totalPrice.pccomponentes} 
              coolmodTotal={configuration?.totalPrice.coolmod} 
              bestIndividualTotal={configuration?.totalPrice.bestIndividual}
              savings={configuration?.savings}
              bestStore={configuration?.bestStore}
            />
            
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleExportPDF}
                className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Exportar como PDF
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Componentes seleccionados</h3>
            
            {configuration && Object.entries(configuration.components).map(([type, component]) => (
              <ComponentCard 
                key={type}
                type={type}
                name={component.name}
                pccomponentesPrice={component.price.pccomponentes}
                coolmodPrice={component.price.coolmod}
                imageUrl={component.imageUrl}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Volver al inicio
            </button>
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
