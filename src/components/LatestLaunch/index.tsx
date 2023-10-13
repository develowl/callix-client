import { Carousel } from '@mantine/carousel';
import {
  Box,
  Container,
  Flex,
  Grid,
  Image,
  Skeleton,
  Space,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCalendar, IconChecks, IconRocket, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import wiki from 'wikijs';
import { ILaunch } from '../../interfaces/launch.interface';
import { ButtonGroup } from '../ButtonGroup';
import { Crew } from '../Crew';
import classes from './styles.module.css';

export type LatestLaunchProps = {
  latestLaunch: ILaunch;
};

export function LatestLaunch({ latestLaunch }: LatestLaunchProps) {
  const [content, setContent] = useState<string | null>(latestLaunch.details);
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, false, {
    getInitialValueInEffect: false,
  });

  useEffect(() => {
    if (!content) {
      queryWiki();
    }
  }, [content]);

  async function queryWiki() {
    wiki({ apiUrl: 'https://es.wikipedia.org/w/api.php' })
      .page(`SpaceX_${latestLaunch.name}`)
      .then((page) => page)
      .then(async (value) => setContent(await value.summary()));
  }

  return (
    <Box className={classes.background}>
      <Container py={50}>
        <Text c={'dark.3'} size={!matches ? 'xl' : 'xs'} fw={'bold'}>
          Latest launch
        </Text>
        <Space h={!matches ? 'xl' : 'md'} />
        <Flex gap={!matches ? 16 : 8} align={'center'}>
          <Title size={!matches ? 'h1' : 'h4'}> Mission: {latestLaunch.name}</Title>
          <Image w={!matches ? 32 : 24} src={'https://images2.imgbox.com/eb/d8/D1Yywp0w_o.png'} />
        </Flex>
        <Text size={!matches ? 'lg' : 'sm'}>Flight number: {latestLaunch.flight_number}</Text>
        <Space h={!matches ? 50 : 25} />
        <Grid grow={true} gutter={!matches ? 64 : 32} align={'stretch'}>
          <Grid.Col span={{ base: 12, sm: 5, lg: 3 }}>
            <Flex justify={'space-around'}>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <IconCalendar size={!matches ? 48 : 36} stroke={!matches ? 1.5 : 1} />
                <Text size={!matches ? 'sm' : 'xs'}>
                  {new Date(latestLaunch.date_local).toLocaleDateString('pt-br')}
                </Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <IconRocket size={!matches ? 48 : 36} stroke={!matches ? 1.5 : 1} />
                <Text size={!matches ? 'sm' : 'xs'}>{latestLaunch.rocket.name}</Text>
              </Flex>
            </Flex>
            <Space h={'xl'} />
            <Flex justify={'space-around'}>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                {!latestLaunch.success ? (
                  <IconX color={'red'} size={!matches ? 48 : 36} stroke={!matches ? 1.5 : 1} />
                ) : (
                  <IconChecks
                    color={'green'}
                    size={!matches ? 48 : 36}
                    stroke={!matches ? 1.5 : 1}
                  />
                )}
                <Text size={!matches ? 'sm' : 'xs'}>
                  Missson {!latestLaunch.success ? 'failed' : 'succeed'}
                </Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <Text size={!matches ? '48px' : '36px'}>{latestLaunch.crew.length}</Text>
                <Text size={!matches ? 'sm' : 'xs'}>Crew size</Text>
              </Flex>
            </Flex>
            <Space h={48} />
            <Flex align={'stretch'} justify={'space-between'} gap={5} ta={'center'}>
              {latestLaunch.crew.map(({ crew, role }) => (
                <Crew
                  key={crew.name}
                  name={crew.name}
                  role={role}
                  agency={crew.agency}
                  image={crew.image}
                />
              ))}
            </Flex>
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 7, md: 4 }}>
            <Title size={!matches ? 'h2' : 'h4'} mb={20}>
              Summary
            </Title>
            <Skeleton visible={!content} h={!content ? 400 : 'fit-content'}>
              <Text size={!matches ? 'md' : 'sm'} ta={'justify'}>
                {content}
              </Text>
            </Skeleton>
            <Space h={'md'} />
            <ButtonGroup launch={latestLaunch} hasReadMore />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 5, md: 4 }}>
            <Carousel
              h={'100%'}
              height={'100%'}
              className={classes.carousel}
              classNames={classes}
              loop
              align={!matches ? 'center' : 'start'}
            >
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg'}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg'}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm1.staticflickr.com/293/32312415025_6841e30bf1_b.jpg'}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm1.staticflickr.com/623/23660653516_5b6cb301d1_b.jpg'}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm6.staticflickr.com/5518/31579784413_d853331601_b.jpg'}
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  radius={'md'}
                  h={'100%'}
                  src={'https://farm1.staticflickr.com/745/32394687645_a9c54a34ef_b.jpg'}
                />
              </Carousel.Slide>
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
