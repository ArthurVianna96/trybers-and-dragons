import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Mage.numberOfInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;