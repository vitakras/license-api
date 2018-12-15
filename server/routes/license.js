const { Router } = require('express');

module.exports = (LicenseQuery) => {
  const router = Router();

  router.get('/', async (req, res) => {
    try {
      const licenses = await LicenseQuery.getAll();
      res.json(licenses);
    } catch (e) {
      res.json({ error: e });
    }
  });

  router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    try {
      const license = await LicenseQuery.getBySlug(slug);
      res.json(license);
    } catch (e) {
      res.json({ error: e });
    }
  });

  return router;
};
