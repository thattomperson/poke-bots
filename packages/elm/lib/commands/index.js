const  Pokedex = require("pokedex-promise-v2");
const pokedex = new Pokedex();

function evolutions(msg, args) {
  pokedex.getPokemonSpeciesByName(args[0])
    .then(pokemon => pokedex.resource(pokemon.evolution_chain.url))
    .then(chain => {
      console.log(chain.chain.evolves_to[0].evolution_details)


      if (chain.chain.evolves_to[0].evolution_details[0].item) {
        msg.reply(`${chain.chain.species.name} evolves into ${chain.chain.evolves_to[0].species.name} when holding a ${chain.chain.evolves_to[0].evolution_details[0].item.name}`)
      } else {
        msg.reply(`${chain.chain.species.name} evolves into ${chain.chain.evolves_to[0].species.name} at level ${chain.chain.evolves_to[0].evolution_details[0].min_level}`)
      }
      
    })



  // pokedex.getEvolutionChainById(args[0])
  // .then(function(res) {
  //   console.log(res.chain.evolves_to[0]);
  // })
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });
}

function fact(msg, args) {
  const facts  = [
    'Azurill is the only Pokemon that can change gender.',
    'Psychic type Pokemon are weak to bug, ghost, and dark type because they\'re common fears.',
    'Sandshrews are hunted for their scales, go to <https://www.savepangolins.org/> to help save this endangered species'
  ]

  msg.reply(facts[Math.floor(Math.random()*facts.length)])
  
}

module.exports = {
  evolutions,
  fact
}

