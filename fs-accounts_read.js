const fileSystemModule = require('fs');

//console.dir(fileSystemModule);

try {
    fileSystemModule.readFile('accounts.csv', 'utf-8', function (error, data) {

        if (error) {
            return console.error('Error:', error);
        }

        console.log(data);
    });
} catch (error) {
    console.error(error);
}

//const data = fileSystemModule.readFileSync('accounts.csv') ;
//console.log(data.toString());
console.log('Fin du programme');