import { ActionIcon, Button, Flex } from '@mantine/core';
import {
  IconBrandReddit,
  IconBrandWikipedia,
  IconBrandYoutube,
  IconNews,
} from '@tabler/icons-react';
import { ILaunch } from '../../interfaces/launch.interface';

export type ButtonGroupProps = {
  launch: ILaunch;
  hasReadMore?: boolean;
};

export function ButtonGroup({ launch, hasReadMore }: ButtonGroupProps) {
  return (
    <Flex align={'center'} justify={'space-between'}>
      {!!hasReadMore && (
        <Button
          variant={'outline'}
          radius={'xs'}
          component={'a'}
          target={'_blank'}
          href={launch.links?.wikipedia ?? launch.links.article ?? 'https://spacex.com'}
        >
          READ MORE
        </Button>
      )}
      <Flex align={'center'} gap={hasReadMore ? 10 : 0}>
        <div style={{ cursor: !launch.links.webcast ? 'not-allowed' : 'auto' }}>
          <ActionIcon
            disabled={!launch.links.webcast}
            variant={'transparent'}
            size={'md'}
            color={'red.9'}
            component={'a'}
            target={'_blank'}
            href={`${launch.links.webcast}`}
          >
            <IconBrandYoutube size={20} stroke={1} />
          </ActionIcon>
        </div>
        <div style={{ cursor: !launch.links.wikipedia ? 'not-allowed' : 'auto' }}>
          <ActionIcon
            disabled={!launch.links.wikipedia}
            variant={'transparent'}
            size={'md'}
            color={'blue.2'}
            component={'a'}
            target={'_blank'}
            href={`${launch.links.wikipedia}`}
          >
            <IconBrandWikipedia size={20} stroke={1} />
          </ActionIcon>
        </div>
        <div style={{ cursor: !launch.links.reddit ? 'not-allowed' : 'auto' }}>
          <ActionIcon
            disabled={!launch.links.reddit.launch}
            variant={'transparent'}
            size={'md'}
            color={'orange.8'}
            component={'a'}
            target={'_blank'}
            href={`${launch.links.reddit.launch}`}
          >
            <IconBrandReddit size={20} stroke={1} />
          </ActionIcon>
        </div>
        <div style={{ cursor: !launch.links.article ? 'not-allowed' : 'auto' }}>
          <ActionIcon
            disabled={!launch.links.article}
            variant={'transparent'}
            size={'md'}
            color={'dark.0'}
            component={'a'}
            target={'_blank'}
            href={`${launch.links.article}`}
            style={{ pointerEvents: !launch.links.article ? 'none' : 'auto' }}
          >
            <IconNews size={20} stroke={1} />
          </ActionIcon>
        </div>
      </Flex>
    </Flex>
  );
}
