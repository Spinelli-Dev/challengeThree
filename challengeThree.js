const prompt = require('prompt-sync')();

class hero{
    constructor({heroName = 'Desconhecido', heroAge = 0, heroType = 'Unknow' } = {}){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType;
    }
}

const heroWairror1 = new hero({
    heroName: prompt('Hero Name: ') || 'Unknow',
    heroAge: parseInt(prompt('Hero Age: ')) || 0,
    heroType: prompt('Choose your vocation: [Guerreiro], [Mago], [Monge], [Assassino] :') || 'No Class'
    
})

console.log(heroWairror1);