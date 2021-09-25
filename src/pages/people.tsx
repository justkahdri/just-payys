import React from "react";
import type {NextPage} from "next";
import Head from "next/head";
import {Stack, Button} from "@chakra-ui/react";
import {AiOutlineUserAdd} from "react-icons/ai";

import Layout from "@components/Layout";

const PeoplePage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>JustPayys - People</title>
      </Head>
      <Stack>
        <Button colorScheme="purple" leftIcon={<AiOutlineUserAdd />} variant="outline">
          Add new person
        </Button>
      </Stack>
    </Layout>
  );
};

export default PeoplePage;
