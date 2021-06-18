import { Breakpoint } from '@material-ui/system';
import { MapBreakpoint } from '../types';

export interface BaseRegistryConstructor<IRegistry> {
  new (id: string): IRegistry;
}

export interface IBaseRegistry<IConfig> {
  readonly id: string;
  rpsConfig: MapBreakpoint<IConfig>;
  hidden: Breakpoint[];
}
