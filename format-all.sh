#!/bin/bash

# Format all TypeScript and JavaScript files
npx prettier --write "src/**/*.{ts,tsx,js,jsx}"

# Format specific files showing errors
files=(
  "src/app/404.tsx"
  "src/app/disruption/page.tsx"
  "src/app/future-ready/page.tsx"
  "src/app/layout.tsx"
  "src/app/metadata.ts"
  "src/app/mindset/page.tsx"
  "src/app/page.tsx"
  "src/app/solutions/page.tsx"
  "src/components/shared/Button.tsx"
  "src/components/shared/Card.tsx"
  "src/components/shared/Container.tsx"
  "src/components/shared/GradientBackground.tsx"
  "src/components/shared/Header.tsx"
  "src/components/shared/Section.tsx"
  "src/components/shared/WelcomeSvg.tsx"
)

for file in "${files[@]}"; do
  echo "Formatting $file..."
  npx prettier --write "$file"
done