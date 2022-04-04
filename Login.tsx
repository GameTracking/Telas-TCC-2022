
import '../App.css';

import { Typography, Grid, TextField, Button, Link } from '@mui/material';

function Login() {

 

  return (
    

    <div className="App">

      <Typography variant="h4" align="left" ml={2} mt={5} >
        Login
      </Typography>


    
      <Grid className="form-container" container spacing={2}>

        <Grid md={12} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Email:</Typography>

          <Grid md={6} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={12} xs={12} item >

        <Typography variant="body1" align="left" pb={1} >Senha:</Typography>

          <Grid md={6} item >
            <TextField  className="entrada" fullWidth={true} size="small" />
          </Grid>

        </Grid>

        <Grid md={12} item >
          <div className="enviar" >
            <Button variant="contained">Login</Button>
            <Link ml={2} href="#" variant="body1">
              {'Não possuí uma conta ? Cadastrar-se'}
            </Link>
          </div>
      </Grid>

      </Grid>

    </div>

  );
}

export default Login;
