import { Router } from "express";
import UserController from "../controllers/UserController";

const userRouter = Router();

userRouter.get('/', UserController.list);
userRouter.post('/', UserController.create);
userRouter.patch('/:id', UserController.changeOccupation);
userRouter.delete('/:id', UserController.remove);

export default userRouter;