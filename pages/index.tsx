import { Divider } from '@mantine/core';
import useGoogleOptimize from '@react-hook/google-optimize';
import { getLatestLaunch, getNextLaunch, getPastLaunches, getUpcomingLaunches } from '../src/api';
import { LatestLaunch, LatestLaunchProps } from '../src/components/LatestLaunch';
import { NextLaunch, NextLaunchProps } from '../src/components/NextLaunch';
import { PastLaunchProps, PastLaunches } from '../src/components/PastLaunches';
import { UpcomingLaunchProps, UpcomingLaunches } from '../src/components/UpcomingLaunches';
import { Welcome } from '../src/components/Welcome';
import { WelcomeBackground } from '../src/components/WelcomeBackground';

export default function HomePage({
  nextLaunch,
  latestLaunch,
  upcomingLaunches,
  pastLaunches,
}: NextLaunchProps & LatestLaunchProps & UpcomingLaunchProps & PastLaunchProps) {
  const variant = useGoogleOptimize(process.env.NEXT_PUBLIC_EXPERIMENT_ID!, [true, false]);
  return (
    <>
      {!!variant && <WelcomeBackground />}
      <Welcome />
      <Divider mt={100} size={'md'} />
      <NextLaunch nextLaunch={nextLaunch} />
      <Divider size={'md'} />
      <LatestLaunch latestLaunch={latestLaunch} />
      <Divider size={'md'} />
      <UpcomingLaunches upcomingLaunches={upcomingLaunches} />
      <Divider size={'md'} />
      <PastLaunches pastLaunches={pastLaunches} />
      <Divider size={'md'} />
    </>
  );
}

export async function getServerSideProps() {
  const nextLaunch = await getNextLaunch();
  const latestLaunch = await getLatestLaunch();
  const upcomingLaunches = await getUpcomingLaunches();
  const pastLaunches = await getPastLaunches();

  return {
    props: {
      nextLaunch,
      latestLaunch,
      upcomingLaunches,
      pastLaunches,
    },
  };
}
