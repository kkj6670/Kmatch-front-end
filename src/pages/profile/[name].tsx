import type { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import React from 'react';
import { getSummonerByName } from 'api/search';

export const getServerSideProps = ({ params }: GetStaticPropsContext) => {
  const name = params?.name?.toString() || '';

  const data = getSummonerByName(name);

  return {
    props: {
      data,
    },
  };
};

const Profile: NextPage = function ({ data }: InferGetStaticPropsType<typeof getServerSideProps>) {
  console.log(data);
  return <div>{data.name}</div>;
};

export default Profile;
