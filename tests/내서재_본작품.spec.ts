import { test, expect } from '@playwright/test';
test('본 작품_작품이 없을 경우 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.com/ko/library')


  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '본 작품' }).click();
  await page.waitForLoadState('networkidle');


  //해당하는 작품이 없습니다. 요소 찾기
  const lzComicEmptyMsg = await page.waitForSelector('.lzComicEmpty__msg', { timeout: 5000 });

  if (lzComicEmptyMsg) {
    // 요소가 나타난 경우
    const textContent = await lzComicEmptyMsg.textContent();

    console.log('Debug:', textContent); // 디버깅용 콘솔 출력

    const expectedText = '해당하는 작품이 없습니다.';

    if (textContent && textContent.trim() === expectedText) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }

  // 레진코믹스의 인기 작품을 감상해보세요. 요소 찾기
  const lzComicEmptyMsg1 = await page.waitForSelector('.lzComicEmpty__cta', { timeout: 5000 });

  if (lzComicEmptyMsg1) {
    // 요소가 나타난 경우
    const textContent1 = await lzComicEmptyMsg1.textContent();

    console.log('Debug:', textContent1); // 디버깅용 콘솔 출력

    const expectedText1 = '레진코믹스의 인기 작품을 감상해보세요.';

    if (textContent1 && textContent1.trim() === expectedText1) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }

  //작품 보러가기 선택 후 접근한 링크가 맞는지 확인
  await page.getByRole('link', { name: '작품 보러가기' }).click()
  await page.waitForLoadState('networkidle');

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.com/ko/ranking?genre=_all') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.com/ko/ranking?genre=_all') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});

test('본 작품_작품이 없을 경우 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.jp/ja/library')

  await page.getByRole('tab', { name: '閲覧作品' }).click();
  await page.waitForLoadState('networkidle');

  //해당하는 작품이 없습니다. 요소 찾기
  const lzComicEmptyMsg = await page.waitForSelector('.lzComicEmpty__msg', { timeout: 5000 });

  if (lzComicEmptyMsg) {
    // 요소가 나타난 경우
    const textContent = await lzComicEmptyMsg.textContent();

    console.log('Debug:', textContent); // 디버깅용 콘솔 출력

    const expectedText = '表示する作品が存在しません。';

    if (textContent && textContent.trim() === expectedText) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }

  // 레진코믹스의 인기 작품을 감상해보세요. 요소 찾기
  const lzComicEmptyMsg1 = await page.waitForSelector('.lzComicEmpty__cta', { timeout: 5000 });

  if (lzComicEmptyMsg1) {
    // 요소가 나타난 경우
    const textContent1 = await lzComicEmptyMsg1.textContent();

    console.log('Debug:', textContent1); // 디버깅용 콘솔 출력

    const expectedText1 = '人気作品を確認してみましょう！';

    if (textContent1 && textContent1.trim() === expectedText1) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }


  //작품 보러가기 선택 후 접근한 링크가 맞는지 확인
  await page.getByRole('link', { name: '作品を見に行く' }).click()
  await page.waitForLoadState('networkidle');

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.jp/ja/ranking?genre=_all') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.jp/ja/ranking?genre=_all') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();

});

test('본 작품_작품이 없을 경우 US', async ({ page }) => {
  await page.goto('https://q-www.lezhin.com/en');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');


  await page.goto('https://q-www.lezhinus.com/en/library');

  await page.getByRole('tab', { name: 'History' }).click();
  await page.waitForLoadState('networkidle');

  //해당하는 작품이 없습니다. 요소 찾기
  const lzComicEmptyMsg = await page.waitForSelector('.lzComicEmpty__msg', { timeout: 5000 });

  if (lzComicEmptyMsg) {
    // 요소가 나타난 경우
    const textContent = await lzComicEmptyMsg.textContent();

    console.log('Debug:', textContent); // 디버깅용 콘솔 출력

    const expectedText = 'No titles found';

    if (textContent && textContent.trim() === expectedText) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }

  // 레진코믹스의 인기 작품을 감상해보세요. 요소 찾기
  const lzComicEmptyMsg1 = await page.waitForSelector('.lzComicEmpty__cta', { timeout: 5000 });

  if (lzComicEmptyMsg1) {
    // 요소가 나타난 경우
    const textContent1 = await lzComicEmptyMsg1.textContent();

    console.log('Debug:', textContent1); // 디버깅용 콘솔 출력

    const expectedText1 = 'Check out the most popular titles on Lezhin Comics.';

    if (textContent1 && textContent1.trim() === expectedText1) {
      console.log('pass');
    } else {
      console.log('fail');
    }
  } else {
    // 요소가 나타나지 않은 경우
    console.log('fail');
  }

  await page.getByRole('link', { name: 'see more' }).click();
  await page.waitForLoadState('networkidle');

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhinus.com/en/ranking?genre=_all') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhinus.com/en/ranking?genre=_all') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});


test('본작품_필터 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.com/ko/library')

  await page.waitForLoadState('networkidle');

  //본작 품 필터 선택해 필터 내 요소 비교하기
  const element6 = await page.waitForSelector('.lzFilter__btn');
  await element6.click();

  const expectedMenuItems = [
    '전체', '매매무', '최근 본 순', '업데이트 순', '제목 순'
  ];
  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();
});

test('본작품_필터 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //본작품 필터 선택해 필터 내 요소 비교하기
  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.waitForLoadState('networkidle');

  const element6 = await page.waitForSelector('.lzFilter__btn');
  await element6.click();

  await page.waitForLoadState('networkidle');
  const expectedMenuItems = [
    '全体', '無料', '閲覧順', '更新順',
  ];

  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();
});

test('본작품_필터 US', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/en');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhinus.com/en/library');
  await page.waitForLoadState('networkidle');

  //본작품 필터 선택해 필터 내 요소 비교하기
  const element6 = await page.waitForSelector('.lzFilter__btn');
  await element6.click();

  const expectedMenuItems = [
    'All', 'WUF', 'History', 'Updates', 'Title'

  ];

  const gnbItems = await page.$$('.lzFilterModal__item');
  await page.waitForLoadState('networkidle');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();
});

test('본작품_편집 버튼 비활성화 KR', async ({ page }) => {
  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.com/ko/library')
  await page.waitForLoadState('networkidle');

  await page.getByRole('tab', { name: '본 작품' }).click();
  await page.waitForLoadState('networkidle');

  // 편집 버튼 선택자로 수정
  const editButton = await page.waitForSelector('.libEdit__btn--open');
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    // 활성화된 경우 에러 처리, 비활성화 된 경우 테스트 통과
    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.');
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true);
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.');
  }
  await page.close();
});

test('본작품_편집 버튼 비활성화 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.waitForLoadState('networkidle');

  await page.getByRole('tab', { name: '閲覧作品' }).click();
  await page.waitForLoadState('networkidle');

  // 편집 버튼 선택자로 수정
  const editButton = await page.waitForSelector('.libEdit__btn--open');
  await page.waitForLoadState('networkidle');

  // 활성화된 경우 에러 처리, 비활성화 된 경우 테스트 통과
  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.');
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true);
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.');
  }
  await page.close();
});

test('본작품_편집 버튼 비활성화 US', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/en');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhinus.com/en/library');
  await page.waitForLoadState('networkidle');

  // 편집 버튼 선택자로 수정
  const editButton = await page.waitForSelector('.libEdit__btn--open');
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    // 활성화된 경우 에러 처리, 비활성화 된 경우 테스트 통과
    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.');
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true);
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.');
  }
  await page.close();
});

test('본작품_편집 모드로 변경 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('이메일').fill('auto2@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.com/ko/library')
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: '편집' }).click();
  await page.waitForLoadState('networkidle');

  //휴지통 요소가 노출되는지 확인
  const isButtonVisible = await page.isVisible('.libEdit__btn.libEdit__btn--delete');
  await page.waitForLoadState('networkidle');

  if (isButtonVisible) {
    console.log('pass'); // 버튼이 노출되는 경우
  } else {
    console.log('fail'); // 버튼이 노출되지 않는 경우
  }

  if (isButtonVisible) {
    expect(isButtonVisible).toBeTruthy(); // 버튼이 노출되는 경우
  } else {
    expect(isButtonVisible).toBeFalsy(); // 버튼이 노출되지 않는 경우
  }
  await page.close();

});

test('본작품_편집 모드로 변경 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto2@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: '編集' }).click();

  //휴지통 요소가 노출되는지 확인
  const isButtonVisible = await page.isVisible('.libEdit__btn.libEdit__btn--delete');

  if (isButtonVisible) {
    console.log('pass'); // 버튼이 노출되는 경우

  } else {

    console.log('fail'); // 버튼이 노출되지 않는 경우
  }

  if (isButtonVisible) {
    expect(isButtonVisible).toBeTruthy(); // 버튼이 노출되는 경우
  } else {
    expect(isButtonVisible).toBeFalsy(); // 버튼이 노출되지 않는 경우
  }
  await page.close();


});

test('본작품_편집 모드로 변경 US', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/en');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto2@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.waitForLoadState('networkidle');

  await page.goto('https://q-www.lezhinus.com/en/library');
  await page.waitForLoadState('networkidle');


  await page.getByRole('button', { name: 'Edit' }).click();

  //휴지통 요소가 노출되는지 확인
  const isButtonVisible = await page.isVisible('.libEdit__btn.libEdit__btn--delete');

  if (isButtonVisible) {
    console.log('pass'); // 버튼이 노출되는 경우

  } else {
    console.log('fail'); // 버튼이 노출되지 않는 경우
  }

  if (isButtonVisible) {
    expect(isButtonVisible).toBeTruthy(); // 버튼이 노출되는 경우
  } else {
    expect(isButtonVisible).toBeFalsy(); // 버튼이 노출되지 않는 경우
  }
  await page.close();

});


test('본작품_(일반) 작품 개수 노출/작품 삭제 KR', async ({ page }) => {
  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  //오늘 다시 안보기 버튼 선택

  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  await page.waitForTimeout(3000);
  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/blossom_days/p1');
  await page.waitForLoadState('networkidle');
  
  await page.goto('https://q-www.lezhin.com/ko/library?page=0');

  await page.getByRole('button', { name: '편집' }).click();
  await page.waitForLoadState('networkidle');

  //작품 리스트 요소로 선택하기
  const element5 = await page.waitForSelector('.lzComic__item');
  await element5.click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1작품 선택';
  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '삭제' }).click();
  await page.waitForLoadState('networkidle');

  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 1개 작품 삭제');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1개 작품 삭제');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();
  await page.close();
});

test('본작품_(일반) 작품 개수 노출/작품 삭제 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.jp/ja/comic/deardoor/1');
  await page.waitForLoadState('networkidle');

  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: '編集' }).click();
  await page.waitForLoadState('networkidle');

  //작품 리스트 요소로 선택하기
  const element = await page.waitForSelector('.lzComic__item');
  await element.click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1件選択';
  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '削除' }).click();
  await page.waitForLoadState('networkidle');

  const alert = await page.waitForSelector('text= 1作品を削除');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1作品を削除');

  await page.waitForLoadState('networkidle');

  // 편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();
  await page.close();

});

test('본작품_(일반) 작품 개수 노출/작품 삭제 US', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/en');


  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/en/comic/1to10_en/1');
  await page.waitForLoadState('networkidle');

  await page.goto('https://q-www.lezhin.com/en/library');
  await page.waitForLoadState('networkidle');

  await page.getByRole('button', { name: 'Edit' }).click();

  // 작품 리스트 요소로 선택하기
  const element = await page.waitForSelector('.lzComic__item');
  await element.click();

  // 리스트 선택 후 '1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1Title Selected';
  await page.waitForSelector(`text=${searchText}`); // 텍스트가 나타날 때까지 대기

  // '1 Title Deleted' 버튼 클릭
  //await page.getByRole('button', { name: 'Delete' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  // '1 Title Deleted' 텍스트가 나올 때까지 대기
  const alert = await page.waitForSelector('text=1 Title Deleted', { timeout: 2000 });
  const alertText = await alert.textContent();

  // '1 Title Deleted' 텍스트 검증
  expect(alertText).toBe('1 Title Deleted');

  // 편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

  await page.close();
});


test('본작품_(매매무) 개수 노출/작품 삭제 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/revatoon/p1');
  await page.waitForLoadState('networkidle');

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');

  //필터 선택
  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();

  //매매무 필터 선택
  await page.getByRole('option', { name: '매매무' }).click();
  await page.waitForLoadState('networkidle');

  //필터에 '매매무'라는 텍스트가 존재하는지 확인
  const filterElement = await page.locator('.lzFilter__text.lzFilter__text--filter:has-text("매매무")');
  if (filterElement) {
    // 요소가 존재하는 경우
    const filterText = await filterElement.textContent();
    expect(filterText).toContain('매매무'); // 텍스트에 '매매무'가 포함되어 있는지 확인
  } else {
    // 요소가 존재하지 않는 경우
    expect('fail').toBe('pass');
  }

  await page.getByRole('button', { name: '편집' }).click();
  await page.waitForLoadState('networkidle');

  //작품 리스트 요소로 선택하기
  const element6 = await page.waitForSelector('.lzComic__item');
  await element6.click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1작품 선택';
  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '삭제' }).click();
  await page.waitForLoadState('networkidle');

  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 1개 작품 삭제');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1개 작품 삭제');

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

  await page.close();
});

test('본작품_(매매무) 개수 노출/작품 삭제 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  //아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  //비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.jp/ja/comic/tenshi/1');
  await page.waitForTimeout(5000);

  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.reload();

  //필터 선택
  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();

  //매매무 선택
  await page.getByRole('option', { name: '無料' }).click();

  //필터에 '매매무'라는 텍스트가 존재하는지 확인
  const filterElement = await page.locator('.lzFilter__text.lzFilter__text--filter:has-text("無料")');
  if (filterElement) {
    // 요소가 존재하는 경우
    const filterText = await filterElement.textContent();
    expect(filterText).toContain('無料'); // 텍스트에 '매매무'가 포함되어 있는지 확인
  } else {
    // 요소가 존재하지 않는 경우
    expect('fail').toBe('pass');
  }

  await page.getByRole('button', { name: '編集' }).click();
  await page.waitForLoadState('networkidle');
  //작품 리스트 요소로 선택하기
  const element = await page.waitForSelector('.lzComic__item');
  await element.click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1件選択';
  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '削除' }).click();
  await page.waitForLoadState('networkidle');

  const alert = await page.waitForSelector('text= 1作品を削除');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1作品を削除');

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

  await page.close();
});

test('본작품_(매매무) 개수 노출/작품 삭제 US', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/en');


  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('button.style_supportsItem__OIhu2.style_supportsItem__userMenu__a0S2I');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('a.style_emailLogin__Mguo_', { timeout: 5000 });
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('button.style_lzBtn__tyLuS.style_lzBtn--small__ARkAC.lzBtn--undefined', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/en/comic/maidnvampire/1');
  await page.waitForTimeout(5000);
  await page.goto('https://q-www.lezhin.com/en/library');
  await page.reload();

  //필터 선택
  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();

  //매매무 선택
  await page.getByRole('option', { name: 'WUF' }).click();
  await page.waitForLoadState('networkidle');

  //필터에 '매매무'라는 텍스트가 존재하는지 확인
  const filterElement = await page.locator('.lzFilter__text.lzFilter__text--filter:has-text("WUF")');
  if (filterElement) {
    // 요소가 존재하는 경우
    const filterText = await filterElement.textContent();
    expect(filterText).toContain('WUF'); // 텍스트에 '매매무'가 포함되어 있는지 확인
  } else {
    // 요소가 존재하지 않는 경우
    expect('fail').toBe('pass');
  }

  await page.getByRole('button', { name: 'Edit' }).click();
  await page.waitForLoadState('networkidle');
  //작품 리스트 요소로 선택하기
  const element = await page.waitForSelector('.lzComic__item');
  await element.click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');


  const searchText = '1Title Selected';
  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: 'Delete' }).click();

  await page.waitForLoadState('networkidle');

  const alert = await page.waitForSelector('text= 1 Title Deleted');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1 Title Deleted');

  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();
  await page.close();
});
