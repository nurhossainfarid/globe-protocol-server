// Dependency
const { addSoilService, getAllSoilService, getSoilByIdService, updateSoilByIdService, deleteSoilByIdService } = require("../services/pedosphere.service")

// add soil 
exports.addSoil = async (req, res) => {
    try {
        const soil = await addSoilService(req.body);

        if (!soil) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to add soil'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Soil added successfully',
            data: soil,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Soil could not add successfully'
        });
    }
};

// handle all soil
exports.getAllSoil = async (req, res) => {
    try {
        const soils = await getAllSoilService();

        if (!soils) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to see all soil'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Soil show successfully',
            data: soils,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Soil could not see successfully'
        });
    }
}

// handle get one soil
exports.getSoilById = async (req, res) => {
    const { id } = req.params;
    try {
        const soil = await getSoilByIdService(id);

        if (!soil) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to see all soil'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Soil show successfully',
            data: soil,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Soil could not see successfully'
        });
    }
}

// update soil by id
exports.updateSoilById = async (req, res) => {
    const { id } = req.params;
    try {
        const soil = await updateSoilByIdService(id, req.body);

        if (!soil) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to update soil'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Soil update successfully',
            data: soil,
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Soil could not update successfully'
        });
    }
}

// Delete soil by id
exports.deleteSoilById = async (req, res) => {
    const { id } = req.params;
    try {
        const soil = await deleteSoilByIdService(id);

        if (!soil) {
            return res.status(400).json({
                status: 'Failed',
                error: 'Failed to delete soil'
            })
        }
        res.status(200).json({
            status: 'Success',
            message: 'Soil delete successfully',
        })
    } catch (error) {
        res.status(404).json({
            status: 'Failed',
            message: 'Soil could not delete successfully'
        });
    }
}