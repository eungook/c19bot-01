require('dotenv').config();
const tweet = require('./tweet');

describe('tweet.js', () => {
  it('사용자 정보를 조회합니다.', async () => {
    const consumer_key = process.env.CONSUMER_KEY;
    const consumer_secret = process.env.CONSUMER_SECRET;
    const access_token_key = process.env.ACCESS_TOKEN_KEY;
    const access_token_secret = process.env.ACCESS_TOKEN_SECRET;

    const userObject = await tweet
      .init({ consumer_key, consumer_secret, access_token_key, access_token_secret })
      .show('athlon16');
    expect(userObject).toBeTruthy();
  });
});