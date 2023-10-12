import { Anchor, Container, Text, Title } from '@mantine/core';
import classes from './styles.module.css';

export function Welcome() {
  return (
    <Container p={50} className={classes.background}>
      <Title className={classes.title} ta={'center'} mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant={'gradient'}
          component={'span'}
          gradient={{ from: 'gray', to: 'blue' }}
        >
          SpaceX{' '}
        </Text>
        launches page
      </Title>
      <Text c={'dimmed'} ta={'center'} size={'xl'} maw={580} mx={'auto'} mt={'xl'}>
        This page presents all information about{' '}
        <Anchor href={'https://www.spacex.com/'} target={'_blank'} size={'lg'}>
          SpaceX
        </Anchor>{' '}
        launches, from the first launch to the most recent, as well as a list of all launches,
        including those that are about to be launched.
      </Text>
    </Container>
  );
}
