import { withIronSession } from "next-iron-session";

export function withSession(handler) {
  return withIronSession(handler, {
    cookieName: "menchico",
    password: 'Zzjk62ZRhEBLa4Eqty1puBvRA7ZHcoEL',
    cookieOptions: {
      secure: process.env.NODE_ENV == "production",
      httpOnly: process.env.NODE_ENV == "production",
    },
  });
}
