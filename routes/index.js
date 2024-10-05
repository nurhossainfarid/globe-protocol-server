const router = require('express').Router();

const pedoshpereRoutes = require('./pedosphereRoute');
const hydrosphereRoutes = require('./hydrosphereRoute');

router.use('/api/v1/pedosphere', pedoshpereRoutes);
router.use('/api/v1/hydrosphere', hydrosphereRoutes);

// export 
module.exports = router;