import { load as loadPosts } from '$src/routes/blog/+page.server';
import { load as loadSocials } from '$src/routes/contact/+page.server';
import config from '$src/helpers/config';
import type { PageServerLoad } from './$types';

// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }: PageServerLoad) => {
  return {
    posts: (await loadPosts({ fetch }, config.initialFeeds)).posts,
    socials: (await loadSocials({ fetch })).props,
  };
};
