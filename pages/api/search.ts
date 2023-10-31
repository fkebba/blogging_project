// pages/api/search.ts
import algoliasearch from 'algoliasearch/lite';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSearchKey } from '../../utils/algolia';

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { query } = req.query;
    const searchKey = getSearchKey();
    const client = algoliasearch(searchKey.appId, searchKey.searchKey);
    const index = client.initIndex(process.env.ALGOLIA_INDEX_NAME);
    const { hits } = await index.search(query as string);

    res.status(200).json({ results: hits });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while searching.' });
  }
};

export default search;
