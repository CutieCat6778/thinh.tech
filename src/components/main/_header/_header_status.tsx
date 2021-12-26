import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UserPresence } from '../../../interface/user';
import { GetUserStatus } from '../../../utils/discordApi';
import HeaderStatusBox from './_header_status_normal';

export function HeaderStatus() {
  const [currStatus, setCurrStatus] = useState<UserPresence | null>();

  const TIME = 3 * 60 * 1000;

  useEffect(() => {
    async function setUserStatus() {
      const data: UserPresence = await GetUserStatus();
      setCurrStatus(data);
    }
    setUserStatus();
    setInterval(() => {
      setUserStatus();
    }, TIME)
  }, [TIME])

  return (
    <Box>
      {
        currStatus ?
          <HeaderStatusBox data={currStatus} />
          : null
      }
    </Box>
  )
}