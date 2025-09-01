//--------------------------------------------------------------------------------------
/*importando e inicializando o módulo prompt-sync, necessário no node.js para 
entrada de dados do usuário*/
const prompt = require('prompt-sync')();
//--------------------------------------------------------------------------------------
// criando a classe hero, que recebe 3 parâmetros.
/* os parâmetros recebem valores no constructor, para caso não seja informado durante a
criação do objeto, recebe um valor que seja diferente de 'undefined' que vem por padrão. 
No caso o objeto aqui já é atribuído um valor padrão, mas para evitar que a classe seja 
utilizada em outro código, ou em uma API e retorne um valor 'undefined' optei por deixar
aqui valores pré-definidos também.*/
class hero{
    constructor({heroName = 'Desconhecido', heroAge = 0, heroType = 'Unknow' } = {}){
// os parâmetros são atribuídos às propriedades do objeto (this.heroName...).
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }
// adicionando uma método dentro da classe.
    atacar(){
// criando uma variável para receber o resultado do método.
        let ataque;
/* estrutura switch para lidar com múltiplos casos. A depender do valor que o 
'this.heroType' recebe, é feito uma checagem, caso seja verdadeiro, armazena um valor na
variável 'ataque'.  */  
        switch (this.heroType){
// caso 'this.heroType' seja 'Guerreiro' ou 'guerreiro' executa esse trecho do switch.
            case "Guerreiro":
            case "guerreiro":
// valor que será armazenado na variável 'ataque'.
                ataque = 'usando a espada.';
// se esse 'case' for verdadeiro, 'break' finaliza a verificação e encerra o switch.
                break;
            case "Mago":
            case "mago":
                ataque = 'usando a magia.';
                break;
            case "Monge":
            case "monge":
                ataque = 'usando artes marciais.';
                break;
            case "Assassino":
            case "assassino":
                ataque = 'usando a shuriken.';
                break;
            default:
                ataque = 'sem arma definida.'
        }
// retornando a mensagem que deve ser exibida, com o tipo do herói e o tipo de ataque.
        console.log(`O ${this.heroType} atacou ${ataque}`);
    }
}
//--------------------------------------------------------------------------------------
// criando um objeto da classe 'hero'.
const heroWairror1 = new hero({
/* solicitando ao usuário que informe os valores que serão armazenados nos parâmetros 
que informados no constructor da classe.*/
/* caso o usuário não informe algo, o operador lógico 'ou' é acionado, e armazena um 
valor pré-informado, garantindo que não apareça a mensagem 'undefined'.*/
    heroName: prompt('Hero Name: ') || 'Unknow',
    heroAge: parseInt(prompt('Hero Age: ')) || 0,
    heroType: prompt('Choose your vocation: [Guerreiro], [Mago], [Monge], [Assassino] :') || 'No Class'
   
})
//--------------------------------------------------------------------------------------

/* chamando o objeto da classe hero, solicitando o método que retorna a mensagem 
solicitada no exercício. */
heroWairror1.atacar();