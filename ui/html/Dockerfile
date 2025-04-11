# Utiliser une image de base Node.js
FROM node:18

# Créer un répertoire de travail
WORKDIR /app

# Copier uniquement le fichier package.json
COPY package.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du code source
COPY . .

# Exposer le port 5177 pour le serveur Vite
EXPOSE 5177

# Commande par défaut pour démarrer le serveur en mode développement
CMD ["npm", "run", "dev"]
