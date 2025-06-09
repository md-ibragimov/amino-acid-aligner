import {
    Box,
    TextField,
    Button,
    Paper
} from '@mui/material';

export default function Form    () {
    const handleSubmit = (event) => {
        event.preventDefault();
        // обработка отправки формы
    };

    return (
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
                />

                <TextField
                    required
                    fullWidth
                    label="2 последовательность"
                    name="input2"
                    variant="outlined"
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
    );
}