import React from "react";

const QuickPulseCard = () => {
  return (
    <div className="text-xs m-1 w-full h-full bg-transparent text-card-foreground flex flex-col gap-6 rounded-none border-none shadow-none">
      {/* HEADER */}
      <div className="px-4 pt-2">
        <h4 className="text-sm leading-none">Quick Pulse - Performance vs Target</h4>
        <p className="mt-2 text-xs text-gray-600">Variación semanal por KPI</p>
      </div>

      {/* CONTENIDO */}
      <div className="px-4 pb-4">
        {/* GRID PRINCIPAL */}
        <div className="text-xs grid grid-cols-3 gap-2 w-full">
          {/* Semana 1 */}
          <div className="text-xs text-center w-full">
            <div className="text-xs font-medium text-gray-700 mb-2">S1</div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-yellow-500 w-full">
              -5%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-green-500 w-full">
              +8%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-red-500 w-full">
              -8%
            </div>
          </div>

          {/* Semana 2 */}
          <div className="text-xs text-center w-full">
            <div className="text-xs font-medium text-gray-700 mb-2">S2</div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-yellow-500 w-full">
              +3%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-red-500 w-full">
              -13%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-green-500 w-full">
              +15%
            </div>
          </div>

          {/* Semana 3 */}
          <div className="text-xs text-center w-full">
            <div className="text-xs font-medium text-gray-700 mb-2">S3</div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-green-500 w-full">
              +12%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-yellow-500 w-full">
              -4%
            </div>
            <div className="h-8 rounded mb-1 flex items-center justify-center text-white text-xs font-medium bg-red-500 w-full">
              -12%
            </div>
          </div>
        </div>

        {/* LEYENDA */}
        <div className="flex justify-center space-x-4 mt-4 text-xs">
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-green-500 rounded"></div>
            <span>&gt; +5%</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span>±5%</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span>&lt; -5%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickPulseCard;
