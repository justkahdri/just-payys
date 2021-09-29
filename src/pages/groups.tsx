import React, {useContext, useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {
  Avatar,
  Checkbox,
  Text,
  CheckboxGroup,
  Input,
  Stack,
  useCheckboxGroup,
} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import NewItemForm, {LabeledSwitch} from "@components/NewItemForm";
import {ListedGroup} from "@components/ListedItem";
import {GroupsContext, PeopleContext} from "@contexts";

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
  const {value: members, setValue: setMembers} = useCheckboxGroup();

  const handleSubmit = async () => {
    if (groupName) {
      if (members.length >= 2) {
        addGroup(groupName, simplified, members as string[]);
      } else {
        throw new Error("Select at least two members for the new group.");
      }
    } else {
      throw new Error("A group's name is required.");
    }
  };

  return (
    <NewItemForm
      btnIcon={<AiOutlineUsergroupAdd />}
      doneMessage="Add members"
      openMessage="Create new group"
      onSubmit={handleSubmit}
    >
      <Stack align="center" direction="row">
        <Avatar name={groupName} src="https://bit.ly/tioluwani-kolawole" />
        <Input
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
    </NewItemForm>
  );
};

export default GroupsPage;
