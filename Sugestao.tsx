
import '../App.css';

import { Typography, Grid, TextField, Button, Link, TextareaAutosize } from '@mui/material';

function Sugestao() {

 

  return (
    

    <div className="App">

      <Typography variant="h4" align="left" ml={2} mt={5} >
        Enviar Sugestão
      </Typography>


    
      <Grid className="form-container" container spacing={2}>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Nome:</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Telefone (Opcional):</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Email:</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Mensagem:</Typography>

          <Grid md={12} item >
            <TextareaAutosize
                aria-label="minimum height"
                minRows={8}
                placeholder="Digite sua mensagem"
                style={{ width: "99%", resize: "none" }}
                />
          </Grid>

        </Grid>

        <Grid md={12} item >
        <div className="enviar" >
            <Button variant="contained">Cadatrar</Button>
            <Link ml={2} href="#" variant="body1">
            {'Já possuí uma conta ? Logar-se'}
            </Link>
         </div>
        </Grid>

      </Grid>

    </div>

  );
}

export default Sugestao;
