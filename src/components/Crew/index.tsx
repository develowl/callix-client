import { Flex, Image, Text } from '@mantine/core';

export type CrewProps = {
  name: string;
  role?: string | null;
  agency?: string | null;
  image?: string | null;
};

export function Crew({ name, role, agency, image }: CrewProps) {
  function formatName() {
    const splittedName = name.split(' ');
    return `${splittedName[0]} ${splittedName[splittedName.length - 1]}`;
  }
  return (
    <Flex direction={'column'} align={'center'} gap={'sm'}>
      <Image fit={'contain'} h={175} radius={'sm'} src={image} />
      <Flex direction={'column'} align={'center'}>
        <Text size={'sm'} fw={'bold'} mb={10}>
          {formatName()}
        </Text>
        <Text size={'xs'} mb={5} h={40}>
          {role}
        </Text>
        <Text size={'xs'}>{agency}</Text>
      </Flex>
    </Flex>
  );
}
