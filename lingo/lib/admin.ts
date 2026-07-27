import { auth } from "@clerk/nextjs/server";

const adminIds = ["user_3GSxqTcvobzODzn96o26t4BUpjz"];

export const getIsAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
