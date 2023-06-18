import { Metadata, NextPage } from "next";
import { getServerSession } from "next-auth";
import { SessionContext } from "next-auth/react";
import { authConfig } from "../../../configs/auth";

export const metadata: Metadata = {
  title: "Profile | next app",
};

const Profile: NextPage = async ({}) => {
  const session = await getServerSession(authConfig);
  return (
    <>
      {session?.user?.image && (
        <img
          className="h-40 w-40 rounded-full"
          src={session.user.image}
          alt=""
        />
      )}
      <div className="text-3xl font-extrabold">
        Hello, {session?.user?.name}
      </div>
    </>
  );
};

export default Profile;
