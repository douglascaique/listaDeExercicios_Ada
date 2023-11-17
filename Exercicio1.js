// Crie uma função que receba como parâmetro a lista de hotifrutis abaixo que tem três tipos: frutas, legumes e verduras, faça com que essa função retorne o número de itens de cada um desses tipos.
// Sendo que:
// fruta → banana, maçã, abacaxi, melancia, laranja, limão.
// legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.
// verdura → alface, espinafre, rúcula, couve, agrião, acelga.

const hotifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão', 'cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata'];


// função para cada tipo de hortalicia
function listaHorti(hotifrutis) {
    const frutas = ['banana', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão'];
    const legumes = ['cenoura', 'batata', 'brócolis', 'abobora', 'tomate', 'alho-poro'];
    const verduras = ['alface', 'espinafre', 'rúcula', 'couve', 'agrião', 'acelga']
    // contador zerado para cada hortalicia
    let contagem = { frutas: 0, legumes: 0, verduras: 0 };

    // estrutura for para percorrer os arrays
    for (let i = 0; i < hotifrutis.length; i++) {
        if (frutas.includes(hotifrutis[i])) {
            contagem.frutas++;
        } else if (legumes.includes(hotifrutis[i])) {
            contagem.legumes++;
        } else if (verduras.includes(hotifrutis[i])) {
            contagem.verduras++;
        }
    }
    return contagem;
}

console.log(listaHorti(hotifrutis))