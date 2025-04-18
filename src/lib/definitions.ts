import {z} from "zod"
import {ROLE,User,Session} from "@prisma/client"

export {ROLE}
export type {User, Session};

export const SignupFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(8, { message: 'Be at least 8 characters long' }).regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' }).regex(/[0-9]/, { message: 'Contain at least one number.' }).regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.'}).trim(),
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long.' })
        .trim(),
    address: z
        .string()
        .min(10, { message: 'Address must be at least 10 characters long.' })
        .trim(),
    role : z.nativeEnum(ROLE)
})

export type FormState =
    | {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        address?: string[],
        role?: string[]
    }
    message?: string
}
    | undefined
