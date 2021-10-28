import React, {FC} from "react";

export {PeopleContext} from "./PeopleProvider";
export {ExpensesContext} from "./ExpensesProvider";

import PeopleProvider from "./PeopleProvider";
import ExpensesProvider from "./ExpensesProvider";

export const MainProvider: FC = ({children}) => (
  <PeopleProvider>
    <ExpensesProvider>{children}</ExpensesProvider>
  </PeopleProvider>
);
