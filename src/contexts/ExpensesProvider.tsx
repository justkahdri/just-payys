import React, {createContext, useContext, useState, FC} from "react";
import {nanoid} from "nanoid";

import {GroupsContext, PeopleContext} from "@contexts";

const contextDefaultValues: ExpensesContextState = {
  expenses: [
    {
      id: "1",
      payed_by: "SELF",
      group_id: "a",
      participants: ["SELF"],
      divided: "equal",
      notes: "an example note.",
      expense_date: "2011-10-05",
      cost: 100.32,
      description: "example",
    },
  ],
  addExpense: () => {
    throw new Error("addExpense not implemented in ExpensesContext");
  },
  removeExpense: () => {
    throw new Error("removeExpense not implemented in ExpensesContext");
  },
};

export const ExpensesContext = createContext<ExpensesContextState>(contextDefaultValues);

const ExpensesProvider: FC = ({children}) => {
  const [expenses, setExpenses] = useState<ExpenseT[]>(contextDefaultValues.expenses);
  const {modifyGroup} = useContext(GroupsContext);
  const {modifyPerson} = useContext(PeopleContext);

  const addExpense = (expense: NewExpense) => {
    const newExpense = {id: nanoid(10), ...expense};

    modifyGroup(newExpense.group_id, {related_expenses: [newExpense.id]});
    modifyPerson(newExpense.participants, {related_expenses: [newExpense.id]});

    setExpenses((expenses) => [...expenses, newExpense]);
  };

  const removeExpense = (id: string) =>
    setExpenses((expenses) => expenses.filter((exp) => exp.id !== id));

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
        removeExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
