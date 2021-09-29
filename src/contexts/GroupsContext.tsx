import React, {createContext, useState, FC} from "react";
import {nanoid} from "nanoid";

const contextDefaultValues: GroupsContextState = {
  groups: [],
  addGroup: () => {
    throw new Error("addGroup not implemented in GroupsContext");
  },
  removeGroup: () => {
    throw new Error("removeGroup not implemented in GroupsContext");
  },
};

export const GroupsContext = createContext<GroupsContextState>(contextDefaultValues);

const GroupsProvider: FC = ({children}) => {
  const [groups, setGroups] = useState<GroupT[]>(contextDefaultValues.groups);

  const addGroup = (name: string, simplified_debts: boolean, members: string[]) => {
    const newGroup = {name, simplified_debts, id: nanoid(10), members, related_expenses: []};

    setGroups((groups) => [...groups, newGroup]);
  };

  const removeGroup = (id: string) => setGroups((groups) => groups.filter((g) => g.id !== id));

  return (
    <GroupsContext.Provider
      value={{
        groups,
        addGroup,
        removeGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
