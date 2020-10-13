//JUROS-COMPOSTOS//

let c = 50000
let i = 5
let n = 7

function jurosCompostos() {
    return c * (1 + i / 100) ** n
}
console.log('resposta', jurosCompostos())
