// Reusable amount input component / Composant réutilisable pour saisie de montant
function MontantInput({ montant, surChangementMontant, devise }) {
  
  return (
    <div style={stylesMontant.conteneur}>
      {/* Label with input / Label avec champ de saisie */}
      <label style={stylesMontant.label}>
        Montant en {devise} :
        <input
          type="number"
          value={montant} // Value controlled by parent / Valeur contrôlée par le parent
          onChange={(e) => surChangementMontant(e.target.value)} // Propagate changes to parent / Propage les changements au parent
          style={stylesMontant.input}
        />
      </label>
    </div>
  );
}

// Component styles / Styles du composant
const stylesMontant = {
  conteneur: { margin: '10px 0' },
  label: { fontWeight: 'bold' },
  input: { marginLeft: '10px', padding: '5px' }
};

export default MontantInput;
