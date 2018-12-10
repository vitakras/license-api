const express = require('express');
const { License } = require('../db/models');
const LicenseQuery = require('../query/license');

const query = new LicenseQuery(License);

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const licenses = await query.getAll();
    res.json(licenses);
  } catch (e) {
    res.json({ error: e });
  }
});

module.exports = router;
