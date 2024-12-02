// ./_components/UrbanAgriDLPDebug.tsx

import { useState } from "react";
import { useContractRead, useContractWrite } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";
import { Address, Balance } from "~~/components/scaffold-eth";

export const UrbanAgriDLPDebug = () => {
  const [challengeDescription, setChallengeDescription] = useState("");
  const [solutionDescription, setSolutionDescription] = useState("");
  const [challengeId, setChallengeId] = useState("");

  const { data: deployedContractData } = useDeployedContractInfo("UrbanAgriDLP");

  const { data: challengeCount } = useContractRead({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "getChallengeCount",
  });

  const { write: createChallenge } = useContractWrite({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "createChallenge",
  });

  const { write: submitSolution } = useContractWrite({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "submitSolution",
  });

  const handleCreateChallenge = () => {
    createChallenge({ args: [challengeDescription] });
    setChallengeDescription("");
  };

  const handleSubmitSolution = () => {
    submitSolution({ args: [challengeId, solutionDescription] });
    setSolutionDescription("");
    setChallengeId("");
  };

  return (
    <div className="flex flex-col gap-y-6 lg:gap-y-8 py-8 lg:py-12 justify-center items-center">
      <div className="flex flex-col gap-y-6 lg:gap-y-8 w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center">UrbanAgriDLP Debug</h1>

        {/* Display contract info */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex">
            <div className="flex flex-col gap-1">
              <span className="font-bold">Contract Address:</span>
              <Address address={deployedContractData?.address} />
            </div>
          </div>
        </div>

        {/* Create Challenge Form */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-4 lg:py-6">
          <h2 className="text-2xl font-bold mb-4">Create New Challenge</h2>
          <div className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Challenge Description"
              value={challengeDescription}
              onChange={(e) => setChallengeDescription(e.target.value)}
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary" onClick={handleCreateChallenge}>
              Create Challenge
            </button>
          </div>
        </div>

        {/* Submit Solution Form */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-4 lg:py-6">
          <h2 className="text-2xl font-bold mb-4">Submit Solution</h2>
          <div className="flex flex-col gap-y-2">
            <input
              type="text"
              placeholder="Challenge ID"
              value={challengeId}
              onChange={(e) => setChallengeId(e.target.value)}
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Solution Description"
              value={solutionDescription}
              onChange={(e) => setSolutionDescription(e.target.value)}
              className="input input-bordered w-full"
            />
            <button className="btn btn-primary" onClick={handleSubmitSolution}>
              Submit Solution
            </button>
          </div>
        </div>

        {/* Display Statistics */}
        <div className="bg-base-100 border-base-300 border shadow-md shadow-secondary rounded-3xl px-6 lg:px-8 py-4 lg:py-6">
          <h2 className="text-2xl font-bold mb-4">Platform Statistics</h2>
          <p>Total Challenges: {challengeCount?.toString() || "Loading..."}</p>
        </div>
      </div>
    </div>
  );
};
