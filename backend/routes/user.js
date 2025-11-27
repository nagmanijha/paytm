import express from "express";
import jwt from "jsonwebtoken";
import User from "../db.js";
import { SignInSchema, SignUpSchema } from "../schema.js";
import { JWT_SECRET } from "../config.js";

const userRouter = express.Router();

userRouter.post('/signin', async (req, res) => {
    const parsed = SignInSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (!user || user.password !== req.body.password) {
        return res.status(404).json({
            message: "Email/password is incorrect"
        });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.status(200).json({
        message: "Signed in successfully",
        token
    });
});

userRouter.post('/sign-up', async (req, res) => {

    const parsed = SignUpSchema.safeParse(req.body);

    if (!parsed.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const existingUser = await User.findOne({
        username: req.body.username
    });

    if (existingUser) {
        return res.status(411).json({
            message: "Email already exists"
        });
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    return res.status(200).json({
        message: "Signed up successfully",
        token: token
    });
});

export default userRouter;
