import WelcomeSvg from '../components/WelcomeSvg'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F1729] flex items-center justify-center">
      <div className="w-full max-w-[1200px] aspect-[3/2]">
        <WelcomeSvg />
      </div>
    </main>
  )
}
