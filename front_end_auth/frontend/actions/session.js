import {
  postUser,
  deleteSession,
  postSession
} from '../utils/session';

export const RECEIEVE_CURRENT_USER = 'RECEIEVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const createNewUser = formUser => dispatch => postUser(formUser)
  .then(user => dispatch(receiveCurrentUser(user)));

export const login = formUser => dispatch => postSession(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

export const logout = () => dispatch => deleteSession()
  .then(() => dispatch(logoutCurrentUser()));

const receiveCurrentUser = user => {
  type: RECEIEVE_CURRENT_USER
  user
};

const logoutCurrentUser = () => {
  type: LOGOUT_CURRENT_USER
};
