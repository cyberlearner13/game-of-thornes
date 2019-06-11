const express = require('express');
const app = express();

app.get('/',(req,res)=>res.send('Winter is Coming'))
app.listen(4500,()=>console.log('Server started'));
