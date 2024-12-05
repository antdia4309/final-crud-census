const express = require('express');
const censusRoute = express.Router();
const mongoose = require('mongoose');
let Census = require('../model/Census');
 
// Get all Census
censusRoute.route('/').get((req, res) => {
    Census.find().then((response) => {
      res.status(200).json(response);
    })
    .catch((error) => {
      console.error(`Could not get census: ${error}`);
  })
})

// Get a single census by ID
censusRoute.route('/get-census/:id').get(async (req, res) => {
  const censusId = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(censusId)) {
    return res.status(400).send({ message: 'Invalid Census ID format' });
  }

  try {
    const census = await Census.findById(censusId);

    if (!census) {
      return res.status(404).send({ message: 'Census record not found' });
    }

    res.status(200).json(census);
  } catch (error) {
    console.error('Error fetching census record:', error);
    res.status(500).send({ message: 'Error fetching census record', error });
  }
});

// Add a census
censusRoute.route('/add-census').post((req, res) => {
  Census.create(req.body).then(() => {
    console.log('Census added successfully.');
    res.status(200);
  })
  .catch((error) => {
    console.error(`Could not save census: ${error}`);
  })
})

// Update a census
censusRoute.route('/update-census/:id').put(async (req, res) => {
  const censusId = req.params.id;

  try {
    console.log('Updating census with ID:', censusId, 'Payload:', req.body);

    const updatedCensus = await Census.findByIdAndUpdate(censusId, { $set: req.body }, { new: true });

    if (!updatedCensus) {
      return res.status(404).send({ message: 'Census not found for update' });
    }

    console.log('Census updated successfully:', updatedCensus);
    res.status(200).json(updatedCensus);
  } catch (err) {
    console.error('Error updating census:', err);
    res.status(500).send({ message: 'Error updating census', error: err});
  }
});

// Delete a census
censusRoute.route('/delete-census/:id').delete(async (req, res) => {
  const censusId = req.params.id;

  try {
    const deletedCensus = await Census.findByIdAndDelete(censusId);

    if (!deletedCensus) {
      return res.status(404).send({ message: 'Census not found for deletion' });
    }

    console.log('Census deleted successfully:', deletedCensus);
    res.status(200).send('Book deleted successfully.');    
  } catch (err) {
    console.error('Error deleting census:', err);
    res.status(500).send('Error deleting census.');
  }
});

module.exports = censusRoute;