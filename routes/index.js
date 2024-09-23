const router = require('express').Router();

const pedoshpereRoutes = require('./pedoshpereRoute')

router.use('/api/v1/pedosphere', pedoshpereRoutes);

// export 
module.exports = router;