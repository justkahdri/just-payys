import React, {createContext, useState, FC} from "react";
import {nanoid} from "nanoid";

const contextDefaultValues: ExpensesContextState = {
  expenses: [
    {
      id: "1",
      paid_by: "SELF",
      cost: 100.32,
      description: "example",
    },
  ],
  addExpense: () => {
    throw new Error("addExpense not implemented in ExpensesContext");
  },
  // removeExpense: () => {
  //   throw new Error("removeExpense not implemented in ExpensesContext");
  // },
};

export const ExpensesContext = createContext<ExpensesContextState>(contextDefaultValues);

const ExpensesProvider: FC = ({children}) => {
  const [expenses, setExpenses] = useState<ExpenseT[]>(contextDefaultValues.expenses);

  const addExpense = (expense: NewExpense) => {
    const newExpense = {id: nanoid(), ...expense};

    setExpenses((expenses) => [...expenses, newExpense]);
  };

  // const removeExpense = (id: string) =>
  //   setExpenses((expenses) => expenses.filter((exp) => exp.id !== id));

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        addExpense,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesProvider;
