import express from 'express';  
import dotenv from 'dotenv';  
import bodyParser from 'body-parser';  

dotenv.config();  

const app = express();  
app.use(bodyParser.json());  

app.get('/health', (req, res) => {    
  res.send('Healthy');  
});  

app.post('/episodes/start', (req, res) => {    
  // Add functionality to start an episode  
  res.send('Episode started');  
});  

app.post('/episodes/stop', (req, res) => {    
  // Add functionality to stop an episode  
  res.send('Episode stopped');  
});  

const PORT = process.env.PORT || 3333;  
app.listen(PORT, () => {    
  console.log(`Server is running on port ${PORT}`);  
});