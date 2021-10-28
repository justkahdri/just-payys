declare global {
  // PERSON
  interface NewPerson {
    name: string;
  }

  interface PersonT extends NewPerson {
    id: string;
    personal_balance: number;
  }

  interface PeopleContextState {
    people: PersonT[];
    addPerson: (name: string) => void;
    removePerson: (person_id: string) => void;
    getPersonById: (person_id: string) => PersonT | undefined;
    divideEqual: (cost: number, payer_id: string, consumers_ids: string[]) => void;
  }

  // EXPENSE
  interface NewExpense {
    description: string;
    cost: number;
    paid_by: string;
  }

  interface ExpenseT extends NewExpense {
    id: string;
  }

  interface ExpensesContextState {
    expenses: ExpenseT[];
    addExpense: (expense: NewExpense) => void;
    // removeExpense: (expense_id: string) => void;
  }
}

export {};
