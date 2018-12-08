const express = require('express');

const router = express.Router();

const licenses = [
  {
    name: 'Apache license 2.0',
    slug: 'apache-2-0',
    description: 'Your Typical badboy license',
  },
];

router.get('/', (req, res) => {
  res.json(licenses);
});

module.exports = router;
