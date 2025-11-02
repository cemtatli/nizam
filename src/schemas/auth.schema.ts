import { z } from "zod";

export const authSchema = z.object({
  username: z
    .string()
    .min(3, "Kullanıcı adı en az 3 karakter olmalı")
    .regex(/^[a-zA-Z0-9_]+$/, "Sadece harf, rakam ve alt çizgi kullanılabilir"),
  password: z.string().min(6, "Şifre en az 6 karakter olmalı")
});

export type AuthFormValues = z.infer<typeof authSchema>;
