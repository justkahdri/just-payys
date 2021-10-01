import React, {RefObject, useContext, useRef, useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Avatar, Checkbox, Text, CheckboxGroup, Input, Stack} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import CollapseForm, {LabeledSwitch} from "@components/CollapseForm";
import {ListedGroup} from "@components/ListedItem";
import {GroupsContext, PeopleContext} from "@contexts";
import {CustomError} from "@utils";

const GroupsPage: NextPage = () => {
  const {groups} = useContext(GroupsContext);

  return (
    <Layout>
      <Head>
        <title>JustPayys - Groups</title>
      </Head>
      <Stack spacing={3}>
        {groups.map((group) => (
          <ListedGroup key={group.id} {...group} />
        ))}
        <GroupsForm />
      </Stack>
    </Layout>
  );
};

const GroupsForm = () => {
  const {addGroup} = useContext(GroupsContext);
  const {people} = useContext(PeopleContext);
  const [groupName, setGroupName] = useState("");
  const [simplified, setSimplified] = useState(true);
  const [members, setMembers] = useState<Array<string | number>>([]);
  const groupInput = useRef() as RefObject<HTMLInputElement>;

  const handleSubmit = async () => {
    if (groupName) {
      if (members.length >= 2) {
        // Add to context
        addGroup(groupName, simplified, members as string[]);
        // Resets inputs
        setGroupName("");
        setMembers([]);
      } else {
        throw new CustomError(
          "Not enough members.",
          "Select at least two members for the new group.",
        );
      }
    } else {
      throw new CustomError("A name is required.", "Please enter a name for the new group.");
    }
  };

  return (
    <CollapseForm
      btnIcon={<AiOutlineUsergroupAdd />}
      doneMessage="Add members"
      focusOnOpen={groupInput}
      isDisabled={people.length < 2 || !groupName}
      openMessage="Create new group"
      onSubmit={handleSubmit}
    >
      <Stack align="center" direction="row">
        <Avatar name={groupName} />
        <Input
          ref={groupInput}
          placeholder="Group's name"
          value={groupName}
          onChange={({currentTarget: {value}}) => setGroupName(value)}
        />
      </Stack>
      <LabeledSwitch
        isChecked={simplified}
        label="Simplify debts?"
        onChange={({currentTarget: {checked}}) => setSimplified(checked)}
      >
        Combine the different debts between members automatically
      </LabeledSwitch>
      <CheckboxGroup colorScheme="green" value={members} onChange={setMembers}>
        <Stack>
          {people.length >= 2 ? (
            people.map((member) => (
              <Checkbox key={member.id} value={member.id}>
                {member.name}
              </Checkbox>
            ))
          ) : (
            <Text color="gray.300">You have to register at least two people first!</Text>
          )}
        </Stack>
      </CheckboxGroup>
    </CollapseForm>
  );
};

export default GroupsPage;
