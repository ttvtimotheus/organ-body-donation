#!/bin/bash

# Dateien mit ESLint-Fehlern
FILES=(
  "src/components/sections/BodyDonationEthics.tsx"
  "src/components/sections/BodyDonationProcess.tsx"
  "src/components/sections/BodyDonationScience.tsx"
  "src/components/sections/BodyDonationWhat.tsx"
  "src/components/sections/OrganDonationEthics.tsx"
  "src/components/sections/OrganDonationLegal.tsx"
  "src/components/sections/OrganDonationProcess.tsx"
)

# Ersetze alle unescapten Anführungszeichen in den Dateien
for file in "${FILES[@]}"; do
  echo "Bearbeite $file..."
  # Ersetze " mit &quot; in Textabschnitten
  sed -i '' 's/"\([^"]*\)"/"\&quot;\1\&quot;"/g' "$file"
  # Korrigiere doppelte Anführungszeichen in JSX-Attributen
  sed -i '' 's/="\&quot;/="/g' "$file"
  sed -i '' 's/\&quot;"/"/' "$file"
done

echo "Fertig! Alle Anführungszeichen wurden ersetzt."
