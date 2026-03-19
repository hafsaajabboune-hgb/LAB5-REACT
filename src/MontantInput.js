// FR: Composant réutilisable pour saisie de montant | EN: Reusable amount input component
function MontantInput({ montant, surChangementMontant, devise }) {
  // DE: Wiederverwendbare Komponente für Betragseingabe | ES: Componente reutilizable para entrada de cantidad
  
  return (
    <div style={stylesMontant.conteneur}>
      {/* AR: عنصر واجهة المستخدم مع التسمية | FR: Élément avec label | EN: Labeled input element */}
      <label style={stylesMontant.label}>
        Montant en {devise} :
        <input
          type="number"
          value={montant} // FR: Valeur contrôlée par le parent | EN: Value controlled by parent
          onChange={(e) => surChangementMontant(e.target.value)} // FR: Propagation des changements au parent
          style={stylesMontant.input}
        />
      </label>
    </div>
  );
}

// FR: Styles du composant MontantInput | EN: MontantInput component styles
const stylesMontant = {
  conteneur: { margin: '10px 0' },
  label: { fontWeight: 'bold' },
  input: { marginLeft: '10px', padding: '5px' }
};

export default MontantInput;