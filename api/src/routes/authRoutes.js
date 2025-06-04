import { Router } from 'express';
import { check, validationResult } from 'express-validator';
const router = Router();
import {
  login,
  registro,
  renovarToken,
  logout,
  obtenerUsuario,
} from '../controllers/authController.js';
import { logAndNotifyLogin } from '../middlewares/failedSesionMiddleware.js';
import rateLimit from 'express-rate-limit';

// Middleware para registrar intentos de inicio de sesión
const logIntentoLogin = (req, res, next) => {
  next();
};

// Ruta de inicio de sesión
router.post(
  '/login',
  logIntentoLogin,
  logAndNotifyLogin,
  [check('password', 'La contraseña es obligatoria').notEmpty()],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  login
);

router.get('/me/me', obtenerUsuario);

// Ruta de registro de usuario
router.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').notEmpty(),
    check(
      'password',
      'La contraseña debe tener al menos 6 caracteres'
    ).isLength({ min: 6 }),
    check('role', 'El rol debe ser admin, camarero o cocinero')
      .optional()
      .isIn(['admin', 'camarero', 'cocinero']),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  registro
);

// Endpoint para renovar token
router.post('/refresh-token', renovarToken);

// Endpoint para cerrar sesión
router.post('/logout', logout);

export default router;
