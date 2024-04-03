import Pocketbase from 'pocketbase';

const pb = new Pocketbase(process.env.POCKETBASE_URL);

export default pb;
