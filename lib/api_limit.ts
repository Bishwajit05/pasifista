import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

import { MAX_FREE_COUNTS } from "@/constants";

export const increaseApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return;
  }

  const userAPiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (userAPiLimit) {
    await prismadb.userApiLimit.update({
      where: { userId: userId },
      data: { count: userAPiLimit.count + 1 },
    });
  } else {
    await prismadb.userApiLimit.create({
      data: { userId: userId, count: 1 },
    });
  }
};

export const checkApiLimit = async () => {
  const { userId } = auth();
  if (!userId) {
    return false;
  }
  const userAPiLimit = await prismadb.userApiLimit.findUnique({
    where: {
      userId: userId,
    },
  });
  if (!userAPiLimit || userAPiLimit.count < MAX_FREE_COUNTS) {
    return true;
  } else {
    return false;
  }
};
