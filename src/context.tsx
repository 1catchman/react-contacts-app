import React, { createContext, useReducer } from 'react';
import {
  selectedUsersReducer,
  usersReducer,
  SelectedUsersActions,
  UsersActions
} from './reducers';

export interface UserType {
  login: {
    uuid: string;
  };
  name: {
    first: string;
    last: string;
  };
  phone: string;
  picture: {
    thumbnail: string;
  };
}

interface InitialStateType {
  users: UserType[];
  selectedUsers: string[];
}

const initialState: InitialStateType = {
  users: [],
  selectedUsers: []
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<SelectedUsersActions | UsersActions>;
}>({ state: initialState, dispatch: () => null });

const mainReducer = (
  { users, selectedUsers }: InitialStateType,
  action: any
) => ({
  selectedUsers: selectedUsersReducer(selectedUsers, action),
  users: usersReducer(users, action)
});

interface Props {
  children?: React.ReactNode;
}
const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
