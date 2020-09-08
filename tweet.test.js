require('dotenv').config();
const tweet = require('./tweet');

describe('tweet.js', () => {
  it('사용자 정보를 조회합니다.', async () => {
    const userObject = await tweet.init().show('athlon16');
    expect(userObject).toBeTruthy();
  });
});