import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const user = await currentUser();

  if (!user) {
    return <div>Please log in to continue.</div>;
  }

  // Ensure the user exists in Prisma
  let loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    loggedInUser = await prisma.user.create({
      data: {
        name: user.fullName || "Unknown User",
        clerkUserId: user.id,
        email: user.emailAddresses[0].emailAddress,
        imageUrl: user.imageUrl || "",
      },
    });
  }

  return <div>{children}</div>;
};

export default Layout;
