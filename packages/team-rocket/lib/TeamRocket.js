import { Client } from 'discord.js';
import env from '.env'


function findRoute1(a) {
  return a.name === 'route-1'
  // return false
}

// // If you're trying to catch the interrupt signal SIGINT, you don't need to read from the keyboard. The process object of nodejs exposes an interrupt event:
class TeamRocket {
  meowth = new Client();
  james = new Client();
  jessie = new Client();

  constructor() {
    this.welcomePrep()
      .then(() => this.welcome())

    this.meowth.login(env.meowth);
    this.james.login(env.james);
    this.jessie.login(env.jessie);
  }

  welcomePrep() {
    return Promise.all([this.meowth, this.james, this.jessie].map(m => {
      return new Promise((resolve) => {
        m.on('ready', () => {
          console.log(`Logged in as ${m.user.tag}!`);
          m.user.setActivity('Blasting Off')
          resolve(m)
        })
      })
    }))
  }

  welcome() {
    let meo = this.meowth.channels.find(findRoute1)
    let jim = this.james.channels.find(findRoute1)
    let jes = this.jessie.channels.find(findRoute1)

    jes.send('Prepare for trouble!')
      .then(() => jim.send('Make it double!'))
      .then(() => jes.send('To protect the world from devastation!'))
      .then(() => jim.send('To unite all peoples within our nation!'))
      .then(() => jes.send('To denounce the evils of truth and love!'))
      .then(() => jim.send('To extend our reach to the stars above!'))
      .then(() => jes.send('Jessie!'))
      .then(() => jim.send('James!'))
      .then(() => jes.send('Team Rocket, blast off at the speed of light!'))
      .then(() => jim.send('Surrender now, or prepare to fight!'))
      .then(() => meo.send('Meowth! That\'s right!'))
  }

  close() {
    let meo = this.meowth.channels.find(findRoute1)
    let jim = this.james.channels.find(findRoute1)
    let jes = this.jessie.channels.find(findRoute1)

    return Promise.all([
      jim.send("Looks like Team Rocket's blasting off again"),
      jes.send("Looks like Team Rocket's blasting off again"),
      meo.send("Looks like Team Rocket's blasting off again"),
    ])
  }
}

const t = new TeamRocket()
process.on('SIGINT', function() {
  t.close().then(() => process.exit(0))
});
