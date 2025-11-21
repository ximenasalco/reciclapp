import React from "react";

export default function LeafDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Hoja 1 - Superior izquierda - Hoja de arce */}
      <svg
        className="absolute top-10 left-5 w-32 h-32 opacity-12 text-green-600 transform -rotate-12"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,5 Q30,20 20,40 Q15,55 20,70 Q25,80 35,85 Q45,90 55,88 Q65,90 75,85 Q85,80 90,70 Q95,55 90,40 Q80,20 60,5 Q55,2 50,5 Z" />
        <path d="M50,5 L50,95" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>

      {/* Hoja 2 - Superior derecha - Hoja ovalada */}
      <svg
        className="absolute top-20 right-10 w-40 h-40 opacity-10 text-green-500 transform rotate-45"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 Q35,20 25,35 Q20,50 25,65 Q30,75 40,80 Q50,85 60,80 Q70,75 75,65 Q80,50 75,35 Q65,20 50,10 Z" />
        <path d="M50,10 L50,85" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>

      {/* Hoja 3 - Centro izquierda - Hoja lanceolada */}
      <svg
        className="absolute top-1/3 left-8 w-36 h-36 opacity-15 text-green-400 transform rotate-25"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,8 Q35,25 28,45 Q25,60 30,75 Q35,85 45,88 Q55,90 65,88 Q75,85 80,75 Q85,60 82,45 Q75,25 60,8 Q55,5 50,8 Z" />
        <path d="M50,8 L50,88" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      </svg>

      {/* Hoja 4 - Centro derecha - Hoja redondeada */}
      <svg
        className="absolute top-1/2 right-5 w-28 h-28 opacity-12 text-green-600 transform -rotate-30"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,12 Q32,25 25,42 Q22,55 28,68 Q35,78 45,82 Q55,85 65,82 Q75,78 82,68 Q88,55 85,42 Q78,25 60,12 Q55,10 50,12 Z" />
      </svg>

      {/* Hoja 5 - Inferior izquierda - Hoja grande */}
      <svg
        className="absolute bottom-20 left-12 w-44 h-44 opacity-10 text-green-500 transform rotate-15"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,8 Q28,25 18,45 Q12,62 20,78 Q28,90 45,92 Q62,90 80,78 Q88,62 82,45 Q72,25 50,8 Z" />
        <path d="M50,8 L50,92" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      </svg>

      {/* Hoja 6 - Inferior derecha - Hoja pequeña */}
      <svg
        className="absolute bottom-32 right-8 w-32 h-32 opacity-12 text-green-400 transform -rotate-20"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 Q35,22 28,38 Q24,52 30,68 Q38,82 52,88 Q68,82 76,68 Q82,52 78,38 Q71,22 56,10 Q53,8 50,10 Z" />
      </svg>

      {/* Hojas pequeñas decorativas */}
      <svg
        className="absolute top-40 left-1/4 w-20 h-20 opacity-10 text-green-300 transform rotate-35"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 Q40,18 35,30 Q32,40 36,52 Q42,62 50,65 Q58,62 64,52 Q68,40 65,30 Q60,18 50,10 Z" />
      </svg>

      <svg
        className="absolute top-2/3 right-1/4 w-24 h-24 opacity-11 text-green-400 transform -rotate-25"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,12 Q38,22 32,36 Q28,48 33,60 Q40,70 50,73 Q60,70 67,60 Q72,48 68,36 Q62,22 50,12 Z" />
      </svg>

      <svg
        className="absolute bottom-40 left-1/3 w-18 h-18 opacity-9 text-green-500 transform rotate-40"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 Q42,16 38,28 Q35,38 38,48 Q42,56 50,58 Q58,56 62,48 Q65,38 62,28 Q58,16 50,10 Z" />
      </svg>

      {/* Hojas adicionales para más densidad */}
      <svg
        className="absolute top-60 right-1/3 w-22 h-22 opacity-8 text-green-300 transform rotate-50"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,10 Q42,18 36,30 Q32,42 36,54 Q42,64 50,66 Q58,64 64,54 Q68,42 64,30 Q58,18 50,10 Z" />
      </svg>

      <svg
        className="absolute bottom-60 left-1/4 w-26 h-26 opacity-9 text-green-400 transform -rotate-15"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <path d="M50,12 Q40,22 34,36 Q30,48 35,60 Q42,70 50,72 Q58,70 65,60 Q70,48 66,36 Q60,22 50,12 Z" />
      </svg>
    </div>
  );
}

