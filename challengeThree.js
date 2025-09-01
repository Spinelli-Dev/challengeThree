const prompt = require('prompt-sync')();

class hero{
    constructor({heroName = 'Desconhecido', heroAge = 0, heroType = 'Unknow' } = {}){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }

    atacar(){
        let ataque;
    
        switch (this.heroType){
            case "Guerreiro":
            case "guerreiro":
                ataque = 'usando a espada.';
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
        console.log(`O ${this.heroType} atacou ${ataque}`);
    }
}

const heroWairror1 = new hero({
    heroName: prompt('Hero Name: ') || 'Unknow',
    heroAge: parseInt(prompt('Hero Age: ')) || 0,
    heroType: prompt('Choose your vocation: [Guerreiro], [Mago], [Monge], [Assassino] :') || 'No Class'
   
})

heroWairror1.atacar();