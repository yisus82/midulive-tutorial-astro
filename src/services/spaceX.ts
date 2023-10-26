import { type Launch, type SpaceXResponse } from '../types/SpaceXResponse';

export const getLaunches = async (sort = 'desc') => {
  const res = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: sort,
        },
        limit: 10,
      },
    }),
  });
  const { docs: launches } = (await res.json()) as SpaceXResponse;
  return launches;
};

export const getLaunchById = async (id: string) => {
  const res = await fetch(`https://api.spacexdata.com/v5/launches/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'desc',
        },
        limit: 10,
      },
    }),
  });
  const launch = (await res.json()) as Launch;
  return launch;
};
