
import '../App.css';

import { Typography, Grid, TextField, Button, Link, TextareaAutosize } from '@mui/material';

function Sobre() {

 

  return (
    

    <div className="App">

      


    
      <Grid className="form-sobre" container spacing={2}>

        <Typography variant="h1" className="h1-sobre" align="left" ml={2}>
            Sobre Nós
        </Typography>

        <Grid md={12} xs={12} item >

            <Typography variant="body2" className="p-sobre" align="left" pb={1} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis turpis vitae leo egestas, sit amet ultricies dui rutrum. Nulla auctor nulla ut sapien bibendum, ut tincidunt orci eleifend. Fusce et mollis erat. Duis lobortis ante a quam pharetra, nec vestibulum est laoreet. Nunc efficitur non mi placerat tristique. Proin eget elit non arcu bibendum dignissim id vel metus. Pellentesque porttitor facilisis nulla, ut aliquam dui ornare vel. Aenean gravida erat eget nisi tempor, eu ultrices augue posuere. Vivamus hendrerit mollis turpis, quis gravida leo malesuada in.
            </Typography>


        </Grid>

        <Grid md={12} xs={12} item >

            <Typography variant="body2" className="p-sobre"  align="left" pb={1} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis turpis vitae leo egestas, sit amet ultricies dui rutrum. Nulla auctor nulla ut sapien bibendum, ut tincidunt orci eleifend. Fusce et mollis erat. Duis lobortis ante a quam pharetra, nec vestibulum est laoreet. Nunc efficitur non mi placerat tristique. Proin eget elit non arcu bibendum dignissim id vel metus. Pellentesque porttitor facilisis nulla, ut aliquam dui ornare vel. Aenean gravida erat eget nisi tempor, eu ultrices augue posuere. Vivamus hendrerit mollis turpis, quis gravida leo malesuada in.
            </Typography>


        </Grid>


      </Grid>

    </div>

  );
}

export default Sobre;
