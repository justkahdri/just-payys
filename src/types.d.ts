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
    modifyPerson: (people_id: string[] | string, modifications: Partial<PersonT>) => void;
  }

  // EXPENSE
  interface NewExpense {
    id?: string;
    description: string;
    cost: number;
    payed_by: string;
    group_id: string;
    participants: string[];
    divided: "equal" | "custom";
    notes: string;
    expense_date: string;
  }

  interface ExpenseT extends NewExpense {
    id: string;
  }

  interface ExpensesContextState {
    expenses: ExpenseT[];
    addExpense: (expense: NewExpense) => void;
    removeExpense: (expense_id: string) => void;
  }
}

export {};
