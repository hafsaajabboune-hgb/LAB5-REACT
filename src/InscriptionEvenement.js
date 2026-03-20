import { useState } from 'react'; // Hook for state management / Hook pour gérer l'état

function InscriptionEvenement() {
  // State for participant data / État pour les données du participant
  const [participant, setParticipant] = useState({
    prenom: '',
    courriel: '',
    age: ''
  });

  // Handle form input changes / Gère les changements dans le formulaire
  const handleChangement = (e) => {
    const { name, value } = e.target; // Get name and value from input / Récupère le nom et la valeur
    setParticipant(prev => ({
      ...prev, // Keep other fields / Garde les autres champs
      [name]: value // Update changed field / Met à jour le champ modifié
    }));
  };

  // Handle form submission / Gère la soumission du formulaire
  const handleSoumission = (e) => {
    e.preventDefault(); // Prevent page reload / Empêche le rechargement
    alert(`Nouveau participant : ${participant.prenom} (${participant.courriel}), ${participant.age} ans`);
  };

  return (
    <form onSubmit={handleSoumission} style={styles.formulaire}>
      <h3>Inscription a la conference</h3>
      {/* Controlled input for first name / Champ contrôlé pour le prénom */}
      <input
        type="text"
        name="prenom"
        value={participant.prenom}
        onChange={handleChangement}
        placeholder="Prenom"
        style={styles.champ}
      />
      {/* Controlled input for email / Champ contrôlé pour l'email */}
      <input
        type="email"
        name="courriel"
        value={participant.courriel}
        onChange={handleChangement}
        placeholder="Email"
        style={styles.champ}
      />
      {/* Controlled input for age / Champ contrôlé pour l'âge */}
      <input
        type="number"
        name="age"
        value={participant.age}
        onChange={handleChangement}
        placeholder="Age"
        style={styles.champ}
      />
      <button type="submit" style={styles.bouton}>S'inscrire</button>
    </form>
  );
}

// Inline styles object / Objet de styles en ligne
const styles = {
  formulaire: { padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px' },
  champ: { display: 'block', margin: '10px 0', padding: '8px', width: '200px' },
  bouton: { backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }
};

export default InscriptionEvenement;
