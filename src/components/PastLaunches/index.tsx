import { Box, Card, Container, Flex, Grid, Image, Loader, Space, Text } from '@mantine/core';
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
          <Loader type={'dots'} color={'teal.9'} />
        </Flex>
      }
    >
      <Box className={classes.background}>
        <Container py={35}>
          <Text c={'dark.3'} size={'xl'} fw={'bold'}>
            Past launches
          </Text>
          <Space h={48} />
          <Grid grow justify={'space-around'} align={'stretch'}>
            {launches?.map((pastLaunch) => (
              <Grid.Col span={3} key={pastLaunch.name}>
                <Card shadow={'sm'} padding={'lg'} radius={'md'} withBorder h={'100%'} mih={200}>
                  <Card.Section>
                    <Image
                      src={pastLaunch.rocket.flickr_images[getRandomIndex(pastLaunch)]}
                      height={120}
                    />
                  </Card.Section>
                  <Card.Section p={20}>
                    <Flex justify={'space-between'} align={'center'}>
                      <Flex gap={10}>
                        <Image src={pastLaunch.links.patch.small} h={20} />
                        <Text size={'sm'} c={'dimmed'}>
                          {pastLaunch.name}
                        </Text>
                      </Flex>
                      <ButtonGroup launch={pastLaunch} />
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
