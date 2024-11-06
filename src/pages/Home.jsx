// Home.js
import React, { useState } from 'react';

const Home = () => {
  const [tezlik, setTezlik] = useState(80);
  const [tormozYoli, setTormozYoli] = useState(12);
  const [boshlangichTezlik, setBoshlangichTezlik] = useState(null);
  const [tezlikdanOshganmi, setTezlikdanOshganmi] = useState('');

  const hisoblash = () => {
    const calculatedBoshlangichTezlik = Math.sqrt(2 * tormozYoli * 9.81).toFixed(2);
    setBoshlangichTezlik(calculatedBoshlangichTezlik);
    setTezlikdanOshganmi(calculatedBoshlangichTezlik > tezlik ? 'Ha, oshgan' : 'Yo‘q, oshmagan');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Boshlang'ich Tezlikni Hisoblash</h1>

      <div style={styles.formGroup}>
        <label htmlFor="yo‘l-turi" style={styles.label}>Yo'l qoplamasini tanlang:</label>
        <select id="yo‘l-turi" style={styles.select}>
          <option>Muzli yo'l</option>
          <option>Quruq yo'l</option>
          <option>Nam yo'l</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="tezlik" style={styles.label}>Belgilangan Tezlik (m/s):</label>
        <input 
          type="number" 
          id="tezlik" 
          value={tezlik} 
          onChange={e => setTezlik(parseFloat(e.target.value))} 
          style={styles.input} 
        />
      </div>

      <div style={styles.formGroup}>
        <label htmlFor="tormoz-yo'li" style={styles.label}>Tormoz Yo'li (metr):</label>
        <input 
          type="number" 
          id="tormoz-yo'li" 
          value={tormozYoli} 
          onChange={e => setTormozYoli(parseFloat(e.target.value))} 
          style={styles.input} 
        />
      </div>

      <button onClick={hisoblash} style={styles.button}>Hisoblash</button>

      {boshlangichTezlik !== null && (
        <table style={styles.resultTable}>
          <thead>
            <tr>
              <th>Boshlang'ich Tezlik (m/s)</th>
              <th>Belgilangan Tezlikdan Oshganmi?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{boshlangichTezlik} m/s</td>
              <td>{tezlikdanOshganmi}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f4f8',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  formGroup: {
    margin: '15px 0',
    textAlign: 'left',
    width: '100%',
    maxWidth: '400px',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '8px',
    fontSize: '1rem',
    color: '#555',
  },
  select: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '12px',
    fontSize: '1.1rem',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '400px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  resultTable: {
    width: '100%',
    marginTop: '20px',
    borderCollapse: 'collapse',
    marginBottom: '30px',
  },
  resultTableTh: {
    fontSize: '1.1rem',
    padding: '10px',
    textAlign: 'center',
    borderBottom: '2px solid #ddd',
    backgroundColor: '#f8f9fa',
    color: '#333',
  },
  resultTableTd: {
    padding: '10px',
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    fontSize: '1rem',
    color: '#555',
  },
};

export default Home;
