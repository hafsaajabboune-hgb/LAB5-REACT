import { useState } from 'react'; // State management for complex form / Gestion d'état pour formulaire complexe

function FormulaireInscription() {
  // State for form fields / État pour les champs du formulaire
  const [utilisateur, setUtilisateur] = useState({
    pseudo: '',
    email: '',
    motDePasse: '',
    confirmMdp: ''
  });

  // State for error messages / État pour les messages d'erreur
  const [erreurs, setErreurs] = useState({});

  // Handle input changes / Gère les changements dans les champs
  const handleChangement = (e) => {
    const { name, value } = e.target;
    setUtilisateur(prev => ({ ...prev, [name]: value }));
  };

  // Validate and submit form / Valide et soumet le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesErreurs = {};
    
    // Validation rules / Règles de validation
    if (!utilisateur.pseudo) nouvellesErreurs.pseudo = "Pseudo requis";
    if (!utilisateur.email.includes('@')) nouvellesErreurs.email = "Email invalide";
    if (utilisateur.motDePasse.length < 6) nouvellesErreurs.motDePasse = "6 caracteres minimum";
    if (utilisateur.motDePasse !== utilisateur.confirmMdp) {
      nouvellesErreurs.confirmMdp = "Les mots de passe ne correspondent pas";
    }

    // If no errors, submission successful / Si pas d'erreurs, soumission réussie
    if (Object.keys(nouvellesErreurs).length === 0) {
      alert(`Inscription reussie pour ${utilisateur.pseudo}!`);
    } else {
      setErreurs(nouvellesErreurs); // Display errors / Affichage des erreurs
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulaire d'inscription</h3>
      
      {/* Input with conditional error display / Champ avec affichage d'erreur conditionnel */}
      <input name="pseudo" placeholder="Pseudo" onChange={handleChangement} />
      {erreurs.pseudo && <span style={{color: 'red'}}>{erreurs.pseudo}</span>}
      
      <input name="email" type="email" placeholder="Email" onChange={handleChangement} />
      {erreurs.email && <span style={{color: 'red'}}>{erreurs.email}</span>}
      
      <input name="motDePasse" type="password" placeholder="Mot de passe" onChange={handleChangement} />
      {erreurs.motDePasse && <span style={{color: 'red'}}>{erreurs.motDePasse}</span>}
      
      <input name="confirmMdp" type="password" placeholder="Confirmer" onChange={handleChangement} />
      {erreurs.confirmMdp && <span style={{color: 'red'}}>{erreurs.confirmMdp}</span>}
      
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default FormulaireInscription;
