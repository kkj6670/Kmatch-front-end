// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

instance.defaults.headers.common['X-Riot-Token'] = 'RGAPI-bdd87ddf-270a-4cb2-81a2-a7cd4e048382';

interface ISummoner {
  id: string;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

export function getSummonerByName(name: string): ISummoner {
  // return instance
  //   .post(`/lol/summoner/v4/summoners/by-name/test`)
  //   .then((res) => {
  //     console.log(res.data);
  //     return res.data;
  //   })
  //   .catch((err) => {
  //     console.log(err, 'err!!!!!!');
  //     return err;
  //   });

  return {
    id: 'HiLtqEikSMUc_PdapBaPb35-tYXRQR0yHZT06qqJE-GTFw',
    accountId: 'S9VVZ5WE6QMT9N2zcDRj9GYLfbkGs-woVCyQsMAzG_jE',
    puuid: 'zaNp_bciXR3WhRBXXymGXw0peFCqOfipdA1od1h8gtnT_A9q0dDYpUGbeoaU-1IF3h5H5jayqLlckg',
    name: '너의옆자리',
    profileIconId: 5063,
    revisionDate: 1640457647000,
    summonerLevel: 348,
  };
}

export default {
  getSummonerByName,
};
