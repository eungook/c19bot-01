/**
 * 날짜 정보를 구조 분해하여 리턴한다.
 * @param {*} date 날짜 문자열
 * @returns 
 */
function destructDate(date) {
  date = new Date(date);
  const yyyy = date.getFullYear();
  const m = date.getMonth() + 1;
  const mm = m.toString().padStart(2, '0');
  const d = date.getDate();

  const dd = d.toString().padStart(2, '0');
  const h = date.getHours();
  const hh = h.toString().padStart(2, '0');
  const i = date.getMinutes();
  const ii = i.toString().padStart(2, '0');

  const s = date.getSeconds();
  const ss = s.toString().padStart(2, '0');
  const w = date.getDay();
  const ww = (['일', '월', '화', '수', '목', '금', '토'])[w];

  return {
    date, yyyy, m, mm, d,
    dd, h, hh, i, ii,
    s, ss, w, ww,
  };
}

/**
 * Date를 yyyymmdd 포멧으로 리턴한다.
 * @param date Date 타입
 */
function getYYYYMMDD(date) {
  const { yyyy, mm, dd } = destructDate(date);
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

module.exports = { getYYYYMMDD, getKSTDate, destructDate };