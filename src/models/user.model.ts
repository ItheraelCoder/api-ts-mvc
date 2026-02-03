import { users, type NewUser, type User } from "../db/schema";
import db from "../libs/db";
import { eq } from "drizzle-orm";

export const UserModel = {
  findByEmail: async (email: string): Promise<User | undefined> => {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  },
  findById: async (id: string): Promise<User | undefined> => {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  },

  findAll: async (): Promise<User[]> => {
    return await db.select().from(users);
  },
  create: async (data: NewUser): Promise<User> => {
    const [newUser] = await db.insert(users).values(data).returning();
    if (!newUser) {
      throw new Error("Usuario no creado");
    }
    return newUser;
  },
  delete: async (id: string): Promise<void> => {
    await db.delete(users).where(eq(users.id, id));
  },
};
