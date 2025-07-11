import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const prerender = false;

export const load: PageServerLoad = async ({ params }) => {
  // Always throw 404 since no posts exist
  throw error(404, 'Post not found');
};
