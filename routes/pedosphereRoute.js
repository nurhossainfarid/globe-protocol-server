const express = require('express');
const PedoshpereController = require('../controllers/pedoshpereController');
const router = express.Router();

// module scaffolding
/**
 * Find soil by id
 * @method GET
 * @visibility private
 */
router.get('/:id', PedoshpereController.getSoilById)

/**
 * Update soil by id
 * @method PUT
 * @visibility private
 */
router.put('/:id', PedoshpereController.updateSoilById)

/**
 * Delete soil by id
 * @method DELETE
 * @visibility private
 */
router.delete('/:id',PedoshpereController.deleteSoilById)

/**
 * Add soil 
 * @method POST
 * @visibility private
 */
router.post('/', PedoshpereController.addSoil)

/**
 * Get all soil
 * @route 
 * @method GET
 * @visibility private
 */
router.get('/',PedoshpereController.getAllSoil)

// export
module.exports = router;
