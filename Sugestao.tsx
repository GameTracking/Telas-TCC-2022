
import '../App.css';

import { Typography, Grid, TextField, Button, Link, TextareaAutosize } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import Box from '@mui/material/Box';

function Sugestao() {


  const classes = useStyles();


  return (


    <div className="App">

      <Typography variant="h4" align="left" ml={1} mt={5} >
        Enviar Sugestão
      </Typography>



      <Grid className="form-container" container spacing={2}>

        <Grid md={6} xs={12} item >

          <Typography variant="body1" align="left" pb={1} >Nome:</Typography>

          <Grid md={12} item >
            <Box sx={{ boxShadow: 2 }}>
              <TextField
                InputProps={{
                  className: classes.input,
                  disableUnderline: true,
                }}
                className="entrada"
                fullWidth={true}
                size="small"
                variant="standard"
              />
            </Box>
          </Grid>

        </Grid>



        <Grid md={6} xs={12} item >

          <Typography variant="body1" align="left" pb={1} >Email:</Typography>

          <Grid md={12} item >
            <Box sx={{ boxShadow: 2 }}>
              <TextField
                InputProps={{
                  className: classes.input,
                  disableUnderline: true,
                }}
                className="entrada"
                fullWidth={true}
                size="small"
                variant="standard"
              />
            </Box>
          </Grid>

        </Grid>



        <Grid md={6} xs={12} item >

          <Typography variant="body1" align="left" pb={1} >Telefone (opcional):</Typography>

          <Grid md={12} item >
            <Box sx={{ boxShadow: 2 }}>
              <TextField
                InputProps={{
                  className: classes.input,
                  disableUnderline: true,
                }}
                className="entrada"
                fullWidth={true}
                size="small"
                variant="standard"
              />
            </Box>
          </Grid>

          <Grid md={12} item mt={7}  >
            <div className="enviar" >
              <Button style={{ background: "#97A8FF", color: "#000" }} variant="contained">Enviar</Button>
            </div>
          </Grid>

        </Grid>


        <Grid md={6} xs={12} item >

          <Typography variant="body1" align="left" pb={1} >Mensagem:</Typography>

          <Grid md={12} item >
            <Box sx={{ boxShadow: 2 }}>
              <TextField
                InputProps={{
                  className: classes.input,
                  disableUnderline: true,
                }}
                className="entrada"
                fullWidth={true}
                size="small"
                variant="standard"
                multiline
                rows={5}
              />
            </Box>
          </Grid>

        </Grid>



      </Grid>

    </div>

  );
}

const useStyles = makeStyles(() => ({
  input: {
    backgroundColor: "#FFF",
    padding: 5
  }
}));

export default Sugestao;
