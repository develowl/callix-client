import { Box, Container, Flex, Grid, Text, Title } from '@mantine/core';
import { IconCalendar, IconRocket } from '@tabler/icons-react';
import { ILaunch } from '../../interfaces/launch.interface';
import classes from './styles.module.css';

export type NextLaunchProps = {
  nextLaunch: ILaunch;
};

export function NextLaunch({ nextLaunch }: NextLaunchProps) {
  return (
    <Box className={classes.background}>
      <Container py={35}>
        <Grid align={'center'}>
          <Grid.Col span={2}>
            <Text c={'dark.3'} size={'xl'} fw={'bold'}>
              Next launch
            </Text>
          </Grid.Col>
          <Grid.Col span={10}>
            <Flex gap={16} justify={'space-evenly'} align={'center'}>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <Title size={'h1'}>{nextLaunch.name}</Title>
                <Text size={'md'}>Mission</Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <IconCalendar size={48} stroke={1.5} />
                <Text size={'sm'}>
                  {new Date(nextLaunch.date_local).toLocaleDateString('pt-br')}
                </Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <IconRocket size={48} stroke={1.5} />
                <Text size={'sm'}>{nextLaunch.rocket.name}</Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={'sm'}>
                <Text size={'48px'}>{nextLaunch.crew.length}</Text>
                <Text size={'sm'}>Crew size</Text>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
