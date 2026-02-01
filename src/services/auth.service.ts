import argon2 from "argon2";
import type { LoginUserInput, RegisterUserInput } from "../dto/user.dto";
import { UserModel } from "../models/user.model";
import jwt, { type SignOptions } from "jsonwebtoken";
import { env } from "../config/env";

export const AuthService = {
  register: async (input: RegisterUserInput) => {
    const existingUser = await UserModel.findByEmail(input.email);
    if (existingUser) throw new Error("el usuario ya esta registrado");

    const hashedPassword = await argon2.hash(input.password, {
      type: argon2.argon2id,
      memoryCost: 4096,
      timeCost: 3,
      parallelism: 1,
    });

    const newUser = await UserModel.create({
      email: input.email,
      password: hashedPassword,
      role: input.role || "user",
    });

    const { password, ...userWhitoutPassword } = newUser;
    return userWhitoutPassword;
  },
  login: async (input: LoginUserInput) => {
    const user = await UserModel.findByEmail(input.email);
    if (!user || !(await argon2.verify(user.password, input.password))) {
      throw new Error("Credenciales invalidas");
    }

    const singOptions: SignOptions = {
      expiresIn: env.JWT_EXPIRES_IN as any,
    };

    const token = jwt.sign(
      { sub: user.id, email: user.email, role: user.role },
      env.JWT_SECRET as string,
      singOptions,
    );

    return { token, user: { id: user.id, email: user.email, role: user.role } };
  },
};
