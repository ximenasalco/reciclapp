// En desarrollo, usar el proxy de Vite. En producción, usar la variable de entorno o la URL completa
const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.DEV ? '' : 'http://localhost:3000');

/**
 * Verifica la conexión con el backend
 * @returns {Promise<Object>} Estado de la conexión
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al verificar salud del backend:', error);
    return { status: 'error', message: error.message };
  }
};

/**
 * Obtiene todos los productos del backend
 * @returns {Promise<Array>} Lista de productos con sus centros de reciclaje
 */
export const getProducts = async () => {
  try {
    const url = `${API_BASE_URL}/api/products`;
    console.log('Fetching products from:', url);
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.error || `Error al obtener productos: ${response.status} ${response.statusText}`
      );
    }
    
    const products = await response.json();
    console.log('Products received:', products.length);
    return products;
  } catch (error) {
    console.error('Error en getProducts:', error);
    // Si es un error de red, proporcionar un mensaje más útil
    if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
      throw new Error('No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo en el puerto 3000.');
    }
    throw error;
  }
};

/**
 * Obtiene un producto por su ID
 * @param {number} id - ID del producto
 * @returns {Promise<Object>} Producto con sus centros de reciclaje
 */
export const getProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error al obtener producto: ${response.statusText}`);
    }
    
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error en getProductById:', error);
    throw error;
  }
};

