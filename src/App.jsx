import { Container, Stack } from '@mui/material';
import './styles/App.scss';
import Form from './components/Form/Form';

function App() {

  return (
   <Container className='app'>
    <Stack spacing={2} width='100%' alignItems='center' padding={{xs: 6, sm: 0}}>
      <Form />
    </Stack>
   </Container>
  )
}

export default App
