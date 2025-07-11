import { writable, derived, type Readable } from 'svelte/store';
import type { RssPosts, RssUrlList } from '$src/types/RssXml';
import CONFIG from '$src/helpers/config';

export const blogStore = writable<RssPosts>([]);

export const config = CONFIG;

// Kosongkan RSS feeds untuk menghilangkan semua blog data
export const initialFeeds: RssUrlList = [];

// Kosongkan extra feeds juga
export const extraFeeds: RssUrlList = [];

// Set the RSS feed URLs to display, to initialFeeds (yang sudah kosong)
export const rssFeedUrls = writable<RssUrlList>(initialFeeds);

// Stores the users search term, for filtering posts
export const searchTerm = writable('');

// If 'searchTerm' is present, return only matching posts to render
export const filtered: Readable<RssPosts> = derived(
  [searchTerm, blogStore],
  ([$searchTerm, $blogStore]) => {
    // Selalu return array kosong untuk menampilkan "not found"
    return [];
  }
);
