import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UserPresence } from '../../../interface/user';
import { GetUserStatus } from '../../../utils/discordApi';
import HeaderStatusBox from './_header_status_normal';

export function HeaderStatus() {
  const [currStatus, setCurrStatus] = useState<UserPresence | null>();

  let i = 0;

  useEffect(() => {
    async function setUserStatus() {
      const data = await GetUserStatus();
      setCurrStatus(data[i])
      setInterval(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        i === data.length - 1 ? i = 0 : i++;
        setCurrStatus(data[i])
      }, 7500)
    }
    setUserStatus();
  }, [i])

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