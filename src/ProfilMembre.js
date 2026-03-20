import { useContext } from 'react'; // Hook to use context / Hook pour utiliser le contexte
import { ContexteMembre } from './ContexteMembre'; // Import created context / Import du contexte créé

function ProfilMembre() {
  // Consume global context / Consommation du contexte global
  const { membre, setMembre } = useContext(ContexteMembre);

  // Logout function / Fonction de déconnexion
  const handleDeconnexion = () => {
    setMembre({ nom: '', statut: 'visiteur' }); // Reset global state / Réinitialisation de l'état global
  };

  // Login function / Fonction de connexion
  const handleConnexion = () => {
    setMembre({ nom: 'Jean Participant', statut: 'premium' }); // Update global state / Mise à jour de l'état global
  };

  return (
    <div style={stylesProfil.conteneur}>
      <h3>Espace Membre</h3>
      {/* Conditional rendering based on global state / Rendu conditionnel basé sur l'état global */}
      {membre.statut !== 'visiteur' ? (
        <div style={stylesProfil.info}>
          <p>Bienvenue {membre.nom} !</p>
          <p>Statut : <strong>{membre.statut}</strong></p>
          <button onClick={handleDeconnexion} style={stylesProfil.bouton}>
            Se deconnecter
          </button>
        </div>
      ) : (
        <div>
          <p>Vous n'etes pas connecte</p>
          <button onClick={handleConnexion} style={stylesProfil.bouton}>
            Se connecter
          </button>
        </div>
      )}
    </div>
  );
}

// Profile component styles / Styles du composant profil
const stylesProfil = {
  conteneur: { 
    padding: '20px', 
    border: '2px solid #9C27B0', 
    borderRadius: '10px',
    backgroundColor: '#F3E5F5'
  },
  info: { textAlign: 'center' },
  bouton: { 
    backgroundColor: '#9C27B0', 
    color: 'white', 
    padding: '8px 16px', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer' 
  }
};

export default ProfilMembre;
