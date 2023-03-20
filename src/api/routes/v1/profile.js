const express = require('express');
const profileController = require('../../controllers/profileController')

const router = express.Router();

router.get('/', profileController.profile_get);
router.put("/:id", profileController.profile_udpate);
router.delete("/:id", profileController.profile_destroy);

module.exports = router;
