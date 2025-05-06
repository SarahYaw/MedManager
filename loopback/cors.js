module.exports = function(CORS) {
    const corsConfig = {
      origin: 'localhost:3000',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type']
    };
    CORS.configure(corsConfig);
  };