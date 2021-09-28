import React, {useState, useContext} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Stack, Input, Avatar, Textarea} from "@chakra-ui/react";
import {AiOutlineUserAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import NewItemForm from "@components/NewItemForm";
import {PeopleContext} from "@contexts";
import {ListedPerson} from "@components/ListedItem";

const PeoplePage: NextPage = () => {
  const {people} = useContext(PeopleContext);

  return (
    <Layout>
      <Head>
        <title>JustPayys - People</title>
      </Head>
      <Stack spacing={3}>
        {people.map((person) => (
          <ListedPerson key={person.id} {...person} />
        ))}
        <PeopleForm />
      </Stack>
    </Layout>
  );
};

const PeopleForm = () => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const {addPerson} = useContext(PeopleContext);

  const handleSubmit = async () => {
    if (name) {
      addPerson(name, notes);
      setName("");
      setNotes("");
    } else {
      throw new Error("You must enter a name.");
    }
  };

  return (
    <NewItemForm
      btnIcon={<AiOutlineUserAdd />}
      doneMessage="Save"
      openMessage="Add new person"
      onSubmit={handleSubmit}
    >
      <Stack align="center" direction="row">
        <Avatar name={name} src="https://bit.ly/tioluwani-kolawole" />
        <Input
          placeholder="John Doe"
          value={name}
          onChange={({currentTarget: {value}}) => setName(value)}
        />
      </Stack>
      <Textarea
        placeholder="Notes (optional)"
        resize="vertical"
        size="sm"
        value={notes}
        onChange={({currentTarget: {value}}) => setNotes(value)}
      />
    </NewItemForm>
  );
};

export default PeoplePage;
