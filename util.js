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
 * 날짜를 포매팅한다
 * @param {Date} date Date 객체
 * @param {string} format yyyy, mm, m, dd, d, hh, h, ii, i, ss, s, ww, w를 조합한 포맷 문자열 (예: yyyy-mm-dd)
 * @returns {string} 포매팅된 날짜
 */
function formatDate(date, format) {
  const d = destructDate(date);
  return format
    .replaceAll('yyyy', d.yyyy)
    .replaceAll('mm', d.mm)
    .replaceAll('m', d.m)
    .replaceAll('dd', d.dd)
    .replaceAll('d', d.d)
    .replaceAll('hh', d.hh)
    .replaceAll('h', d.h)
    .replaceAll('ii', d.ii)
    .replaceAll('i', d.i)
    .replaceAll('ss', d.ss)
    .replaceAll('s', d.s)
    .replaceAll('ww', d.w)
    .replaceAll('w', d.w);
}

module.exports = { destructDate, formatDate };