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

module.exports = { destructDate };