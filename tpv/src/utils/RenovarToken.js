import * as logger from './logger';

const renovarToken = async (setAccessToken) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/refresh-token`, {
      method: 'POST',
      credentials: 'include', // Necesario para enviar cookies httpOnly
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Esto ocurre cuando no hay sesión iniciada (lo cual es normal)
        console.warn('[TPV ⚠️] No hay sesión activa para renovar el token.');
        return null;
      }
      throw new Error('No se pudo renovar el token.');
    }

    const data = await response.json();

    if (setAccessToken) {
      setAccessToken(data.accessToken);
    }

    return data.accessToken;
  } catch (error) {
    logger.error('[TPV ❌] Error al renovar el token:', error);
    return null;
  }
};

export default renovarToken;
