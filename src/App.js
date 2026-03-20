import { useState } from 'react'; // State hook for context / Hook d'état pour le contexte
import { ContexteMembre } from './ContexteMembre';
import InscriptionEvenement from './InscriptionEvenement';
import CommandePizza from './CommandePizza';
import ConvertisseurDevises from './ConvertisseurDevises';
import ProfilMembre from './ProfilMembre';

function App() {
  // Global state shared via context / État global partagé via contexte
  const [membre, setMembre] = useState({
    nom: 'Hafsa', // Default name / Nom par défaut
    statut: 'premium'
  });

  return (
    {/* Context provider wrapping entire app / Fournisseur du contexte à toute l'application */}
    <ContexteMembre.Provider value={{ membre, setMembre }}>
      <div style={stylesApp.conteneur}>
        <header style={stylesApp.enTete}>
          <h1>Mon TP React Personnalise</h1>
        </header>

        {/* Responsive grid for components / Grille responsive pour les composants */}
        <section style={stylesApp.grille}>
          <div style={stylesApp.carte}>
            <ProfilMembre /> {/* Component consuming context / Composant qui consomme le contexte */}
          </div>
          
          <div style={stylesApp.carte}>
            <InscriptionEvenement /> {/* Controlled form / Formulaire contrôlé */}
          </div>
          
          <div style={stylesApp.carte}>
            <CommandePizza /> {/* Uncontrolled form / Formulaire non-contrôlé */}
          </div>
          
          <div style={stylesApp.carte}>
            <ConvertisseurDevises /> {/* Lifting State Up example / Exemple de Lifting State Up */}
          </div>
        </section>
      </div>
    </ContexteMembre.Provider>
  );
}

// Main app styles / Styles principaux de l'application
const stylesApp = {
  conteneur: { maxWidth: '1200px', margin: '0 auto', padding: '20px' },
  enTete: { 
    textAlign: 'center', 
    color: '#333',
    borderBottom: '3px solid #FF4081',
    marginBottom: '30px'
  },
  grille: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px'
  },
  carte: { 
    padding: '15px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
};

export default App;
