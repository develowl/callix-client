import { ILaunch } from '../interfaces/launch.interface';
import { IPage } from '../interfaces/page';
import { IPageMeta } from '../interfaces/page-meta.interface';

export async function getNextLaunch(): Promise<ILaunch> {
  const res = await fetch(`${process.env.LAUNCHES_API}/next`);
  const data = await res.json();
  return data;
}

export async function getLatestLaunch(): Promise<ILaunch> {
  const res = await fetch(`${process.env.LAUNCHES_API}/latest`);
  const data = await res.json();
  return data;
}

export async function getUpcomingLaunches(): Promise<ILaunch[]> {
  const res = await fetch(`${process.env.LAUNCHES_API}/upcoming`);
  const data = await res.json();
  return data;
}

export async function getPastLaunches(page = 2): Promise<IPage<ILaunch> & IPageMeta> {
  const res = await fetch(`${process.env.LAUNCHES_API}/past?page=${page}`);
  const data = await res.json();
  return data;
}
