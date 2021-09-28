import React, {useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Avatar, Input, Stack} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import NewItemForm, {LabeledSwitch} from "@components/NewItemForm";
import {ListedGroup} from "@components/ListedItem";

const GroupsPage: NextPage = () => {
  const groups: GroupT[] = [
    {
      id: "hash3123",
      simplified_debts: true,
      name: "example",
      related_expenses: [],
      members: ["", "2", "31"],
    },
  ];

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
  const [groupName, setGroupName] = useState("");

  const handleSubmit = async () => {
    throw new Error("Group submit not implemented");
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
      <LabeledSwitch defaultChecked label="Simplify debts?">
        Combine the different debts between members automatically
      </LabeledSwitch>
    </NewItemForm>
  );
};

export default GroupsPage;
