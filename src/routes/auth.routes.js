import express from 'express';
import AuthController from '../controllers/authController.js';

const authRouter = express.Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/Login", AuthController.login);

export default authRouter;