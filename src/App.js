import './App.css';
import { Avatar, Button, Rating, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
function App() {
  const [submitting, setSubmitting] = useState(false);
  const [rating, setRating] = useState(true);

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src="https://sm.imgix.net/22/09/lionel-messi.jpg"
          />
          <Typography variant="h4" gutterBottom>
            Material UI
          </Typography>
        </div>

        <Button
          variant="contained"
          color="secondary"
          fullWidth
          sx={{ mb: 2, mt: 2 }}
        >
          Checkout
        </Button>

        <LoadingButton
          loading={submitting}
          variant="outlined"
          onClick={() => setSubmitting(true)}
        >
          Fetch Data
        </LoadingButton>

        <div style={{ marginTop: '10px' }}>
          <p>Material Icon</p>
          <InstagramIcon color="primary" />
        </div>
        <div>
          <p>Icon Button</p>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </div>
        <div>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
            sx={{
              color: 'steelblue',
            }}
          />
        </div>

        <div>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>
      </div>
    </div>
  );
}

export default App;
