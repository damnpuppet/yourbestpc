"use client";

export default function ComponentCard({ type, name, pccomponentesPrice, coolmodPrice, imageUrl }) {
  const typeLabels = {
    cpu: 'Procesador',
    gpu: 'Tarjeta gráfica',
    ram: 'Memoria RAM',
    motherboard: 'Placa base',
    storage: 'Almacenamiento',
    psu: 'Fuente de alimentación',
    case: 'Caja'
  };
  
  const bestPrice = Math.min(pccomponentesPrice, coolmodPrice);
  const bestStore = pccomponentesPrice <= coolmodPrice ? 'PcComponentes' : 'CoolMod';
  
  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="p-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/4 flex justify-center">
          <img 
            src={imageUrl || 'https://via.placeholder.com/150'} 
            alt={name} 
            className="w-32 h-32 object-contain"
          />
        </div>
        
        <div className="w-full md:w-3/4">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-sm text-violet-400 font-medium">{typeLabels[type] || type}</span>
              <h4 className="text-lg font-bold mt-1">{name}</h4>
            </div>
            <span className="bg-violet-600 text-white text-sm font-bold px-3 py-1 rounded-full">
              {bestStore}
            </span>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-400">PcComponentes</span>
              <p className="font-bold">{pccomponentesPrice.toFixed(2) }€</p>
            </div>
            
            <div className="bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-400">CoolMod</span>
              <p className="font-bold">{coolmodPrice.toFixed(2)}€</p>
            </div>
            
            <div className="bg-gray-700 px-4 py-2 rounded-lg">
              <span className="text-sm text-gray-400">Mejor precio</span>
              <p className="font-bold text-green-400">{bestPrice.toFixed(2)}€</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
