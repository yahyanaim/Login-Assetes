const express = require("express");
const router = express.Router()

// Import Route auth
const authRoute = require('./auth');

// Import Route users
const usersRoute = require('./users');

// Import Route users
const profileRoute = require('./profile');

// Route Midllewares
router.use("/users", usersRoute);
router.use("/auth", authRoute);
router.use("/profile", profileRoute);


module.exports = router
