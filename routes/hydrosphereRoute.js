const express = require('express');
const HydrosphereController = require('../controllers/hydrosphereController');
const router = express.Router();

// module scaffolding
/**
 * Find pond by id
 * @method GET
 * @visibility private
 */
router.get('/:id', HydrosphereController.getPondById)

/**
 * Update pond by id
 * @method PUT
 * @visibility private
 */
router.put('/:id', HydrosphereController.updatePondById)

/**
 * Delete pond by id
 * @method DELETE
 * @visibility private
 */
router.delete('/:id',HydrosphereController.deletePondById)

/**
 * Add pond 
 * @method POST
 * @visibility private
 */
router.post('/', HydrosphereController.addPond)

/**
 * Get all pond
 * @route 
 * @method GET
 * @visibility private
 */
router.get('/',HydrosphereController.getAllPond)

// export
module.exports = router;