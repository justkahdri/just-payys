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
  divideEqual: () => {
    throw new Error("divideEqual not implemented in PeopleContext");
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

  const divideEqual = (cost: number, paid_by: string, consumers_ids: string[]) => {
    const share = cost / consumers_ids.length;
    let newBalance: number;

    setPeople((people) =>
      people.map((p) => {
        newBalance = 0;
        if (paid_by === p.id) {
          newBalance += cost;
        }
        if (consumers_ids?.includes(p.id)) {
          newBalance -= share;
        }

        return {...p, personal_balance: p.personal_balance + newBalance};
      }),
    );
  };

  return (
    <PeopleContext.Provider
      value={{
        people,
        addPerson,
        removePerson,
        getPersonById,
        divideEqual,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleProvider;
