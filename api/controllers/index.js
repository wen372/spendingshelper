const express = require('express');
const router = express.Router();


// Load each controller
const appConfigController = require('./appConfig.js');
const authController = require('./auth.js');

// const postsController = require('./posts.js');
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/application-configuration', appConfigController);

// router.use('/posts', postsController);


module.exports = router;
