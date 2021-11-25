class Flute{
    play(note){
        console.log(`${note} is played in Flute mode`)
       }
}

class Guitar{
    play(note){
        console.log(`${note} is played in Guitar mode`)
       }
}

class Piano{
    play(note){
        console.log(`${note} is played in Piano mode`)
       }
}

class Accordion{
    play(note){
        console.log(`${note} is played in Accordion mode`)
       }
}

class MelodyPlayer{
    playAllNotes(){
             let flute=new Flute();
             let piano=new Piano();
             let guitar=new Guitar();
             let accordion=new Accordion();
             let orchestra=[flute,piano,guitar,accordion];
             for(let instrument of orchestra){
                 instrument.play('do')
             }
    }

}

function main(){
   let mp=new MelodyPlayer();
   mp.playAllNotes();
}


main();
