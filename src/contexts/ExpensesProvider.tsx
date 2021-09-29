import React, {createContext, useState, FC} from "react";
import {nanoid} from "nanoid";

const contextDefaultValues: ExpensesContextState = {
  expenses: [],
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

  const addExpense = (expense: NewExpense) => {
    const newExpense = {id: nanoid(10), ...expense};

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
