import { useState } from 'react'; // State hook / Hook d'état
import MontantInput from './MontantInput'; // Child component import / Import du composant enfant

function ConvertisseurDevises() {
  // State lifted up from child component / État remonté du composant enfant
  const [euros, setEuros] = useState('');
  const TAUX_CONVERSION = 1.08; // Fixed exchange rate / Taux de change fixe

  // Conversion function (business logic) / Fonction de conversion (logique métier)
  const convertirEnDollars = (valeurEuros) => {
    if (valeurEuros === '') return ''; // Handle empty input / Gestion du cas vide
    return (parseFloat(valeurEuros) * TAUX_CONVERSION).toFixed(2); // Calculate and format / Calcul et formatage
  };

  return (
    <div style={stylesDevises.conteneur}>
      <h3>Convertisseur Euro Dollar</h3>
      
      {/* Parent-child communication via props / Communication parent-enfant via props */}
      <MontantInput
        montant={euros} // Pass value to child / Transmission de la valeur vers l'enfant
        surChangementMontant={setEuros} // Pass update function / Transmission de la fonction de mise à jour
        devise="EUR"
      />
      
      {/* Conditional rendering of result / Affichage conditionnel du résultat */}
      <div style={stylesDevises.resultat}>
        <strong>Resultat :</strong>{' '}
        {euros ? `${convertirEnDollars(euros)} USD` : 'Entrez un montant'}
      </div>
    </div>
  );
}

// Converter component styles / Styles du composant convertisseur
const stylesDevises = {
  conteneur: { 
    padding: '20px', 
    border: '2px solid #2196F3', 
    borderRadius: '10px',
    backgroundColor: '#E3F2FD'
  },
  resultat: { 
    marginTop: '15px', 
    padding: '10px', 
    backgroundColor: 'white',
    borderRadius: '5px'
  }
};

export default ConvertisseurDevises;
