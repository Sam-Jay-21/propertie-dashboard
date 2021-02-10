import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { useListings } from '../src/hooks/index';

const handlers = [
  rest.get('/properties', async (req, res, ctx) => {
    const listings = await useListings(JSON.parse(req.body));

    console.log('====', listings);

    return res(ctx.json({ listings }));
  }),
];

const server = setupServer(...handlers);
export { server, rest };
