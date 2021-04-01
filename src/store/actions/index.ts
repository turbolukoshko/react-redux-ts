import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';

const ActionCreators = {
  ...TodoActionCreators,
  ...UserActionCreators,
};

export default ActionCreators;
