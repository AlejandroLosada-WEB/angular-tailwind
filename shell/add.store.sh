#!/bin/bash

read -p 'Ingresa el nombre del modelo: ' nombreVAR
read -p 'Ingresa la ruta del store desde src/app/: ' rutaVAR

nombreVAR=$(echo "$nombreVAR" | sed 's/s$//')
nombreVARCap=$(echo "$nombreVAR" | sed 's/s$//;s/./\U&/')

mkdir -p src/app/$rutaVAR/store
touch src/app/$rutaVAR/store/$nombreVAR.actions.ts
cat scripts/actions.txt > src/app/$rutaVAR/store/$nombreVAR.actions.ts


sed -i 's/Users/'$nombreVARCap's/g' src/app/$rutaVAR/store/$nombreVAR.actions.ts
sed -i 's/users/'$nombreVAR's/g' src/app/$rutaVAR/store/$nombreVAR.actions.ts
sed -i 's/User/'$nombreVARCap'/g' src/app/$rutaVAR/store/$nombreVAR.actions.ts
sed -i 's/user/'$nombreVAR'/g' src/app/$rutaVAR/store/$nombreVAR.actions.ts

touch src/app/$rutaVAR/store/$nombreVAR.reducers.ts
cat scripts/reducers.txt > src/app/$rutaVAR/store/$nombreVAR.reducers.ts

sed -i 's/Users/'$nombreVARCap's/g' src/app/$rutaVAR/store/$nombreVAR.reducers.ts
sed -i 's/users/'$nombreVAR's/g' src/app/$rutaVAR/store/$nombreVAR.reducers.ts
sed -i 's/User/'$nombreVARCap'/g' src/app/$rutaVAR/store/$nombreVAR.reducers.ts
sed -i 's/user/'$nombreVAR'/g' src/app/$rutaVAR/store/$nombreVAR.reducers.ts

touch src/app/$rutaVAR/store/$nombreVAR.selectors.ts
cat scripts/selectors.txt > src/app/$rutaVAR/store/$nombreVAR.selectors.ts

sed -i 's/Users/'$nombreVARCap's/g' src/app/$rutaVAR/store/$nombreVAR.selectors.ts
sed -i 's/users/'$nombreVAR's/g' src/app/$rutaVAR/store/$nombreVAR.selectors.ts
sed -i 's/User/'$nombreVARCap'/g' src/app/$rutaVAR/store/$nombreVAR.selectors.ts
sed -i 's/user/'$nombreVAR'/g' src/app/$rutaVAR/store/$nombreVAR.selectors.ts

clear