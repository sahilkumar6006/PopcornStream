import { Router, RequestHandler } from 'express';
import { registerUser, loginUser, logoutUser, getUser, updateUser, deleteUser } from '../controller/user-controller';

const router = Router();

router.post('/register', registerUser as unknown as RequestHandler);
router.post('/login', loginUser as unknown as RequestHandler);
router.post('/logout', logoutUser as unknown as RequestHandler);
router.get('/get-user', getUser as unknown as RequestHandler);
router.put('/update-user', updateUser as unknown as RequestHandler);
router.delete('/delete-user', deleteUser as unknown as RequestHandler);

export default router;
