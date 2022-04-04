
import '../App.css';

import { Typography, Grid, TextField, Button, Link } from '@mui/material';

function Cadastro() {

 

  return (
    

    <div className="App">

      <Typography variant="h4" align="left" ml={2} mt={5} >
        Cadastro
      </Typography>


    
      <Grid className="form-container" container spacing={2}>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Nome:</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Telefone:</Typography>

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

        <Typography variant="body1" align="left" pb={1} >Senha:</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={6} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Confirmar senha:</Typography>

          <Grid md={12} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
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

export default Cadastro;
