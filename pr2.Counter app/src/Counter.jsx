import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#e0f7fa', // Light teal background
            fontFamily: 'Arial, sans-serif',
            color: '#004d40', // Dark teal text
            padding: '20px', // Added padding for breathing room
        },
        box: {
            background: 'linear-gradient(135deg, #00796b, #004d40)', // Unique gradient background
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
            textAlign: 'center',
            maxWidth: '400px',
            width: '90%',
            position: 'relative',
            overflow: 'hidden',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '20px',
            color: '#ffffff', // White title for contrast
        },
        heading: {
            fontSize: '4rem',
            margin: '20px 0',
            color: '#ffffff', // White counter number for contrast
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Shadow for text depth
        },
        button: {
            background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white
            color: '#004d40', // Dark teal text
            border: 'none',
            borderRadius: '30px', // More rounded corners
            padding: '15px 30px', // Larger padding
            margin: '10px',
            fontSize: '1.5rem',
            cursor: 'pointer',
            transition: 'background 0.3s, transform 0.2s',
            outline: 'none',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Shadow for depth
        },
        buttonHover: {
            transform: 'scale(1.05)', // Slightly enlarge on hover
            background: 'rgba(255, 255, 255, 1)', // Fully opaque on hover
        },
        texture: {
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")', // Subtle texture
            opacity: '0.1',
            pointerEvents: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.box}>
                <div style={styles.texture}></div>
                <h1 style={styles.title}>Counter</h1>
                <h2 style={styles.heading}>{count}</h2>
                <div>
                    <button 
                        style={styles.button}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.buttonHover.transform;
                            e.currentTarget.style.background = styles.buttonHover.background;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = styles.button.background;
                        }}
                        onClick={() => setCount(count + 1)}
                    >
                        +
                    </button>

                    <button 
                        style={styles.button}
                        onClick={() => setCount(0)}
                    >
                        Reset
                    </button>
                    <button 
                        style={styles.button}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = styles.buttonHover.transform;
                            e.currentTarget.style.background = styles.buttonHover.background;
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = styles.button.background;
                        }}
                        onClick={() => setCount(count - 1)}
                    >
                        -
                    </button>
                   
                </div>
            </div>
        </div>
    );
}

export default Counter;
