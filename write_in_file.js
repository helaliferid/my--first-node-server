const fs=require('fs');


fs.writeFile('copy_of_accounts.csv','code;label;class\n41100;clients;4',(err)=>{
    console.error(err);
});