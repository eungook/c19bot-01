/**
 * 날짜 정보를 구조 분해하여 리턴한다.
 * @param {Date} date Date 객체
 * @returns 
 */
function destructDate(date) {
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
    yyyy, m, mm, d, dd,
    h, hh, i, ii, s,
    ss, w, ww,
  };
}

/**
 * 날짜 정보를 UTC 기준으로 구조 분해하여 리턴한다.
 * @param {Date} date Date 객체
 * @returns 
 */
function destructDateUTC(date) {
  const yyyy = date.getUTCFullYear();
  const m = date.getUTCMonth() + 1;
  const mm = m.toString().padStart(2, '0');
  const d = date.getUTCDate();
  const dd = d.toString().padStart(2, '0');

  const h = date.getUTCHours();
  const hh = h.toString().padStart(2, '0');
  const i = date.getUTCMinutes();
  const ii = i.toString().padStart(2, '0');
  const s = date.getUTCSeconds();

  const ss = s.toString().padStart(2, '0');
  const w = date.getUTCDay();
  const ww = (['일', '월', '화', '수', '목', '금', '토'])[w];

  return {
    yyyy, m, mm, d, dd,
    h, hh, i, ii, s,
    ss, w, ww,
  };
}

module.exports = { destructDate, destructDateUTC };