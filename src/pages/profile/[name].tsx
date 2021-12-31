import type { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { getProfile } from 'api/profile';

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const searchName = params?.name?.toString() || '';

  const data = await getProfile(searchName);

  return {
    props: {
      searchName,
      data,
    },
  };
};

const Profile = function ({
  searchName,
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const isErr = 'errMsg' in data;
  const isNotFound = 'isNotFound' in data;
  return <div>{isErr ? `${searchName} 소환사를 찾을수 없습니다` : '성공'}</div>;
};

export default Profile;
