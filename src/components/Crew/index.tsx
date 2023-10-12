import { Flex, Image, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export type CrewProps = {
  name: string;
  role?: string | null;
  agency?: string | null;
  image?: string | null;
};

export function Crew({ name, role, agency, image }: CrewProps) {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md})`, false, {
    getInitialValueInEffect: false,
  });

  function formatName() {
    const splittedName = name.split(' ');
    return `${splittedName[0]} ${splittedName[splittedName.length - 1]}`;
  }

  return (
    <Flex direction={'column'} align={'center'} gap={'sm'}>
      <Image fit={'contain'} h={!matches ? 175 : 125} radius={'sm'} src={image} />
      <Flex direction={'column'} align={'center'}>
        <Text size={!matches ? 'sm' : 'xs'} fw={'bold'} mb={10}>
          {formatName()}
        </Text>
        <Text size={!matches ? 'xs' : '0.65rem'} mb={5} h={!matches ? 40 : 20}>
          {role}
        </Text>
        <Text size={!matches ? 'xs' : '0.6rem'}>{agency}</Text>
      </Flex>
    </Flex>
  );
}
