import { z } from "zod";

export const userSchema = z.object({
    username: z
        .string()
        .trim()
        .min(6, 'Username must be at least 6 characters')
        .max(30, 'Username must be at most 30 characters')
        .regex(/^[A-Za-z ]+$/, 'Username can only contain letters and spaces (no numbers or special characters)'),

    email: z
        .string()
        .trim()
        .email('Invalid email')
        .refine((email) => {
            const localPart = email.split('@')[0];
            if (/^[0-9]/.test(localPart)) return false;  // cannot start with number
            if (!/\./.test(localPart)) return false;    // must contain dot
            return true;
        }, {
            message: 'Email local part cannot start with a number and must include at least one dot (.)',
        }),

    phonenumber: z
        .string()
        .trim()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be at most 15 digits')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits')
        .refine(val => !/^0{2,}/.test(val), {
            message: 'Phone number cannot start with multiple zeros',
        }),
});

export default userSchema;
