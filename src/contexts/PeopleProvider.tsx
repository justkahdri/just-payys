import React, {createContext, useState, FC} from "react";
import {nanoid} from "nanoid";

const contextDefaultValues: PeopleContextState = {
  people: [],
  addPerson: () => {
    throw new Error("addPerson not implemented in PeopleContext");
  },
  removePerson: () => {
    throw new Error("removePerson not implemented in PeopleContext");
  },
};

export const PeopleContext = createContext<PeopleContextState>(contextDefaultValues);

const PeopleProvider: FC = ({children}) => {
  const [people, setPeople] = useState<PersonT[]>(contextDefaultValues.people);

  const addPerson = (name: string, notes = "") => {
    const newPerson = {name, notes, id: nanoid(10), groups: [], related_expenses: []};

    setPeople((people) => [...people, newPerson]);
  };

  const removePerson = (id: string) => setPeople((people) => people.filter((p) => p.id !== id));

  return (
    <PeopleContext.Provider
      value={{
        people,
        addPerson,
        removePerson,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
