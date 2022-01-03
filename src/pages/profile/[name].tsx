import React, { useEffect, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { getProfile, getLatestVersion } from 'api/profile';

const Profile = function () {
  const router = useRouter();
  const [profileData, setProfile] = useState({});
  const [version, setVersion] = useState('');

  const initProfile = useCallback(async () => {
    const resProfile = await getProfile(String(router.query?.name || ''));
    const resVersion = await getLatestVersion();

    setProfile(resProfile);
    setVersion(resVersion);
  }, [router.query.name, setProfile]);

  useEffect(() => {
    initProfile();
  }, [initProfile]);

  console.log(version, profileData);
  return <div>준비중</div>;
};

export default Profile;
