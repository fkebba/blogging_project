import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('3YH75KBAZQ', '214af99b632058bb56981f00db76c878');
const index = client.initIndex('blog_post');

export { index };
