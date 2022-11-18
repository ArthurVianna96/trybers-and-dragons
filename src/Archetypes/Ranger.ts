import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  static numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger.numberOfInstances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    return Ranger.numberOfInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;