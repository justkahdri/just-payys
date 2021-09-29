declare global {
  // MAIN TYPES
  interface PersonT {
    id: string;
    name: string;
    notes: string;
    related_expenses: string[];
    groups: string[];
  }

  interface GroupT {
    id: string;
    name: string;
    simplified_debts: boolean;
    members: string[];
    related_expenses: string[];
  }

  interface ExpenseT {
    id: string;
    description: string;
    cost: number;
    payed_by: string;
    group_id: string;
    participants: string[];
    divided: "equal" | "custom";
  }

  // CONTEXT TYPES
  interface PeopleContextState {
    people: PersonT[];
    addPerson: (name: string, notes?: string) => void;
    removePerson: (person_id: string) => void;
    getPersonById: (person_id: string) => PersonT | undefined;
  }

  interface GroupsContextState {
    groups: GroupT[];
    addGroup: (name: string, simplified_debts: boolean, members: string[]) => void;
    removeGroup: (group_id: string) => void;
  }

  interface ExpensesContextState {
    expenses: ExpenseT[];
    addExpense: (expense: Expense) => void;
    removeExpense: (expense_id: string) => void;
  }
}

export {};
