import { useState } from 'react'; // FR: Gestion d'état pour formulaire complexe

function FormulaireInscription() {
  // FR: État pour les champs du formulaire | EN: State for form fields
  const [utilisateur, setUtilisateur] = useState({
    pseudo: '',
    email: '',
    motDePasse: '',
    confirmMdp: ''
  });

  // FR: État pour les messages d'erreur | EN: State for error messages
  const [erreurs, setErreurs] = useState({});

  // FR: Gestion des changements avec validation en direct,HAFSA FST SIR 
  const handleChangement = (e) => {
    const { name, value } = e.target;
    setUtilisateur(prev => ({ ...prev, [name]: value }));
    // FR: On pourrait ajouter une validation en temps réel ici
  };

  // FR: Validation avant soumission | EN: Validation before submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const nouvellesErreurs = {};
    
    // FR: Règles de validation | EN: Validation rules
    if (!utilisateur.pseudo) nouvellesErreurs.pseudo = "Pseudo requis";
    if (!utilisateur.email.includes('@')) nouvellesErreurs.email = "Email invalide";
    if (utilisateur.motDePasse.length < 6) nouvellesErreurs.motDePasse = "6 caracteres minimum";
    if (utilisateur.motDePasse !== utilisateur.confirmMdp) {
      nouvellesErreurs.confirmMdp = "Les mots de passe ne correspondent pas";
    }

    // FR: Si pas d'erreurs, soumission réussie. HAFSA ST SIR 
    if (Object.keys(nouvellesErreurs).length === 0) {
      alert(`Inscription reussie pour ${utilisateur.pseudo}!`);
    } else {
      setErreurs(nouvellesErreurs); // FR: Affichage des erreurs. HAFSA FST SIR 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Formulaire d'inscription</h3>
      
      {/* FR: Champ avec affichage d'erreur conditionnel.......... */}
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