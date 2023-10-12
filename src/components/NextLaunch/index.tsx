import { Box, Container, Flex, Grid, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { IconCalendar, IconRocket } from '@tabler/icons-react';
import { ILaunch } from '../../interfaces/launch.interface';
import classes from './styles.module.css';

export type NextLaunchProps = {
  nextLaunch: ILaunch;
};

export function NextLaunch({ nextLaunch }: NextLaunchProps) {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, false, {
    getInitialValueInEffect: false,
  });

  return (
    <Box className={classes.background}>
      <Container py={35}>
        <Grid align={'center'} justify={'center'}>
          <Grid.Col span={{ base: 3, lg: 2 }}>
            <Text c={'dark.3'} size={!matches ? 'xl' : 'xs'} fw={'bold'}>
              Next launch
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 9, lg: 10 }}>
            <Flex gap={!matches ? 16 : 12} justify={'space-evenly'} align={'center'}>
              <Flex direction={'column'} align={'center'} gap={!matches ? 'sm' : 5}>
                <Title size={!matches ? 'h1' : 'h5'} ta={'center'}>
                  {nextLaunch.name}
                </Title>
                <Text size={!matches ? 'md' : 'xs'}>Mission</Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={!matches ? 'sm' : 5}>
                <IconCalendar size={!matches ? 48 : 36} stroke={!matches ? 1.5 : 1} />
                <Text size={!matches ? 'sm' : 'xs'}>
                  {new Date(nextLaunch.date_local).toLocaleDateString('pt-br')}
                </Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={!matches ? 'sm' : 5}>
                <IconRocket size={!matches ? 48 : 36} stroke={!matches ? 1.5 : 1} />
                <Text size={!matches ? 'sm' : 'xs'}>{nextLaunch.rocket.name}</Text>
              </Flex>
              <Flex direction={'column'} align={'center'} gap={!matches ? 'sm' : 5}>
                <Text size={!matches ? '48px' : '36px'}>{nextLaunch.crew.length}</Text>
                <Text size={!matches ? 'sm' : 'xs'}>Crew size</Text>
              </Flex>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
