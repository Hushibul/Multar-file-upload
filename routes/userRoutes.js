import { Router } from "express";

import { createUser, findAllUsers } from "../controllers/userController.js";

import upload from "../middlewares/multer.js";

const router = Router();

router.get("/users", findAllUsers);
// router.get("/users/:id", findUser);
router.post("/users", upload.single("avatar"), createUser);
// router.put("/users/:id", updateUser);
// router.delete("/users/:id", deleteUser);

export default router;
