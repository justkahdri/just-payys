import React, {useState, useContext, RefObject, useRef} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Stack, Input, Text, Avatar, Textarea} from "@chakra-ui/react";
import {AiOutlineUserAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import CollapseForm from "@components/CollapseForm";
import {PeopleContext} from "@contexts";
import {ListedPerson} from "@components/ListedItem";
import {CustomError} from "@utils";

const PeoplePage: NextPage = () => {
  const {people} = useContext(PeopleContext);

  return (
    <Layout>
      <Head>
        <title>JustPayys - People</title>
      </Head>
      <Stack spacing={3}>
        {people.length ? (
          people.map((person) => <ListedPerson key={person.id} {...person} />)
        ) : (
          <Text color="whiteAlpha.700" fontStyle="italic" textAlign="center">
            There are no people yet. Add a new person below.
          </Text>
        )}
        <PeopleForm />
      </Stack>
    </Layout>
  );
};

const PeopleForm = () => {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const {addPerson} = useContext(PeopleContext);
  const nameInput = useRef() as RefObject<HTMLInputElement>;

  const handleSubmit = async () => {
    // Adds to context if name is defined
    if (name) {
      addPerson(name, notes);
      // Resets inputs
      setName("");
      setNotes("");
    } else {
      throw new CustomError(
        "A name is required.",
        "Please enter a name or nickname for the person.",
      );
    }
  };

  return (
    <CollapseForm
      btnIcon={<AiOutlineUserAdd />}
      doneMessage="Save"
      focusOnOpen={nameInput}
      isDisabled={!name}
      openMessage="Add new person"
      onSubmit={handleSubmit}
    >
      <Stack align="center" direction="row">
        <Avatar name={name} />
        <Input
          ref={nameInput}
          placeholder="John Doe"
          value={name}
          onChange={({currentTarget: {value}}) => setName(value)}
          // onKeyUp={({code}) => code == "Enter" && handleSubmit()}
        />
      </Stack>
      <Textarea
        placeholder="Notes (optional)"
        resize="vertical"
        size="sm"
        value={notes}
        onChange={({currentTarget: {value}}) => setNotes(value)}
      />
    </CollapseForm>
  );
};

export default PeoplePage;
