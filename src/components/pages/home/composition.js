import { compose } from 'recompose';

import withStatics from 'helpers/rendering/statics/set';
import withStyle from './style';
import withDB from 'behaviors/db';

import * as statics from './statics';

//usar connect ants do db pra puxar info da store via props
export default compose(
  withDB,
  withStatics(statics),
  withStyle
);
