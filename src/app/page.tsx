import WelcomeSvg from '@/components/shared/WelcomeSvg';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full bg-navy-900">
      <div className="w-full h-screen">
        <WelcomeSvg />
      </div>
    </main>
  );
}
