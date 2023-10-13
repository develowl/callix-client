import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  Image,
  Loader,
  Space,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPastLaunches } from '../../api';
import { ILaunch } from '../../interfaces/launch.interface';
import { IPage } from '../../interfaces/page';
import { IPageMeta } from '../../interfaces/page-meta.interface';
import { getRandomIndex } from '../../utils';
import { ButtonGroup } from '../ButtonGroup';
import classes from './styles.module.css';

export type PastLaunchProps = {
  pastLaunches: IPage<ILaunch> & IPageMeta;
};

export function PastLaunches({ pastLaunches }: PastLaunchProps) {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, false, {
    getInitialValueInEffect: false,
  });

  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [page, setPage] = useState<number>(2);
  const [hasMore, setHasMore] = useState<boolean>(true);

  useEffect(() => {
    setLaunches(pastLaunches.docs);
  }, [pastLaunches]);

  async function refetchPastLaunches() {
    const data = await getPastLaunches(page);
    setLaunches((prev) => [...prev, ...data.docs]);
    setPage(data.nextPage);
    if (!data.hasNextPage) setHasMore(false);
  }

  return (
    <InfiniteScroll
      dataLength={launches.length}
      next={refetchPastLaunches}
      hasMore={hasMore}
      loader={
        <Flex justify={'center'} p={10}>
          <Loader type={'dots'} color={'blue.9'} />
        </Flex>
      }
    >
      <Box className={classes.background}>
        <Container py={35}>
          <Text c={'dark.3'} size={!matches ? 'xl' : 'xs'} fw={'bold'}>
            Past launches
          </Text>
          <Space h={!matches ? 48 : 24} />
          <Grid grow justify={!matches ? 'space-around' : 'center'} align={'stretch'}>
            {launches?.map((pastLaunch) => (
              <Grid.Col span={{ base: 12, xs: 6, sm: 4, md: 3 }} key={pastLaunch.name}>
                <Card
                  shadow={'sm'}
                  padding={'lg'}
                  radius={'md'}
                  withBorder
                  mih={'15em'}
                  miw={'15em'}
                  mah={'20em'}
                  maw={'20em'}
                  m={'0 auto'}
                >
                  <Card.Section>
                    <Image
                      src={pastLaunch.rocket.flickr_images[getRandomIndex(pastLaunch)]}
                      height={160}
                    />
                  </Card.Section>
                  <Card.Section p={10}>
                    <Flex direction={'column'} justify={'space-between'} align={'start'}>
                      <Flex gap={10}>
                        <Text size={!matches ? 'sm' : 'xs'}>{pastLaunch.name}</Text>
                        <Image src={pastLaunch.links.patch.small} h={20} />
                      </Flex>
                      <Space h={20} />
                      <Flex align={'center'} justify={'space-between'} w={'100%'}>
                        <Text size={!matches ? 'xs' : '0.6rem'} c={'dimmed'}>
                          {new Date(pastLaunch.date_local).toLocaleDateString('pt-br')}
                        </Text>
                        <ButtonGroup launch={pastLaunch} />
                      </Flex>
                    </Flex>
                  </Card.Section>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>
    </InfiniteScroll>
  );
}
