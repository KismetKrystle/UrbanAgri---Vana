import { UrbanAgriDLPDebug } from "./_components/UrbanAgriDLPDebug";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "UrbanAgriDLP Debug",
  description: "Debug and interact with your UrbanAgriDLP smart contracts",
});

const Debug: NextPage = () => {
  return (
    <>
      <UrbanAgriDLPDebug />
      <div className="text-center mt-8 bg-secondary p-10">
        <h1 className="text-4xl my-0">UrbanAgriDLP Debug</h1>
        <p className="text-neutral">
          Debug & interact with your UrbanAgriDLP contracts here.
          <br /> 
          Manage challenges, solutions, and rewards for urban agriculture initiatives.
        </p>
      </div>
    </>
  );
};

export default Debug;
