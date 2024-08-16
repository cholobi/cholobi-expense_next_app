import { currentUser } from "@clerk/nextjs/server";
import { db } from "./db";
const checkUser = async () => {
  const user = await currentUser();


  if (!user) {
    return null;
  }
  const loggedInUser = await db.user.findUnique({
    where: {
      cleckUserId: user.id,
    },
  });
};
