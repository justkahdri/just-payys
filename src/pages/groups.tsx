import React from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Stack, Button} from "@chakra-ui/react";
import {AiOutlineUsergroupAdd} from "react-icons/ai";

import Layout from "@components/Layout";

const GroupsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>JustPayys - Groups</title>
      </Head>
      <Stack>
        <Button colorScheme="purple" leftIcon={<AiOutlineUsergroupAdd />} variant="outline">
          Create new group
        </Button>
      </Stack>
    </Layout>
  );
};

export default GroupsPage;
