//quero somar 1 + 2 + 3 + ... + n
function calculoRapidinho (numero){
    return Promise.resolve ((numero * (numero + 1)) / 2)
}

calculoRapidinho(10000).then (res => {
    console.log (res)
})



// function calculoDemorado (numero){
//     return new Promise (function (resolve, reject){
//         let res = 0
//         for (let i = 1; i <= numero; i++){
//             res += i
//         }
//         resolve(res)
//     })
// }

// let p = calculoDemorado(10)

// p.then((res) => { console.log ("Res: " + res)})




// const soma = calculoDemorado (10)
// console.log(soma)


// const fs = require ('fs')

//1 abrir o arquivo
//2 ler e exibir o conteudo
//3 calcular o dobro e escrever no arquivo dobro.txt
//4 dizer que tudo deu certo



//inferno de callbacks
// const abrirArquivo = function (nomeArquivo){
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log (`Deu erro: ${erro}`)
//         }
//         else{
//             console.log (`Conteúdo: ${conteudo.toString()}`)
//             const dobro = +conteudo.toString() * 2
//             const finalizar = function (erro){
//                 console.log (`${erro ? 'Deu erro' : 'Ok, dobro armazenado'}`)
//             }
//             fs.writeFile ('dobro.txt', dobro.toString(), finalizar)
//             console.log ('Depois de escrever o arquivo')
//         }
//     }
//     fs.readFile(nomeArquivo, exibirConteudo)
//     console.log("Depois de ler o arquivo")
// }

// abrirArquivo("arquivo.txt")





// const fs = require ('fs')
// const abrirArquivo = function (nomeArquivo){

//     //função callback
//     const exibirConteudo = function (erro, conteudo){
//         if (erro){
//             console.log (`Deu erro: ${erro}`)
//         }
//         else{
//             console.log(conteudo.toString())
//         }
//     }

//     fs.readFile (nomeArquivo, exibirConteudo)
//     console.log ("Depois do readFile")
// }

// abrirArquivo('arquivo.txt')


// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9

// setTimeout (function (){
//     const d = demorada()
//     console.log("d: " + d)
// }, 0)

// const e = a + b
// console.log("e: " + e)



// function demorada (){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos); //NO-OP
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()

// const e = 2 + a + b
// console.log(e)
