import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Enemies = (Fighter | SimpleFighter)[];

class PVE extends Battle {
  constructor(protected player: Fighter, protected enemies: Enemies) {
    super(player);
  }

  fight(): number {
    const remainingEnemies = this.enemies;
    while (remainingEnemies.length > 0 && this.player.lifePoints !== -1) {
      this.player.attack(remainingEnemies[0]);
      if (remainingEnemies[0].lifePoints < 0) {
        remainingEnemies.shift();
      }
      remainingEnemies.forEach((enemie) => enemie.attack(this.player));
    }

    return super.fight();
  }
}

export default PVE;