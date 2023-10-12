import { Carousel } from '@mantine/carousel';
import { Box, Card, Container, Grid, Image, Text } from '@mantine/core';
import { ILaunch } from '../../interfaces/launch.interface';
import { getRandomIndex } from '../../utils';
import classes from './styles.module.css';

export type UpcomingLaunchProps = {
  upcomingLaunches: ILaunch[];
};

export function UpcomingLaunches({ upcomingLaunches }: UpcomingLaunchProps) {
  return (
    <Box className={classes.background}>
      <Container py={35}>
        <Grid align={'center'}>
          <Grid.Col span={2}>
            <Text c={'dark.3'} size={'xl'} fw={'bold'}>
              Upcoming launches
            </Text>
          </Grid.Col>
          <Grid.Col span={10}>
            <Carousel
              withIndicators
              classNames={classes}
              slideSize={'33.333333%'}
              slideGap={'md'}
              // loop
              align={'center'}
              slidesToScroll={3}
            >
              {upcomingLaunches.map((upcomingLaunch) => (
                <Carousel.Slide key={upcomingLaunch.name}>
                  <Card shadow={'sm'} padding={'lg'} radius={'md'} withBorder>
                    <Card.Section>
                      <Image
                        src={upcomingLaunch.rocket.flickr_images[getRandomIndex(upcomingLaunch)]}
                        height={120}
                      />
                    </Card.Section>
                    <Card.Section p={20}>
                      <Text size={'sm'} c={'dimmed'}>
                        {upcomingLaunch.name}
                      </Text>
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
