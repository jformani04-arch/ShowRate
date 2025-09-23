import express from "express";
import { loginUser, signupUser, checkLogin, logoutUser } from "../controllers/authController.js";

const router = express.Router();

// Public routes
router.post("/login", loginUser);
router.post("/signup", signupUser);

router.get("/me", checkLogin);

router.post("/logout", logoutUser)

export default router;
