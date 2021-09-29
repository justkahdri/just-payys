declare global {
  // PERSON
  interface NewPerson {
    id?: string;
    name: string;
    notes?: string;
  }

  interface PersonT extends NewPerson {
    id: string;
    related_expenses: string[];
    groups: string[];
  }

  interface PeopleContextState {
    people: PersonT[];
    addPerson: (name: string, notes?: string) => void;
    removePerson: (person_id: string) => void;
    getPersonById: (person_id: string) => PersonT | undefined;
  }

  // GROUP OF PEOPLE
  interface NewGroup {
    id?: string;
    name: string;
    simplified_debts: boolean;
    members: string[];
  }

  interface GroupT extends NewGroup {
    id: string;
    related_expenses: string[];
  }

  interface GroupsContextState {
    groups: GroupT[];
    addGroup: (name: string, simplified_debts: boolean, members: string[]) => void;
    removeGroup: (group_id: string) => void;
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
