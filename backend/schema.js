import {z} from "zod"

export const SignInSchema = z.object({
    username: z.string().email(),
    password: z.string()
})

export const SignUpSchema = z.object({
    username: z.string().email(),
	firstName: z.string(),
	lastName: z.string(),
	password: z.string()
})

