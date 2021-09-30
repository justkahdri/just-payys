import React, {FC} from "react";

export {PeopleContext} from "./PeopleProvider";
export {GroupsContext} from "./GroupsProvider";
export {ExpensesContext} from "./ExpensesProvider";

import PeopleProvider from "./PeopleProvider";
import GroupsProvider from "./GroupsProvider";
import ExpensesProvider from "./ExpensesProvider";

export const MainProvider: FC = ({children}) => (
  <PeopleProvider>
    <GroupsProvider>
      <ExpensesProvider>{children}</ExpensesProvider>
    </GroupsProvider>
  </PeopleProvider>
);
