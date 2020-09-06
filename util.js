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

module.exports = { getYYYYMMDD };