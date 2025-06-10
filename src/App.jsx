import { Container, Stack } from '@mui/material';
import './styles/App.scss';
import Form from './components/Form/Form';
import Output from './components/Output/Output';
import { useEffect, useState } from 'react';

function App() {
  const [firstValue, setFirstValue] = useState('');
  const [secondValue, setSecondValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {

    return () => {
      setFirstValue('');
      setSecondValue('');
      setShowInput(false);
    }
  }, [])

  return (
    <Container className='app'>
      <Stack spacing={2} width='100%' alignItems='center' padding={{ xs: 6, sm: 0 }}>
        <Form 
          firstValue={firstValue}
          secondValue={secondValue}
          setFirstValue={setFirstValue}
          setSecondValue={setSecondValue}
          setShowInput={setShowInput}
        />

        {showInput && (
          <Output
            firstValue={firstValue}
            secondValue={secondValue}
          />
        )}

      </Stack>
    </Container>
  )
}

export default App
