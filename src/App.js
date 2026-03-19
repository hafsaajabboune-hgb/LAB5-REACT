import { useState } from 'react';
import { ContexteMembre } from './ContexteMembre';
import InscriptionEvenement from './InscriptionEvenement';
import CommandePizza from './CommandePizza';
import ConvertisseurDevises from './ConvertisseurDevises';
import ProfilMembre from './ProfilMembre';

function App() {
  // FR: État global partagé via contexte. HAFSA FST SIR  | EN: Global state shared via context
  const [membre, setMembre] = useState({
    nom: 'HAFSA',
    statut: 'premium'
  });

  return (
    /* FR: Fournisseur du contexte à toute l'application ............| HAFSA SIR FST .EN: Context provider for entire app */
    <ContexteMembre.Provider value={{ membre, setMembre }}>
      <div style={stylesApp.conteneur}>
        <header style={stylesApp.enTete}>
          <h1>Mon TP React Personnalise</h1>
        </header>

        <section style={stylesApp.grille}>
          <div style={stylesApp.carte}>
            <ProfilMembre />
          </div>
          
          <div style={stylesApp.carte}>
            <InscriptionEvenement />
          </div>
          
          <div style={stylesApp.carte}>
            <CommandePizza />
          </div>
          
          <div style={stylesApp.carte}>
            <ConvertisseurDevises />
          </div>
        </section>
      </div>
    </ContexteMembre.Provider>
  );
}
// FR: Styles principaux de l'application | EN: Main app styles HAFSA FST SIR 
const stylesApp = {
  conteneur: { maxWidth: '1200px', margin: '0 auto', padding: '20px' },
  enTete: { 
    textAlign: 'center', 
    color: '#333',
    borderBottom: '3px solid #FF4081',
    marginBottom: '30px'
  },/* HAFSA FST SIR */
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
  /* FR:HAFSA FST SIR */
};

export default App;