const carouselRouter = require('./carousel');
// const homeRoutes = require('./home');
// const sheduleRoutes = require('./shedule');
// const galleryRoutes = require('./gallery');

const setupRoutes = (app) => {
  app.use('/carousel', carouselRouter);
  // app.use('/home', homeRoutes);
  // app.use('/shedule', sheduleRoutes);
  // app.use('/gallerie', galleryRoutes);
};

module.exports = {
  setupRoutes,
};
