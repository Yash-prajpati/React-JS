import { useRef } from 'react';

function App() {
  const name = useRef("");
  const email = useRef("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#121212',
      color: '#ffffff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      margin: 0,
    },
    container: {
      backgroundColor: '#1e1e1e',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
      width: '300px',
      textAlign: 'center',
    },
    input: {
      padding: '10px',
      margin: '10px 0',
      border: '1px solid #333',
      borderRadius: '4px',
      fontSize: '14px',
      width: '93%',
      backgroundColor: '#2a2a2a',
      color: '#ffffff',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '100%',
    },
    buttonHover: {
      backgroundColor: '#0056b3',
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <input 
            ref={name}
            type="text" 
            placeholder='Your Name' 
            style={styles.input}
          />
          <input 
            ref={email} 
            type="email" 
            placeholder='Your Email' 
            style={styles.input}
          />
          
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
