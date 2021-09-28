import React, {useState} from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Stack, Input, Avatar, Textarea} from "@chakra-ui/react";
import {AiOutlineUserAdd} from "react-icons/ai";

import Layout from "@components/Layout";
import NewItemForm from "@components/NewItemForm";

const PeoplePage: NextPage = () => {
  const [name, setName] = useState("");

  return (
    <Layout>
      <Head>
        <title>JustPayys - People</title>
      </Head>
      <Stack>
        <NewItemForm
          btnIcon={<AiOutlineUserAdd />}
          doneMessage="Save"
          handleSubmit={function (event: any): void {
            throw new Error("Function not implemented.");
          }}
          openMessage="Add new person"
        >
          <Stack align="center" direction="row">
            <Avatar name={name} src="https://bit.ly/tioluwani-kolawole" />
            <Input
              placeholder="John Doe"
              value={name}
              onChange={({currentTarget: {value}}) => setName(value)}
            />
          </Stack>
          <Textarea placeholder="Notes (optional)" resize="vertical" size="sm" />
        </NewItemForm>
      </Stack>
    </Layout>
  );
};

export default PeoplePage;
