// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse, AxiosError } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

interface IError {
  errMsg: string;
}

interface IErrorGetProfile extends IError {
  isNotFound: boolean;
}

interface IProfile {
  summonner: ISummoner;
  matchs: object[];
}

export function getProfile(name: string): Promise<IProfile | IErrorGetProfile> {
  return instance
    .get(`/profile/${encodeURI(name)}`)
    .then((res) => {
      return res.data;
    })
    .catch((err: Error | AxiosError) => {
      const errorData = {
        isNotFound: false,
        errMsg: err.message,
      };

      // 소환사명이 없을경우
      if (axios.isAxiosError(err) && err.response?.status === 404) errorData.isNotFound = true;

      if (!errorData.isNotFound) console.error(`getProfile Error - ${err}`);

      return errorData;
    });
}

export default {
  getProfile,
};
