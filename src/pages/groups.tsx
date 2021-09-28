import React, {useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Avatar, Input, Stack} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import NewItemForm, {LabeledSwitch} from "@components/NewItemForm";

const GroupsPage: NextPage = () => {
  const [groupName, setGroupName] = useState("");

  return (
    <Layout>
      <Head>
        <title>JustPayys - Groups</title>
      </Head>
      <Stack>
        <NewItemForm
          btnIcon={<AiOutlineUsergroupAdd />}
          doneMessage="Add members"
          handleSubmit={() => {
            console.log("Group submit");
          }}
          openMessage="Create new group"
        >
          <Stack align="center" direction="row">
            <Avatar height="100%" name={groupName} src="https://bit.ly/tioluwani-kolawole" />
            <Stack flex={1}>
              <Input
                placeholder="Group's name"
                value={groupName}
                onChange={({currentTarget: {value}}) => setGroupName(value)}
              />
              <LabeledSwitch label="Simplify debts?">
                Combine the different debts between members automatically
              </LabeledSwitch>
            </Stack>
          </Stack>
        </NewItemForm>
      </Stack>
    </Layout>
  );
};

export default GroupsPage;
