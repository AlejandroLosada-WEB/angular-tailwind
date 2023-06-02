#!/bin/bash

read -p 'Ingresa el nombre de la pagina: ' nombreVAR
read -p 'Ingresa la ruta de la pagina desde src/app/: ' rutaVAR

mkdir -p src/app/$rutaVAR 

ng g c pages/$nombreVAR
ng g m pages/$nombreVAR/ --routing 

clear