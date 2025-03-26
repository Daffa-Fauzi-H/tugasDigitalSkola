import {kalkulator} from './rumus.js' 
import readline from 'readline'

const inputUser = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

inputUser.question('masukkan angka pertama:', angka1 =>{
    inputUser.question('masukkan angka kedua:', angka2 =>{
        inputUser.question('masukkan operator (+,-,*,/):', operator=>{
            console.log(
                `hasil: ${kalkulator(parseFloat(angka1), parseFloat(angka2), operator)}`
              )
            inputUser.close()
        })
    })
})