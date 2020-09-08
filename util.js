/**
 * Date를 yyyymmdd 포멧으로 리턴한다.
 * @param date Date 타입
 */
function getYYYYMMDD(date) {
  const yyyy = date.getFullYear();
  const mm = ('0' + (date.getMonth() + 1)).substr(-2);
  const dd = ('0' + date.getDate()).substr(-2);
  const yyyymmdd = `${yyyy}${mm}${dd}`;
  return yyyymmdd;
}

/**
 * Date의 값을 KST로 변환한다.
 * (Timezone은 변환되지 않는다.)
 * @param date 
 */
function getKSTDate(date) {
  const timezone = date.getTimezoneOffset() / 60;
  const hour = 1000 * 60 * 60;
  const kst = new Date(date.getTime() + ((timezone + 9) * hour)); // KST = GMT+9
  return kst;
}

module.exports = { getYYYYMMDD, getKSTDate };