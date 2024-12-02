"use client";

import { useEffect, useState } from "react";
import { PaginationButton, SearchBar } from "./_components";
import type { NextPage } from "next";
import { hardhat } from "viem/chains";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { notification } from "~~/utils/scaffold-eth";
import { useContractRead } from "wagmi";
import { useDeployedContractInfo } from "~~/hooks/scaffold-eth";

// New components for UrbanAgriDLP
const ChallengesList = ({ challenges }: { challenges: any[] }) => (
  <div>
    <h2>Challenges</h2>
    {challenges.map((challenge, index) => (
      <div key={index}>
        <h3>{challenge.description}</h3>
        <p>Creator: {challenge.creator}</p>
        <p>Solutions: {challenge.solutionCount.toString()}</p>
      </div>
    ))}
  </div>
);

const UrbanAgriDLP: NextPage = () => {
  const { targetNetwork } = useTargetNetwork();
  const [isLocalNetwork, setIsLocalNetwork] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [challenges, setChallenges] = useState<any[]>([]);

  const { data: deployedContractData } = useDeployedContractInfo("UrbanAgriDLP");

  const { data: challengeCount } = useContractRead({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "getChallengeCount",
  });

  const { data: challengeData } = useContractRead({
    address: deployedContractData?.address,
    abi: deployedContractData?.abi,
    functionName: "getChallenge",
    args: [currentPage],
  });

  useEffect(() => {
    if (challengeData) {
      setChallenges(prevChallenges => [...prevChallenges, challengeData]);
    }
  }, [challengeData]);

  useEffect(() => {
    if (targetNetwork.id !== hardhat.id) {
      setIsLocalNetwork(false);
    }
  }, [targetNetwork.id]);

  useEffect(() => {
    if (targetNetwork.id === hardhat.id && hasError) {
      setHasError(true);
    }
  }, [targetNetwork.id, hasError]);

  useEffect(() => {
    if (!isLocalNetwork) {
      notification.error(
        <>
          <p className="font-bold mt-0 mb-1">
            <code className="italic bg-base-300 text-base font-bold"> targetNetwork </code> is not localhost
          </p>
          <p className="m-0">
            - You are on <code className="italic bg-base-300 text-base font-bold">{targetNetwork.name}</code>. This
            explorer is only for <code className="italic bg-base-300 text-base font-bold">localhost</code>.
          </p>
          <p className="mt-1 break-normal">
            - You can use{" "}
            <a className="text-accent" href={targetNetwork.blockExplorers?.default.url}>
              {targetNetwork.blockExplorers?.default.name}
            </a>{" "}
            instead
          </p>
        </>,
      );
    }
  }, [
    isLocalNetwork,
    targetNetwork.blockExplorers?.default.name,
    targetNetwork.blockExplorers?.default.url,
    targetNetwork.name,
  ]);

  useEffect(() => {
    if (hasError) {
      notification.error(
        <>
          <p className="font-bold mt-0 mb-1">Cannot connect to local provider</p>
          <p className="m-0">
            - Did you forget to run <code className="italic bg-base-300 text-base font-bold">yarn chain</code> ?
          </p>
          <p className="mt-1 break-normal">
            - Or you can change <code className="italic bg-base-300 text-base font-bold">targetNetwork</code> in{" "}
            <code className="italic bg-base-300 text-base font-bold">scaffold.config.ts</code>
          </p>
        </>,
      );
    }
  }, [hasError]);

  return (
    <div className="container mx-auto my-10">
      <h1>Urban Agriculture DLP Explorer</h1>
      <SearchBar />
      <ChallengesList challenges={challenges} />
      <PaginationButton
        currentPage={currentPage}
        totalItems={Number(challengeCount)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default UrbanAgriDLP;
