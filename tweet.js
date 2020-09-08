require('dotenv').config();
const Twitter = require('twitter-lite');

/**
 * 트윗을 준비합니다.
 */
function init() {
  const client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  });

  const obj = {
    client,
    update,
    show
  };

  return obj;
}

/**
 * 트윗을 작성합니다.
 * @param status 작성할 트윗 내용
 */
async function update(status) {
  const tweet = await this.client.post('statuses/update', { status });
  return tweet;
}

/**
 * 트위터 사용자 정보를 조회합니다.
 * @param screen_name 트위터 아이디
 */
async function show(screen_name) {
  const userObject = await this.client.get('users/show', { screen_name });
  return userObject;
}

module.exports = { init };