import { Router } from 'express';
import * as authController from '../controllers/auth.controller.ts';
import { authenticate } from './../middlewares/auth.middleware.ts';
import { validate } from "./../middlewares/validation.middleware.ts";
import {
  signupSchema,
  loginSchema,
  googleLoginSchema,
  refreshTokenSchema,
  adminSignupSchema
} from "./../middlewares/validation.middleware.ts";

const router = Router();

router.post('/signup',validate(signupSchema), authController.signupHandler);
router.post('/login',validate(loginSchema), authController.loginHandler);
router.post('/google',validate(googleLoginSchema), authController.googleLoginHandler);
router.post('/refresh',validate(refreshTokenSchema), authController.refreshTokenHandler);
router.post('/logout', authController.logout);

router.get('/me', authenticate, authController.getCurrentUser);

router.post("/admin/signup",validate(adminSignupSchema) , authController.adminSignupHandler);

export default router;