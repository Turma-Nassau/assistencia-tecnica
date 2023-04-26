const swagger_auto_gen = require('swagger-autogen');
const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js'];

const docs = {
    info: {
        version: "1.0.0",
        title: "assistencia-tecnica",
        description: "WEBsite para solicitação de serviços"
    },
    host: "localhost:9000",
    schemes: ['http'],
};

swagger_auto_gen(outputFile, endpointsFiles, docs);