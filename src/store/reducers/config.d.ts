import 'react-redux';
import { RootState } from './index';

declare module 'react-redux' {
  interface DefaultRootState extends RootState
}
