import React from 'react';
import { Container, Typography, Button,Grid } from '@mui/material';

import Navigation from '../components/Navigation';
import VideoBackground from '../components/VideoBackground';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import VideoComponent from '../components/VideoComponent';
import backgroundVideo from '../components/VideoBackground';
import ImageGallery from '../components/ImageGallery';
import Footer from '../components/Footer';


  const HomeScreen = () => {
    const containerStyle = {
      position: 'relative',
      overflow: 'hidden',
    };
  
    const videoStyle = {
      width: '100%',
      height: 'auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1',
    };


    
    
  return (
    <div style={containerStyle}>
      <video style={videoStyle} autoPlay muted loop playsInline>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      
      <VideoComponent />
      <VideoBackground />
      <Container>
        <Typography variant="h1" align="center" mt={5} border={3} color={'gold'} borderedtext={'black'} borderRadius={5} >
        Welcome to Our Hotel
        </Typography>
        <Typography variant="h5" align="center" mt={2} color={'white'}>
        A Luxurious Stay Awaits You
      </Typography>
      <Button variant="contained" color="primary" mt={10} >
        Book Now
      </Button>

      <Typography variant="body1" align="center" mt={2} color={'white'} fontSize={20} paddingBottom={10}>
        DISCOVER COMFORT, ELEGANCE, AND UNMATCHED SERVICE
      </Typography>
      
     
      <Grid container spacing={0}>
      </Grid>
      
      <ImageGallery/>
      
      <div>
      <Typography variant="body1" align="center" mt={10} color={'lightgoldenrodyellow'} fontStyle={'revert'} fontSize={48} >
      THE LUXURY COLOMBO SRI LANKA
      </Typography>
      </div>
   
      
      <div>
        
      <Typography variant="body1" align="justify" mt={5}  paddingTop={10} paddingRight={10} paddingBottom={48} paddingLeft={10} color={'black'} fontSize={20} className='image'  >
      For example, the sole breadwinner of a family may meet with an accident and die. The 
dependents face two immediately obvious forms of loss: - emotional and financial.
As another example, the premises of a factory might be destroyed by fire. Here, the owners of 
the factory face, besides other losses, the loss in income which the factory would be able to 
generate if the fire had not occurred. On the other hand, those employed by the factory owner 
face the prospect of redundancy and unemployment.
We can give countless examples of events which lead to human grief and financial loss.
In answering the above question, we have to admit that not all forms of loss can be made good. 
For instance, the emotional trauma arising from the death of a loved one cannot be made good by 
any conceivable compensatory system.
A peril identifies the cause of a risk. Common perils include fire, theft, injury, accidental damage, 
negligence and storm. When a peril does occur an economic loss or decrease in value results. The extent 
of that loss may depend on the hazards associated with the risk. Hazards are factors contributing to the 
risk. There are two types of hazards.
      </Typography>
      </div>
      <Typography variant="body1" align="justify" mt={5}  paddingTop={10} paddingRight={10} paddingBottom={48} paddingLeft={10} color={'white'} fontSize={20}   >
      For example, the sole breadwinner of a family may meet with an accident and die. The 
dependents face two immediately obvious forms of loss: - emotional and financial.
As another example, the premises of a factory might be destroyed by fire. Here, the owners of 
the factory face, besides other losses, the loss in income which the factory would be able to 
generate if the fire had not occurred. On the other hand, those employed by the factory owner 
face the prospect of redundancy and unemployment.
We can give countless examples of events which lead to human grief and financial loss.
In answering the above question, we have to admit that not all forms of loss can be made good. 
For instance, the emotional trauma arising from the death of a loved one cannot be made good by 
any conceivable compensatory system.

      </Typography>

      

      </Container>

      <Footer />
    </div>
  );
  
};


export default HomeScreen;



/*export default App;*/

