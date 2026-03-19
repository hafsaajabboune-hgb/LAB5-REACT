import { useState } from 'react'; // FR: Hook d'état | ES: Hook de estado
import MontantInput from './MontantInput'; // FR: Import du composant enfant | EN: Import child component

function ConvertisseurDevises() {
  // FR: L'état est remonté du composant enfant | EN: State is lifted up from child component
  const [euros, setEuros] = useState('');
  const TAUX_CONVERSION = 1.08; // FR: Taux de change fixe | DE: Fester Wechselkurs

  // FR: Fonction de conversion (logique métier) | EN: Conversion function (business logic)
  const convertirEnDollars = (valeurEuros) => {
    if (valeurEuros === '') return ''; // FR: Gestion du cas vide | EN: Handle empty case
    return (parseFloat(valeurEuros) * TAUX_CONVERSION).toFixed(2); // FR: Calcul et formatage
  };

  return (
    <div style={stylesDevises.conteneur}>
      <h3>Convertisseur Euro Dollar</h3>
      
      {/* FR: Communication parent-enfant via props | EN: Parent-child communication via props */}
      <MontantInput
        montant={euros} // FR: Transmission de la valeur vers l'enfant
        surChangementMontant={setEuros} // FR: Transmission de la fonction de mise à jour
        devise="EUR"
      />
      
      {/* AR: عرض النتيجة المحسوبة | DE: Berechnetes Ergebnis anzeigen */}
      <div style={stylesDevises.resultat}>
        <strong>Resultat :</strong>{' '}
        {euros ? `${convertirEnDollars(euros)} USD` : 'Entrez un montant'}
        {/* FR: Affichage conditionnel | EN: Conditional rendering */}
      </div>
    </div>
  );
}

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