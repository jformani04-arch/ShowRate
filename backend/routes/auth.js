import express from 'express';

//functions are handled in a controller file for cleaner code
import { loginUser, signupUser } from "../controllers/authController.js";

//endpoints for the frontend user sign in: handled in the relative controller
router.post('/login', loginUser);
router.post('/signUp', signupUser)

export default router;
