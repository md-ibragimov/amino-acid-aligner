/* eslint-disable react-hooks/exhaustive-deps */

import {
    Box,
    TextField,
    Button,
    Paper,
    Snackbar,
    Alert
} from '@mui/material';
import { useEffect, useState } from 'react';

export default function Form() {
    const [isOpen, setIsOpen] = useState(false);
    const [errorText, setIsErrorText] = useState('');
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    let timeoutId;

    const handleSubmit = (event) => {
        event.preventDefault();

        if (firstValue.length === secondValue.length && firstValue.length > 0) {
            console.log(true);
        }
        else {
            setIsErrorText('Длина строк отличается.');
            setIsOpen(true);
        }
    };

    const handleFormValue = (value, mode) => {
        value = value.toUpperCase().trim();
        const validateArr = ['A', 'R', 'N', 'D', 'C', 'E', 'Q', 'G', 'H', 'I', 'L', 'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V', '-']

        if (validateArr.includes(value[value.length - 1]) || value.length === 0) {
            if (mode === 1) {
                setFirstValue(value)
            }
            if (mode === 2) {
                setSecondValue(value)
            }
        }

        else {
            setIsErrorText('Строка не соответствует аминокислотной последовательности');
            setIsOpen(true);
        }

    }

    const closeFn = () => {
        setIsOpen(false);
        timeoutId = setTimeout(() => {
            setIsErrorText('');
        }, 100);
    }

    useEffect(() => {
        
        return () => {
            clearTimeout(timeoutId);
        }
    }, [])



    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    maxWidth: 600,
                    p: 3,
                    mx: 'auto',
                    mt: 4
                }}
            >
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}
                >
                    <TextField
                        required
                        fullWidth
                        label="1 последовательность"
                        name="input1"
                        variant="outlined"
                        value={firstValue}
                        onChange={(event) => handleFormValue(event.target.value, 1)}

                    />

                    <TextField
                        required
                        fullWidth
                        label="2 последовательность"
                        name="input2"
                        variant="outlined"
                        value={secondValue}
                        onChange={(event) => handleFormValue(event.target.value, 2)}
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ mt: 2 }}
                    >
                        Обработать
                    </Button>
                </Box>
            </Paper>


            <Snackbar open={isOpen} autoHideDuration={1200} onClose={closeFn}>
                <Alert
                    onClose={closeFn}
                    severity="error"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {errorText}
                </Alert>
            </Snackbar>
        </>

    );
}