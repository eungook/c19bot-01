const kstDate = require('./kst-date');
const {
	getKST, getKSTFullYear, getKSTMonth, getKSTDate, getKSTDay,
	getKSTHours, getKSTMinutes, getKSTSeconds, getKSTMilliseconds,
} = kstDate;

describe('kst-date.test.js', () => {
	it('2021-12-31T23:59:00.000Z', () => {
		const utc = new Date('2021-12-31T23:59:00.000Z'); // UTC: 2021년 12월 31일 23시 59분, 금요일
		utc.getTimezoneOffset = () => 0; // 0: UTC
		const kst = getKST(utc); // KST: 2022년 1월 1일 8시 59분, 토요일
		console.log({ kst, utc });

		const y = getKSTFullYear(utc);
		expect(y).toBe(2022);

		const m = getKSTMonth(utc);
		expect(m).toBe(0); // 0: 1월

		const d = getKSTDate(utc);
		expect(d).toBe(1);

		const dayOfWeek = getKSTDay(utc);
		expect(dayOfWeek).toBe(6); // 6: 토요일

		const h = getKSTHours(utc);
		expect(h).toBe(8);

		const mi = getKSTMinutes(utc);
		expect(mi).toBe(59);

		const s = getKSTSeconds(utc);
		expect(s).toBe(0);

		const ms = getKSTMilliseconds(utc);
		expect(ms).toBe(0);
	});
});