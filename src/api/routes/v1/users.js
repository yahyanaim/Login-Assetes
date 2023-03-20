const express = require('express');
const userController = require('../../controllers/userController')

const router = express.Router();

router.get("/", userController.users_getAll);
router.get("/:id", userController.user_getById);
router.put("/:id", userController.user_udpate);
router.delete("/:id", userController.user_destroy);

module.exports = router;
