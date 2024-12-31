import type { NextPage } from 'next';
import WelcomeSvg from '../components/WelcomeSvg';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#0F1729] flex items-center justify-center">
      <div className="w-full max-w-[1200px] aspect-[3/2]">
        <WelcomeSvg />
      </div>
    </div>
  );
};

export default Home;