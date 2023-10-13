import { Carousel } from '@mantine/carousel';
import { Box, Card, Container, Flex, Grid, Image, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { ILaunch } from '../../interfaces/launch.interface';
import { getRandomIndex } from '../../utils';
import classes from './styles.module.css';

export type UpcomingLaunchProps = {
  upcomingLaunches: ILaunch[];
};

export function UpcomingLaunches({ upcomingLaunches }: UpcomingLaunchProps) {
  const theme = useMantineTheme();
  const matchesXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`, false, {
    getInitialValueInEffect: false,
  });
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, false, {
    getInitialValueInEffect: false,
  });

  return (
    <Box className={classes.background}>
      <Container py={35}>
        <Grid align={'center'}>
          <Grid.Col span={{ base: 12, md: 2 }}>
            <Text c={'dark.3'} size={!matches ? 'xl' : 'xs'} fw={'bold'}>
              Upcoming launches
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 10 }}>
            <Carousel
              withIndicators
              classNames={classes}
              slideSize={matchesXs ? '50%' : matches ? '33.33333%' : '25%'}
              slideGap={!matches ? 'md' : 'xs'}
              align={!matchesXs ? 'start' : 'center'}
            >
              {upcomingLaunches.map((upcomingLaunch) => (
                <Carousel.Slide key={upcomingLaunch.name}>
                  <Card
                    shadow={'sm'}
                    padding={!matches ? 'lg' : 'sm'}
                    radius={'md'}
                    h={'15em'}
                    w={'20em'}
                    withBorder
                  >
                    <Card.Section>
                      <Image
                        src={upcomingLaunch.rocket.flickr_images[getRandomIndex(upcomingLaunch)]}
                        height={160}
                      />
                    </Card.Section>
                    <Card.Section p={!matches ? 20 : 10}>
                      <Flex justify={'start'} direction={'column'}>
                        <Text size={!matches ? 'sm' : 'xs'}>{upcomingLaunch.name}</Text>
                        <Text size={!matches ? 'sm' : 'xs'} c={'dimmed'}>
                          {new Date(upcomingLaunch.date_local).toLocaleDateString('pt-br')}
                        </Text>
                      </Flex>
                    </Card.Section>
                  </Card>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
