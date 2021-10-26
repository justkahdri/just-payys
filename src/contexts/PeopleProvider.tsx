import React, {createContext, useState, FC} from "react";
import {nanoid} from "nanoid";

const contextDefaultValues: PeopleContextState = {
  people: [
    {
      id: "SELF",
      name: "You",
      personal_balance: 0,
    },
  ],
  addPerson: () => {
    throw new Error("addPerson not implemented in PeopleContext");
  },
  removePerson: () => {
    throw new Error("removePerson not implemented in PeopleContext");
  },
  getPersonById: () => {
    throw new Error("getPersonById not implemented in PeopleContext");
  },
  modifyPerson: () => {
    throw new Error("modifyPerson not implemented in PeopleContext");
  },
};

export const PeopleContext = createContext<PeopleContextState>(contextDefaultValues);

const PeopleProvider: FC = ({children}) => {
  const [people, setPeople] = useState<PersonT[]>(contextDefaultValues.people);

  const addPerson = (name: string) => {
    const newPerson = {name, id: nanoid(), personal_balance: 0};

    setPeople((people) => [...people, newPerson]);
  };

  const removePerson = (id: string) => setPeople((people) => people.filter((p) => p.id !== id));
  const getPersonById = (id: string) => people.find((p) => p.id == id);
  const modifyPerson = (ids: string | string[], mods: Partial<PersonT>) => {
    setPeople((people) =>
      // Maps through all people and returns the array
      // with the modified person (or persons) in the same order.
      people.map((p) => (ids.includes(p.id) ? {...p, ...mods} : p)),
    );
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        addPerson,
        modifyPerson,
        removePerson,
        getPersonById,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
