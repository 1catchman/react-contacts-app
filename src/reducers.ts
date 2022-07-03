import { UserType } from './context';

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Select = 'SELECT_USER',
  Remove = 'REMOVE_USER',
  SelectAll = 'SELECT_ALL',
  RemoveAll = 'REMOVE_ALL',
  Add = 'ADD_USERS'
}

type SelectedUsersPayload = {
  [Types.Select]: string;
  [Types.Remove]: string;
  [Types.SelectAll]: string[];
  [Types.RemoveAll]: null;
};

export type SelectedUsersActions =
  ActionMap<SelectedUsersPayload>[keyof ActionMap<SelectedUsersPayload>];

export const selectedUsersReducer = (
  state: string[],
  action: SelectedUsersActions
) => {
  switch (action.type) {
    case 'SELECT_USER':
      return [...state, action.payload];
    case 'REMOVE_USER':
      return [
        ...state.filter((user: string) => user !== action.payload)
      ];
    case 'SELECT_ALL':
      return [...state, ...action.payload];
    case 'REMOVE_ALL':
      return [];
    default:
      return state;
  }
};

type UsersPayload = {
  [Types.Add]: UserType[];
};

export type UsersActions =
  ActionMap<UsersPayload>[keyof ActionMap<UsersPayload>];

export const usersReducer = (
  state: UserType[],
  action: UsersActions
) => {
  switch (action.type) {
    case 'ADD_USERS':
      return [...state, ...action.payload];
    default:
      return state;
  }
};
