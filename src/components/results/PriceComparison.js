"use client";

export default function PriceComparison({ pccomponentesTotal, coolmodTotal, bestIndividualTotal, savings, bestStore }) {
  const storeLabels = {
    pccomponentes: 'PcComponentes',
    coolmod: 'CoolMod'
  };
  
  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-bold mb-4">Comparativa de precios</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">PcComponentes</h4>
          <p className="text-2xl font-bold">{pccomponentesTotal.toFixed(2)}€</p>
          <p className="text-sm text-gray-400 mt-1">PC montado y enviado</p>
        </div>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">CoolMod</h4>
          <p className="text-2xl font-bold">{coolmodTotal.toFixed(2)}€</p>
          <p className="text-sm text-gray-400 mt-1">PC montado y enviado</p>
        </div>
        
        <div className="bg-violet-900 p-4 rounded-lg">
          <h4 className="text-lg font-medium mb-2">Mejor opción</h4>
          <p className="text-2xl font-bold">{bestIndividualTotal.toFixed(2)}€</p>
          <p className="text-sm text-gray-400 mt-1">Comprando componentes por separado</p>
        </div>
      </div>
      
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h4 className="text-lg font-medium">Ahorro estimado</h4>
            <p className="text-sm text-gray-400">Comprando cada componente en la tienda más barata</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-400">{savings.toFixed(2)}€</p>
            <p className="text-sm text-gray-400">vs. {storeLabels[bestStore] || 'mejor tienda'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
