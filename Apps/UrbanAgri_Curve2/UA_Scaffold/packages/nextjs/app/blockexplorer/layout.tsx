import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Urban Agriculture DLP Explorer",
  description: "Urban Agriculture Data Liquidity Pool Explorer created with 🏗 Scaffold-ETH 2",
});

const UrbanAgriDLPLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="urban-agri-dlp-layout">
      <header className="bg-base-300 py-4">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Urban Agriculture DLP Explorer</h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        {children}
      </main>
      <footer className="bg-base-300 py-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Powered by Urban Agriculture DLP and Scaffold-ETH 2</p>
        </div>
      </footer>
    </div>
  );
};

export default UrbanAgriDLPLayout;
