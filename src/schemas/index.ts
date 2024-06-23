import { z } from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .regex(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
      "Password must contain at least one uppercase letter, lowercase letter, number, and special character"
    ),
});

export const RegisterSchema = z
  .object({
    firstName: z
      .string({
        required_error: "First name is required",
      })
      .trim()
      .min(1, "First name is required")
      .regex(/^[a-zA-Z]+$/, "First name must include only character(s)"),
    lastName: z
      .string({
        required_error: "Last name is required",
      })
      .trim()
      .min(1, "Last name is required")
      .regex(/^[a-zA-Z]+$/, "Last name must include only character(s)"),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .regex(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/,
        "Password must contain at least one uppercase letter, lowercase letter, number, and special character"
      ),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password must match",
    path: ["confirmPassword"],
  });
