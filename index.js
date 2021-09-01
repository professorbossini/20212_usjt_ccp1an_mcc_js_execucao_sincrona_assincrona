const axios = require('axios')
// function fatorial (n){
//     if (n < 0) return Promise.reject ("Valor não pode ser negativo")
//     let res = 1
//     for (let i = 2; i <= n; i++)
//         res *= i
//     return Promise.resolve(res)
// }

// function chamaUsandoThenCatch(){
//     fatorial(5)
//     .then (res => console.log ("Res: " + res))
//     .catch (erro => console.log ("Erro: " + erro))

//     fatorial (-1)
//     .then (res => console.log ("Res: " + res))
//     .catch (erro => console.log("Erro: " + erro))
// }

// // chamaUsandoThenCatch()


// async function chamaUsandoAwait (){
//     try{
//         const f1 = await fatorial(5)
//         console.log ("f1: " + f1)
//         const f2 = await fatorial (-1)
//         console.log ("f2: " + f2)
//     }catch (e){
//         console.log ("e: " + e)
//     }
// }

// chamaUsandoAwait()





// async function hello (nome){
//     return (`Hello, ${nome}`)
// }

// const resultado = hello ('João')
// resultado.then(texto => console.log (texto))

// function helloSync (nome){
//     return `Hello, ${nome}`
// }

// function helloAsync (nome){
//     return Promise.resolve(`Hello, ${nome}`)
// }

// const resultado = helloSync ('João')
// console.log(resultado)

// helloAsync('João')
// .then(res => console.log (res))


// const axios = require('axios')

// const appid = 'ef0b0973b783e0614ac87612ec04344b'

// const q = 'Itu'

// const units = 'metric'

// const lang = "pt_br"

// const cnt = 10

// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

// // console.log(url)

async function test() {
    const appid = 'ef0b0973b783e0614ac87612ec04344b'

    const q = 'Itu'

    const units = 'metric'

    const lang = "pt_br"

    const cnt = 10

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`
    try {
        const response = await axios.get(url)
        const data = response.data
        const lista = data.list
        for (let previsao of lista) {
            console.log(` ${new Date(+previsao.dt * 1000).toLocaleString()}, Min: ${previsao['main']['temp_min']}\u00B0C, Max: ${previsao['main']['temp_max']}\u00B0C, Hum: ${previsao['main']['humidity']}%, ${previsao['weather'][0]['description']} `)
        }
        const aux = lista.filter(previsao => previsao['weather'][0]['description'].startsWith('c'))
        console.log(aux.length)
    } catch (error) { console.log(`Error: ${error}`) }
}
test()

// async function ex (){


// const appid = 'ef0b0973b783e0614ac87612ec04344b'

// const q = 'Itu'

// const units = 'metric'

// const lang = "pt_br"

// const cnt = 10

// const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&units=${units}&appid=${appid}&lang=${lang}&cnt=${cnt}`

// const data = await axios.get(url)
// console.log (data)

// }

// ex()

// axios.get(url)
//     .then(res => {
//         //console.log(res)
//         return res.data
//     })
//     .then(x => {
//         //console.log("Quantidade: " + x.cnt)
//         return x['list']
//     })
//     .then(res => {
//         //console.log ("A lista: " + res)
//         return res
//     })
//     .then(lista => {
//         for (let previsao of lista) {
//             //console.log("Previsao da vez: " + JSON.stringify(previsao))
//             console.log(`
//             ${new Date(+previsao.dt * 1000).toLocaleString()},
//             Min: ${previsao['main']['temp_min']}\u00B0C,
//             Max: ${previsao['main']['temp_max']}\u00B0C,
//             Hum: ${previsao['main']['humidity']}%,
//             ${previsao['weather'][0]['description']}
//         `
//             )
//         }
//         return lista
//     })
//     // .then(lista => { let count = 0; for (previsao of lista) { if (String(previsao['weather'][0]['description']).startsWith('c')) { count += 1; } } console.log(count) })
//     // .then(lista => { let aux = 0; for (let i of lista) { if (i['weather'][0]['description'].substr(0, 1) === 'c') { aux += 1 } } console.log(aux) })
//     .then (lista => {
//         const aux = lista.filter (previsao => previsao['weather'][0]['description'].startsWith('c'))
//         console.log (aux.length)
//     })





// //quero somar 1 + 2 + 3 + ... + n
// function calculoRapidinho (numero){
//     return numero >= 0 ?
//     Promise.resolve ((numero * (numero + 1)) / 2)
//     : Promise.reject ('Somente valores positivos, por favor')
// }

// calculoRapidinho(-1)
// .then (res => {
//     console.log(res)
// })
// .catch (erro => {
//     console.log ("Erro: " + erro)
// })


// calculoRapidinho(10)
// .then (res => {
//     console.log (res)
// })
// .catch (erro => {
//     console.log ("Erro: " + erro)
// })



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
