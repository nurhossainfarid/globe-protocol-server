// Dependency
const { addPondService, getAllPondService, getPondByIdService, updatePondByIdService, deletePondByIdService } = require("../services/hydrosphere.service");


// Add Pond 
exports.addPond = async (req, res) => {
    try {
        const pond = await addPondService(req.body);

        if (!pond) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to add pond'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Pond added successfully',
            data: pond,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Pond could not add successfully'
        });
    }
};

// handle all pond
exports.getAllPond = async (req, res) => {
    try {
        const ponds = await getAllPondService();

        if (!ponds) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to see all pond'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Pond show successfully',
            data: ponds,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Pond could not see successfully'
        });
    }
}

// handle get one pond
exports.getPondById = async (req, res) => {
    const { id } = req.params;
    try {
        const pond = await getPondByIdService(id);

        if (!pond) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to see all pond'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Pond show successfully',
            data: pond,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Pond could not see successfully'
        });
    }
}

// update pond by id
exports.updatePondById = async (req, res) => {
    const { id } = req.params;
    try {
        const pond = await updatePondByIdService(id, req.body);

        if (!pond) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update pond'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Pond update successfully',
            data: pond,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Pond could not update successfully'
        });
    }
}

// Delete pond by id
exports.deletePondById = async (req, res) => {
    const { id } = req.params;
    try {
        const pond = await deletePondByIdService(id);

        if (!pond) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete pond'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'pond delete successfully',
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'pond could not delete successfully'
        });
    }
}