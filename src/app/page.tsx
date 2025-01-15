'use client'

import { StarField } from '@/components/shared/StarField'
import { GradientBackground } from '@/components/shared/GradientBackground'
import { BaseLayout } from '@/components/shared/BaseLayout'

export default function NexusPage() {
  return (
    <BaseLayout>
      <div className="relative min-h-screen w-full overflow-hidden">
        <StarField className="z-0" />
        <GradientBackground className="z-10" />
        
        <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500 filter drop-shadow-lg">
            Innovation Hub
          </h1>
          
          <h2 className="text-xl text-gray-300 mb-6 filter drop-shadow-md">
            Talent-Driven AI Acceleration
          </h2>
          
          <div className="text-sm text-emerald-400 tracking-[0.2em] font-medium">
            INNOVATE · DISRUPT · LEAD
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}