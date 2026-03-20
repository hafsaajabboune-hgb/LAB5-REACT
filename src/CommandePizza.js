import { useRef } from 'react'; // Hook for DOM references / Hook pour les références DOM

function CommandePizza() {
  // Create refs for uncontrolled inputs / Crée des refs pour les inputs non-contrôlés
  const tailleRef = useRef();
  const garnitureRef = useRef();
  const quantiteRef = useRef();

  // Handle order submission / Gère la soumission de la commande
  const handlePasserCommande = (e) => {
    e.preventDefault(); // Prevent default form behavior / Empêche le comportement par défaut
    
    // Get values directly from refs / Récupère les valeurs directement depuis les refs
    const commande = {
      taille: tailleRef.current.value,
      garniture: garnitureRef.current.value,
      quantite: quantiteRef.current.value
    };
    
    alert(`Commande recue : ${commande.quantite} pizza(s) ${commande.taille} avec ${commande.garniture}`);
  };

  return (
    <form onSubmit={handlePasserCommande} style={stylesPizza.formulaire}>
      <h3>Commander une pizza</h3>
      
      {/* Uncontrolled dropdown for size / Liste déroulante non-contrôlée pour la taille */}
      <select ref={tailleRef} style={stylesPizza.champ}>
        <option value="petite">Petite</option>
        <option value="moyenne">Moyenne</option>
        <option value="grande">Grande</option>
      </select>
      
      {/* Uncontrolled dropdown for topping / Liste déroulante non-contrôlée pour la garniture */}
      <select ref={garnitureRef} style={stylesPizza.champ}>
        <option value="margherita">Margherita</option>
        <option value="reine">Reine</option>
        <option value="vegetarienne">Vegetarienne</option>
      </select>
      
      {/* Uncontrolled number input / Champ numérique non-contrôlé */}
      <input
        type="number"
        ref={quantiteRef}
        min="1"
        defaultValue="1"
        style={stylesPizza.champ}
      />
      
      <button type="submit" style={stylesPizza.bouton}>Commander</button>
    </form>
  );
}

// Pizza-specific styles / Styles spécifiques à la pizza
const stylesPizza = {
  formulaire: { padding: '20px', border: '2px solid #FF5722', borderRadius: '10px', marginTop: '20px' },
  champ: { display: 'block', margin: '10px 0', padding: '8px', width: '200px' },
  bouton: { backgroundColor: '#FF5722', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }
};

export default CommandePizza;
