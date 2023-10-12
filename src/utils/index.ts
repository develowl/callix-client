import { ILaunch } from '../interfaces/launch.interface';

export function getRandomIndex(launch: ILaunch) {
  const min = 0;
  const max = launch.rocket.flickr_images.length;
  const random = Math.random() * (max - 1 - min) + min;
  return Math.floor(random);
}
