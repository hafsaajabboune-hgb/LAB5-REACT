import { useRef } from 'react'; // FR: Hook pour références | DE: Hook für Referenzen | AR: خطاف للمراجع

function CommandePizza() {
  // ES: Referencias a elementos del DOM | EN: DOM element references | FR: Références aux éléments
  const tailleRef = useRef();
  const garnitureRef = useRef();
  const quantiteRef = useRef();

  // DE: Bestellung absenden | AR: تقديم الطلب | EN: Submit order
  const handlePasserCommande = (e) => {
    e.preventDefault(); // FR: Empêcher comportement par défaut | ES: Evitar comportamiento por defecto
    
    // FR: Récupération des valeurs directement depuis les références | EN: Get values directly from refs
    const commande = {
      taille: tailleRef.current.value,
      garniture: garnitureRef.current.value,
      quantite: quantiteRef.current.value
    };
    
    // AR: عرض تفاصيل الطلب | DE: Bestelldetails anzeigen | ES: Mostrar detalles del pedido
    alert(`Commande recue : ${commande.quantite} pizza(s) ${commande.taille} avec ${commande.garniture}`);
  };

  return (
    <form onSubmit={handlePasserCommande} style={stylesPizza.formulaire}>
      <h3>Commander une pizza</h3>
      
      {/* FR: Liste déroulante non-contrôlée | EN: Uncontrolled dropdown | DE: Unkontrollierte Dropdown-Liste */}
      <select ref={tailleRef} style={stylesPizza.champ}>
        <option value="petite">Petite</option>
        <option value="moyenne">Moyenne</option>
        <option value="grande">Grande</option>
      </select>
      
      {/* ES: Lista desplegable no controlada | AR: قائمة منسدلة غير متحكم بها */}
      <select ref={garnitureRef} style={stylesPizza.champ}>
        <option value="margherita">Margherita</option>
        <option value="reine">Reine</option>
        <option value="vegetarienne">Vegetarienne</option>
      </select>
      
      {/* DE: Unkontrolliertes Zahlenfeld | EN: Uncontrolled number input | FR: Champ numérique non-contrôlé */}
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

// FR: Styles spécifiques à la pizza | EN: Pizza-specific styles | ES: Estilos específicos para pizza
const stylesPizza = {
  formulaire: { padding: '20px', border: '2px solid #FF5722', borderRadius: '10px', marginTop: '20px' },
  champ: { display: 'block', margin: '10px 0', padding: '8px', width: '200px' },
  bouton: { backgroundColor: '#FF5722', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }
};

export default CommandePizza;