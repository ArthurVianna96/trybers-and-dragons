import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior.numberOfInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Warrior.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;