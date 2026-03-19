import { useContext } from 'react'; // FR: Hook pour utiliser le contexte | EN: Hook to use context
import { ContexteMembre } from './ContexteMembre'; // FR: Import du contexte créé

function ProfilMembre() {
  // FR: Consommation du contexte global | EN: Consuming global context
  // DE: Konsum des globalen Kontexts | ES: Consumo del contexto global
  const { membre, setMembre } = useContext(ContexteMembre);

  // FR: Fonction pour déconnecter l'utilisateur | EN: Function to logout user
  const handleDeconnexion = () => {
    setMembre({ nom: '', statut: 'visiteur' }); // FR: Réinitialisation de l'état global
  };

  // FR: Fonction pour connecter l'utilisateur | EN: Function to login user
  const handleConnexion = () => {
    setMembre({ nom: 'Jean Participant', statut: 'premium' }); // FR: Mise à jour de l'état global
  };

  return (
    <div style={stylesProfil.conteneur}>
      <h3>Espace Membre</h3>
      {/* FR: Rendu conditionnel basé sur l'état global | EN: Conditional rendering based on global state */}
      {membre.statut !== 'visiteur' ? (
        <div style={stylesProfil.info}>
          <p>Bienvenue {membre.nom} !</p> {/* AR: عرض اسم العضو */}
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