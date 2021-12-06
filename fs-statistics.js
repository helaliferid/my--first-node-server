const fs=require('fs')

fs.stat('accounts.csv',(error,stats)=>{
    if(error){
        return console.error(error)
    }else{
        console.log(stats.isFile());
        console.log(stats.isDirectory());
        console.log(stats.size);
    }
})