import { useState } from 'react'; // FR: Import du hook pour gérer l'état | EN: Import hook for state management | ES: Importar hook para manejar estado

function InscriptionEvenement() {
  // DE: Zustand für Teilnehmerdaten | AR: حالة بيانات المشارك | FR: État du participant
  const [participant, setParticipant] = useState({
    prenom: '',
    courriel: '',
    age: ''
  });

  // ES: Manejar cambios en el formulario | EN: Handle form changes | FR: Gérer les changements
  const handleChangement = (e) => {
    const { name, value } = e.target; // DE: Werte aus Eingabefeld extrahieren | AR: استخراج القيم من حقل الإدخال
    setParticipant(prev => ({
      ...prev,
      [name]: value // FR: Mise à jour dynamique | EN: Dynamic update | ES: Actualización dinámica
    }));
  };

  // AR: معالجة تقديم النموذج | DE: Formularabsendung verarbeiten | EN: Handle form submission
  const handleSoumission = (e) => {
    e.preventDefault(); // FR: Empêcher le rechargement | ES: Evitar recarga | DE: Neuladen verhindern
    alert(`Nouveau participant : ${participant.prenom} (${participant.courriel}), ${participant.age} ans`);
    // AR: تنبيه بالمشارك الجديد | EN: Alert with new participant | ES: Alerta con nuevo participante
  };

  return (
    <form onSubmit={handleSoumission} style={styles.formulaire}>
      <h3>Inscription a la conference</h3>
      {/* FR: Champ prénom contrôlé | EN: Controlled first name field | DE: Kontrolliertes Vornamenfeld */}
      <input
        type="text"
        name="prenom"
        value={participant.prenom}
        onChange={handleChangement}
        placeholder="Prenom"
        style={styles.champ}
      />
      {/* ES: Campo de correo controlado | AR: حقل البريد الإلكتروني المتحكم به */}
      <input
        type="email"
        name="courriel"
        value={participant.courriel}
        onChange={handleChangement}
        placeholder="Email"
        style={styles.champ}
      />
      {/* DE: Kontrolliertes Altersfeld | EN: Controlled age field | FR: Champ âge contrôlé */}
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

// FR: Styles en objet JavaScript | EN: JavaScript object styles | ES: Estilos en objeto JavaScript
const styles = {
  formulaire: { padding: '20px', border: '2px solid #4CAF50', borderRadius: '10px' },
  champ: { display: 'block', margin: '10px 0', padding: '8px', width: '200px' },
  bouton: { backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }
};

export default InscriptionEvenement;