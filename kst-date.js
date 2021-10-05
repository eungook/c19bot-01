/**
 * 
 * Date를 TimezoneOffset 기준 KST로 보정한다.
 * UTC를 통해 KST를 표현한다.
 * (단, TimezoneOffset은 수정되지 않는다.)
 * @param {Date} date
 */
function getKST(date) {
	const timezone = date.getTimezoneOffset() / 60;
	const hour = 1000 * 60 * 60;
	const kst = new Date(date.getTime() + ((timezone + 9) * hour)); // KST = UTC+09:00
	return kst;
}

/**
 * getKSTFullYear() 메서드는 KST에 따라 지정된 날짜의 연도를 반환합니다.
 * @see [참고: Date.prototype.getUTCFullYear()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear)
 * @param {Date} date
 */
function getKSTFullYear(date) {
	const kst = getKST(date);
	return kst.getUTCFullYear();
}

/**
 * getKSTMonth()는 지정된 날짜의 월을 0부터 시작하는 값 (0은 첫 해를 나타냄)으로 KST에 따라 반환합니다.
 * @see [참고: Date.prototype.getUTCMonth()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth)
 * @param {Date} date
 */
function getKSTMonth(date) {
	const kst = getKST(date);
	return kst.getUTCMonth();
}

/**
 * getKSTDate() 메서드는 KST에 따라 지정된 날짜에 해당 월의 날짜를 반환합니다.
 * @see [참고: Date.prototype.getUTCDate()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate)
 * @param {Date} date
 */
function getKSTDate(date) {
	const kst = getKST(date);
	return kst.getUTCDate();
}

/**
 * getKSTDay() 메서드는 지정된 날짜의 요일을 KST에 따라 반환합니다. 여기서 0은 일요일을 나타냅니다.
 * @see [참고: Date.prototype.getUTCDay()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay)
 * @param {Date} date
 */
function getKSTDay(date) {
	const kst = getKST(date);
	return kst.getUTCDay();
}

/**
 * getKSTHours() 메서드는 KST에 따라 지정된 날짜의 시간을 반환합니다.
 * @see [참고: Date.prototype.getUTCHours()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours)
 * @param {Date} date
 */
function getKSTHours(date) {
	const kst = getKST(date);
	return kst.getUTCHours();
}

/**
 * getKSTMinutes() 메서드는 KST에 따라 지정된 날짜의 분을 반환합니다.
 * @see [참고: Date.prototype.getUTCMinutes()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes)
 * @param {Date} date
 */
function getKSTMinutes(date) {
	const kst = getKST(date);
	return kst.getUTCMinutes();
}

/**
 * getKSTSeconds() 메서드는 KST에 따라 지정된 날짜의 초를 반환합니다.
 * @see [참고: Date.prototype.getUTCSeconds()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds)
 * @param {Date} date
 */
function getKSTSeconds(date) {
	const kst = getKST(date);
	return kst.getUTCSeconds();
}

/**
 * getKSTMinutes() 메서드는 KST에 따라 지정된 날짜의 밀리 초를 반환합니다.
 * @see [참고: Date.prototype.getUTCMilliseconds()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds)
 * @param {Date} date
 */
function getKSTMilliseconds(date) {
	const kst = getKST(date);
	return kst.getUTCMilliseconds();
}

module.exports = {
	getKST,
	getKSTFullYear,
	getKSTMonth,
	getKSTDate,
	getKSTDay,

	getKSTHours,
	getKSTMinutes,
	getKSTSeconds,
	getKSTMilliseconds,
};