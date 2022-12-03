import './App.css';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
function App() {
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setSubmitting(false);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [submitting]);
  return (
    <div className="App">
      <div
        style={{
          background: '#f7f7f7',
          width: '400px',
          height: '400px',
          borderRadius: '1rem',
          padding: '2rem',
        }}
      >
        <Button variant="contained" color="secondary" fullWidth sx={{ mb: 2 }}>
          Checkout
        </Button>

        <LoadingButton
          loading={submitting}
          variant="outlined"
          onClick={() => setSubmitting(true)}
        >
          Fetch data
        </LoadingButton>
      </div>
    </div>
  );
}

export default App;
