import React from "react";

export default function Map(props) {
  // Validación exhaustiva de props
  if (!props) {
    return (
      <div className="h-full w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Error: Props no definidos</p>
      </div>
    );
  }

  // Función helper para extraer coordenadas de forma segura
  const getCoordinates = (center) => {
    if (!center || typeof center !== 'object') return null;
    
    let lat = null;
    let lng = null;
    
    if (center.lat != null) {
      lat = center.lat;
    } else if (center.position && Array.isArray(center.position) && center.position.length >= 1) {
      lat = center.position[0];
    }
    
    if (center.lng != null) {
      lng = center.lng;
    } else if (center.position && Array.isArray(center.position) && center.position.length >= 2) {
      lng = center.position[1];
    }
    
    if (lat != null && lng != null && !isNaN(Number(lat)) && !isNaN(Number(lng))) {
      return { lat: Number(lat), lng: Number(lng) };
    }
    
    return null;
  };

  // Extraer y validar props de forma segura
  let centers = [];
  try {
    if (props.centers !== undefined && props.centers !== null) {
      if (Array.isArray(props.centers)) {
        centers = props.centers;
      }
    }
  } catch (error) {
    console.error("Error procesando centers:", error);
    centers = [];
  }
  
  // Construir URL de Google Maps embebido
  // Si hay centros con coordenadas, usarlas; si no, usar ubicación por defecto
  let embedUrl = "https://www.google.com/maps?q=19.432608,-99.133209&output=embed&zoom=14";
  
  // Si hay centros con coordenadas, construir URL con esas coordenadas
  try {
    if (Array.isArray(centers) && centers.length > 0) {
      // Buscar el primer centro con coordenadas válidas
      for (let i = 0; i < centers.length; i++) {
        const coords = getCoordinates(centers[i]);
        if (coords) {
          embedUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lng}&output=embed&zoom=14`;
          break;
        }
      }
    }
  } catch (error) {
    console.error("Error construyendo URL del mapa:", error);
    // Usar URL por defecto si hay error
  }

  // Usar iframe de Google Maps embebido - más confiable y sin necesidad de API key
  return (
    <div className="h-full w-full rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
        title="Mapa de centros de reciclaje"
      />
    </div>
  );
}
