// require("dotenv").config();
import express from 'express';
const router = express.Router();
import { apiController } from '../controller/api.controller';

// const { authUserWithEmailAndPassword } = require('../src/logic/validator');

router.get('/', apiController.welcome);
router.get('/productos',apiController.listarProductos );
router.post('/productos/crear', apiController.crearProductos);
router.post('/productos/eliminar',apiController.eliminarProductos);
router.put('/productos/actualizar',apiController.actualizarProductos);

export default router;
