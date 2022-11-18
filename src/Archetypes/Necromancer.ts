import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer.numberOfInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Necromancer.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;