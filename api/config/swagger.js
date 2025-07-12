// config/swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API TPV Restaurante',
    version: '1.0.0',
    description: 'Documentación de la API del sistema TPV para restaurantes',
  },
  servers: [
    {
      url: 'http://localhost:3000/api/v1',
      description: 'Servidor local',
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js', './src/controllers/*.js'], // Aquí defines dónde están tus comentarios JSDoc
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
