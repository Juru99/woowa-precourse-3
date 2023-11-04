export const INPUT_MESSAGE = Object.freeze({
  amount: '구입금액을 입력해 주세요.',
  jackpot: '당첨 번호를 입력해 주세요.',
  bonus: '보너스 번호를 입력해 주세요.',
});

export const PRINT_MESSAGE = Object.freeze({
  lottoCount: '개를 구매했습니다.',
  jackpot: '당첨 통계\n---',
  prize: {
    '1등': '6개 일치 (2,000,000,000원) - 0개',
    '2등': '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '3등': '5개 일치 (1,500,000원) - ',
    '4등': '4개 일치 (50,000원) - ',
    '5등': '3개 일치 (5,000원) - ',
  },
});

export const ERROR_MESSAGE = Object.freeze({
  notNumber: '[ERROR] 숫자 자료형이 아닙니다.',
  notArray: '[ERROR] 배열 자료형이 아닙니다.',
  notRange: '[ERROR] 1부터 45 사이의 숫자가 아닙니다',
  notDifferent: '[ERROR] 서로 다른 숫자가 아닙니다',
  notAscending: '[ERROR] 오름차순이 아닙니다',
  amount: '[ERROR] 단위로 나누어 떨어지지 않는 숫자입니다.',
  lottoLength: '[ERROR] 로또 번호가 6개가 아닙니다',
});

export const CONFIG = Object.freeze({
  lottoLength: 6,
  price: 1000,
  range: {
    minNumber: 1,
    maxNumber: 45,
  },
  prize: {
    '1등': 2000000000,
    '2등': 30000000,
    '3등': 1500000,
    '4등': 50000,
    '5등': 5000,
  },
});
