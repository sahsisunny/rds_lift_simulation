// import { Flex } from '@chakra-ui/react'
// import LiftCard from './LiftCard'
// import axios from 'axios';
// import { LiftCardProps } from '../interface/LiftCardProps';



// const URL = "https://raw.githubusercontent.com/sahsisunny/rds_lift_simulation/$main/$data.json"

// const ListPage = () => {

//   async function fetchData(url: string): Promise<LiftCardProps[]> {
//   try {
//     const response = await axios.get<LiftCardProps[]>(url);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching JSON data:', error);
//     return [];
//   }
//   }
//   const response = fetchData(URL);
//   const data : LiftCardProps[] = response

 
//   return (
//     <Flex
//       direction="row"
//       flexWrap="wrap"
//       justifyContent="center"
//       padding="1rem"
//     >
//       {data.map((item, index) => (
//         <LiftCard
//           key={index}
//           name={item.name}
//           github_username={item.github_username}
//           discord_username={item.discord_username}
//           rds_username={item.rds_username}
//           user_image={item.user_image}
//           liftsimulation_livelink={item.liftsimulation_livelink}
//           liftsimulation_gitlink={item.liftsimulation_gitlink}
//           youtube_video={item.youtube_video}
//         />
//       ))}
//     </Flex>
//   )
// }

// export default ListPage


import { Flex } from '@chakra-ui/react'
import LiftCard from './LiftCard'
import axios from 'axios';
import { LiftCardProps } from '../interface/LiftCardProps';
import { useState, useEffect } from 'react';

const URL = "https://raw.githubusercontent.com/sahsisunny/rds_lift_simulation/main/data.json"

const ListPage = () => {

  const [data, setData] = useState<LiftCardProps[]>([]);

  useEffect(() => {
    async function fetchData(url: string): Promise<LiftCardProps[]> {
      try {
        const response = await axios.get<LiftCardProps[]>(url);
        return response.data;
      } catch (error) {
        console.error('Error fetching JSON data:', error);
        return [];
      }
    }
    fetchData(URL).then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Flex
      direction="row"
      flexWrap="wrap"
      justifyContent="center"
      padding="1rem"
    >
      {data.map((item, index) => (
        <LiftCard
          key={index}
          name={item.name}
          github_username={item.github_username}
          discord_username={item.discord_username}
          rds_username={item.rds_username}
          user_image={item.user_image}
          liftsimulation_livelink={item.liftsimulation_livelink}
          liftsimulation_gitlink={item.liftsimulation_gitlink}
          youtube_video={item.youtube_video}
        />
      ))}
    </Flex>
  )
}

export default ListPage;
