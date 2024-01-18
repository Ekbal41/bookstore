"use server";
import DB from "@/db/client";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

export const signJWT = async (
  payload: { sub: string },
  options: { exp: string }
) => {
  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET_KEY);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime(options.exp)
      .setIssuedAt()
      .setSubject(payload.sub)
      .sign(secret);
  } catch (error) {
    throw error;
  }
};
export const verifyJWT = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET_KEY)
      )
    ).payload as T;
  } catch (error) {
    console.log(error);
    // cookies().set("token", "", { maxAge: 0 });
    throw new Error("Your token has expired.");
  }
};
export async function isAuthenticatedUser() {
  const token = cookies()?.get("token");
  if (token) {
    const { sub } = await verifyJWT<{ sub: string }>(token.value);
    if (sub) {
      return sub;
    }
    return null;
  }
  return null;
}
export async function logOut() {
  cookies().set("token", "", { maxAge: 0 });
}
export async function createUser(email: string, password: string) {
  const user = await DB.user.create({
    data: {
      email,
      password,
    },
  });
  if (user) {
    return {
      status: true,
      message: "User created successfully",
    };
  }
  return {
    status: false,
    message: "User creation failed",
  };
}
export async function loginUser(email: string, password: string) {
  const user = await DB.user.findFirst({
    where: {
      email,
      password,
    },
  });
  if (user) {
    const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";
    const token = await signJWT(
      { sub: user.id.toString() },
      { exp: `${JWT_EXPIRES_IN}m` }
    );
    const tokenMaxAge = parseInt(JWT_EXPIRES_IN) * 60;
    const cookieOptions = {
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV !== "development",
      maxAge: tokenMaxAge,
    };
    cookies().set(cookieOptions);
    return {
      status: true,
      message: "User logged in successfully",
    };
  }
  return {
    status: false,
    message: "User login failed",
  };
}
