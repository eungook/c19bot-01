const Twitter = require('twitter-lite');

/**
 * 트윗을 준비합니다.
 */
function init({consumer_key, consumer_secret, access_token_key, access_token_secret}) {
  const client = new Twitter({
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret,
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