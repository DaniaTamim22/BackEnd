const fs = require('fs')


//Läsa filer

// fs.readFile('./mapp/text.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// console.log('det här ligger efter')


//Skriva filer 

// fs.writeFile('./mapp/text.txt', 'Ny text.', () => {
//     console.log('ändrade på texten ')
// })



// fs.writeFile('./mapp/text2.txt', 'Ny text.', () => {
//     console.log('ändrade på texten ')
// })

fs.appendFile('./mapp/text.txt', 'Ny text. \n skriver text som vi har lagt till', () => {
    console.log('la till text ')
})