import React, {createContext, useState, useContext, FC} from "react";
import {nanoid} from "nanoid";

import {PeopleContext} from "@contexts";

const contextDefaultValues: GroupsContextState = {
  groups: [],
  addGroup: () => {
    throw new Error("addGroup not implemented in GroupsContext");
  },
  removeGroup: () => {
    throw new Error("removeGroup not implemented in GroupsContext");
  },
  getGroupById: () => {
    throw new Error("getGroupById not implemented in GroupsContext");
  },
  modifyGroup: () => {
    throw new Error("modifyGroup not implemented in GroupsContext");
  },
};

export const GroupsContext = createContext<GroupsContextState>(contextDefaultValues);

const GroupsProvider: FC = ({children}) => {
  const [groups, setGroups] = useState<GroupT[]>(contextDefaultValues.groups);
  const {modifyPerson} = useContext(PeopleContext);

  const addGroup = (name: string, simplified_debts: boolean, members: string[]) => {
    const newGroup = {name, simplified_debts, id: nanoid(10), members, related_expenses: []};

    modifyPerson(members, {groups: [newGroup.id]});

    setGroups((groups) => [...groups, newGroup]);
  };

  const removeGroup = (id: string) => setGroups((groups) => groups.filter((g) => g.id !== id));
  const getGroupById = (id: string) => groups.find((g) => g.id == id);
  const modifyGroup = (id: string, mods: Partial<GroupT>) => {
    setGroups((groups) =>
      // Maps through all groups and returns the array
      // with the modified group in the same order.
      groups.map((g) =>
        g.id == id
          ? {
              ...g,
              ...mods, // Appends modifications to old group
              members: g.members.concat(mods.members || []),
              related_expenses: g.related_expenses.concat(mods.related_expenses || []),
            }
          : g,
      ),
    );
  };

  return (
    <GroupsContext.Provider
      value={{
        groups,
        addGroup,
        removeGroup,
        getGroupById,
        modifyGroup,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
