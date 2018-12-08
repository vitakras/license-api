const express = require('express');
const { License } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const licenses = await License.findAll({
    attributes: [
      'name', 'slug', 'description',
    ],
  });
  res.json(licenses);
});

module.exports = router;
