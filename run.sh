#!/bin/bash

echo 'Instalando dependencias...'
pip install -r backend/requirements.txt
echo 'Inicializando o Backend'
python3 backend/wsgi.py & 
echo 'Inicializando Frontend'
cd frontend && npm install && npm start &  
echo 'Sistema Inicializado'



