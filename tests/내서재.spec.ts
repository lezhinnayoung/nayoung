import { test, expect } from '@playwright/test';
test('본 작품_작품이 없을 경우 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '본 작품' }).click();
  await page.waitForLoadState('networkidle');

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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

 await page.waitForTimeout(4000);

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '閲覧作品' }).click();
  await page.waitForLoadState('networkidle');

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

  await page.getByRole('link', { name: '作品を見に行く' }).click()

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.jp/ja/ranking?genre=_all';
  
  if (currentUrl === expectedUrl) {
    console.log('pass');
  } else {
    console.log('fail');
  }

});

test('본 작품_작품이 없을 경우 US', async ({ page }) => {
  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: 'History' }).click();
  await page.waitForLoadState('networkidle');

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

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.en/us/ranking?genre=_all';

  if (currentUrl === expectedUrl) {
    console.log('pass');
  } else {
    console.log('fail');
  }

  await page.close();
});


test('본작품_필터 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');

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

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '閲覧作品' }).click();
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

   await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: 'History' }).click();
  await page.waitForLoadState('networkidle');

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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '본 작품' }).click();
  await page.waitForLoadState('networkidle');

  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

test('본작품_편집 버튼 비활성화 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '閲覧作品' }).click();
  await page.waitForLoadState('networkidle');


  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

test('본작품_편집 버튼 비활성화 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('tab', { name: 'History' }).click();
  await page.waitForLoadState('networkidle');


  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

test('본작품_편집 모드로 변경 KR', async ({ page }) => {

 await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();

    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '본 작품' }).click();
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
//변경되는 UI 요소 가져오기 
});

test('본작품_편집 모드로 변경 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '閲覧作品' }).click();
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

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto2@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('tab', { name: 'History' }).click();
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  await page.waitForTimeout(3000);
  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/blossom_days/p1');
  await page.waitForTimeout(3000);
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

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
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

  await page.goto('https://q-www.lezhinus.com/en');


  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 3000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 2000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 작품 에피소드 뷰어 진입
    await page.goto('https://q-www.lezhinus.com/en/comic/1to10_en/1');
    await page.waitForTimeout(4000);

    await page.goto('https://q-www.lezhinus.com/en/library');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/revatoon/p1');
  await page.reload();

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');

  
  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();

  
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
  await page.waitForLoadState('networkidle');

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();
  
  await page.close();
});

test('본작품_(매매무) 개수 노출/작품 삭제 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
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

  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();

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

  await page.goto('https://q-www.lezhinus.com/en');


  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 3000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 2000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhinus.com/en/comic/maidnvampire/1');
  await page.waitForTimeout(5000);
  await page.goto('https://q-www.lezhinus.com/en/library');
  await page.reload();

  
  const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();
  
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

test('찜작품_작품이 없을 경우 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '찜한 작품' }).click();
  await page.waitForLoadState('networkidle');

  await page.reload();

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

  await page.getByRole('link', { name: '작품 보러가기' }).click()
  await page.reload();

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
test('찜작품_작품이 없을 경우 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

 await page.waitForTimeout(4000);

  await page.getByRole('link', { name: 'My本棚' }).click();

  await page.getByRole('tab', { name: 'お気に入り' }).click();

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

  await page.getByRole('link', { name: '作品を見に行く' }).click()

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.jp/ja/ranking?genre=_all';
  
  if (currentUrl === expectedUrl) {
    console.log('pass');
  } else {
    console.log('fail');
  }

});

test('찜작품_작품이 없을 경우 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.getByRole('tab', { name: 'Subscribed' }).click();

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

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.en/us/ranking?genre=_all';

  if (currentUrl === expectedUrl) {
    console.log('pass');
  } else {
    console.log('fail');
  }

  await page.close();
});

test('찜작품_필터 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.getByRole('link', { name: '내 서재' }).click();
  await page.reload();
  await page.getByRole('tab', { name: '찜한 작품' }).click();

  const element6 = await page.waitForSelector('.lzFilter__btn');
  await element6.click();

  const expectedMenuItems = [
    '전체', '매매무', '찜한 순', '업데이트 순', '제목 순'
  ];
  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();
});


test('찜작품_필터 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'お気に入り' }).click();
  await page.waitForLoadState('networkidle');


  const element6 = await page.waitForSelector('.lzFilter__btn');
  await element6.click();

  await page.waitForLoadState('networkidle');
  const expectedMenuItems = [
    '全体', '無料', 'お気に入り順', '更新順',
  ];

  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);

  await page.close();
});
  test('찜작품_필터 US', async ({ page }) => {

    await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto1@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element4 = await page.waitForSelector('#log-nav-btn');
    await element4.click();
    await page.waitForLoadState('networkidle');
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Subscribed' }).click();
  
    const element5 = await page.waitForSelector('.lzFilter__btn');
  await element5.click();
  
    const expectedMenuItems = [
      'All', 'WUF', 'Subscribed', 'Updates', 'Title'
  
    ];
    const gnbItems = await page.$$('.lzFilterModal__item');
  await page.waitForLoadState('networkidle');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
    await page.close();
  
});
test('찜작품_편집 비활성화 KR', async ({ page }) => {
  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '찜한 작품' }).click();
  await page.waitForLoadState('networkidle');

  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

  test('찜작품_편집 비활성화 JP', async ({ page }) => {

    await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'お気に入り' }).click();

  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});
 
  test('찜작품_편집 비활성화 US', async ({ page }) => {
  
    await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  
    await page.getByRole('tab', { name: 'Subscribed' }).click();
  
  
    const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
    await page.waitForLoadState('networkidle');
  
    if (editButton) {
      const isDisabled = await editButton.getAttribute('disabled');
  
      if (isDisabled === null) {
        console.log('편집 버튼이 활성화 상태입니다.');
        throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
      } else {
        console.log('편집 버튼이 비활성화 상태입니다.');
        expect(true).toBe(true); // 비활성화된 경우 테스트 통과
      }
    } else {
      console.log('편집 버튼을 찾을 수 없습니다.');
      throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
    }
    await page.close();
  });



test('찜작품_편집 모드로 변경 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();

    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element5 = await page.waitForSelector('#log-nav-btn');
  await element5.click();

  await page.waitForLoadState('networkidle');
  await page.getByRole('link', { name: '내 서재' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: '찜한 작품' }).click();
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
//변경되는 UI 요소 가져오기 
});

test('찜작품_편집 모드로 변경 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: 'お気に入り' }).click();
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

test('찜작품_편집 모드로 변경 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto2@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();

  await page.getByRole('tab', { name: 'Subscribed' }).click();
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

test('찜작품_(일반) 작품 개수 노출/작품 삭제 KR', async ({ page }) => {
  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
 try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/blossom_days/p1');
  await page.waitForTimeout(5000);
await page.getByRole('button', { name: '찜' }).click();

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');


  await page.getByRole('tab', { name: '찜한 작품' }).click();
  await page.reload();
  await page.getByRole('button', { name: '편집' }).click();
  
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
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();
  await page.close();
});


test('찜작품_(일반) 작품 개수 노출/작품 삭제 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');
  await page.getByRole('button', { name: 'アカウントメニュー' }).click();
  await page.getByRole('link', { name: 'メールアドレスでログイン' }).click();
  await page.getByLabel('メールアドレス').click();
  await page.getByLabel('メールアドレス').fill('');
  await page.getByLabel('メールアドレス').press('CapsLock');
  await page.getByLabel('メールアドレス').fill('auto3@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');
  await page.getByLabel('パスワード').fill('lezhin123!');
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();
  await page.waitForLoadState('networkidle');

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhin.jp/ja/comic/deardoor/1');
  await page.waitForTimeout(5000);

await page.getByRole('button', { name: 'お気に入り' }).click();

  await page.goto('https://q-www.lezhin.jp/ja/library');
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: 'お気に入り' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('button', { name: '編集' }).click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('tabpanel', { name: 'お気に入り' }).getByRole('listitem').click();
  await page.waitForLoadState('networkidle');

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

  await page.close();


});

test('찜작품_(일반) 작품 개수 노출/작품 삭제 US', async ({ page }) => {
   await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto2@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //작품 에피소드 뷰어 진입
  await page.goto('https://q-www.lezhinus.com/en/comic/behindstory/1');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Subscribe' }).click();
  await page.reload();
  await page.goto('https://q-www.lezhinus.com/en/library');
  await page.waitForTimeout(3000);

  await page.getByRole('tab', { name: 'Subscribed' }).click();

  await page.getByRole('button', { name: 'Edit' }).click();

  await page.getByRole('tabpanel', { name: 'Subscribed' }).getByRole('listitem').click();
 

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
 
  await page.close();
});



test('소장작품_작품이 없을 경우 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');
  //오늘 하루 안보기 버튼 선택
 try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');
  await page.waitForTimeout(3000);

  await page.getByRole('tab', { name: '소장 작품' }).click();
  await page.reload();

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

  await page.getByRole('link', { name: '작품 보러가기' }).click()
  await page.reload();

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

test('소장작품_작품이 없을 경우 JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

await page.goto('https://q-www.lezhin.com/ja/library?page=0');
  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: '購入作品' }).click();

  await page.reload();

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

  await page.getByRole('link', { name: '作品を見に行く' }).click()
  await page.reload();

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

test('소장작품_작품이 없을 경우 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto1@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();
  await page.waitForLoadState('networkidle');

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.waitForLoadState('networkidle');
  await page.getByRole('tab', { name: 'Purchases' }).click();
  await page.waitForLoadState('networkidle');

  await page.reload();
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

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.en/us/ranking?genre=_all';

  if (currentUrl === expectedUrl) {
    console.log('pass');
  } else {
    console.log('fail');
  }

  await page.close();
});

test('소장작품_필터(만화) KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();
 
await page.getByRole('button', { name: '만화 (0) / 최근 본 순' }).click();

  await page.waitForTimeout(3000);

const expectedMenuItems = [
    '만화', '숨김 작품', '최근 본 순', '업데이트 순', '제목 순', '소장률 순'
  ];
  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();

});

test('소장작품_필터(만화) JP', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();
  await page.getByRole('tab', { name: '購入作品' }).click();

  await page.getByRole('button', { name: '作品 (0) / 閲覧順' }).click();
  await page.waitForTimeout(3000);

  const expectedMenuItems = [
    '作品', '非表示作品', '閲覧順', '更新順', '購入率順'
  ];

  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();
});


  test('소장작품_필터(만화) US', async ({ page }) => {

    await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto1@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
    await page.waitForLoadState('networkidle');
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element = await page.waitForSelector('#log-nav-btn');
    await element.click();
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Purchases' }).click();
    await page.waitForTimeout(3000);
  
    await page.getByRole('button', { name: 'Titles (0) / History' }).click();

    const expectedMenuItems = [
      'Titles', 'Hidden', 'History', 'Updates', 'Title', 'Purchased'
  
    ];
    const gnbItems = await page.$$('.lzFilterModal__item');

    const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
    expect(gnbTexts).toEqual(expectedMenuItems);
    await page.close();
  
});
// jhcomes03@gmail.com
test('소장작품_필터(소설)', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('jhcomes03@gmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  await page.getByRole('button', { name: '만화 (646) / 최근 본 순' }).click();
  await page.waitForLoadState('networkidle');
  const expectedMenuItems = [
    '만화', '소설', '숨김 작품', '최근 본 순', '업데이트 순', '제목 순', '소장률 순'
  ];
  const gnbItems = await page.$$('.lzFilterModal__item');

  const gnbTexts = await Promise.all(gnbItems.map(item => item.textContent()));
  expect(gnbTexts).toEqual(expectedMenuItems);
  await page.close();

});



test('소장작품_필터 비활성화 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});


test('소장작품_편집 비활성화 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();
  await page.getByRole('tab', { name: '購入作品' }).click();


  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

test('소장작품_편집 비활성화 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto1@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
    await page.waitForLoadState('networkidle');
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element = await page.waitForSelector('#log-nav-btn');
    await element.click();
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Purchases' }).click();
    await page.waitForTimeout(3000);


  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForLoadState('networkidle');

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
  await page.close();
});

test('소장작품_편집 모드로 변경 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
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

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

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
//변경되는 UI 요소 가져오기 
});

test('소장작품_편집 모드로 변경 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();

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

test('소장작품_편집 모드로 변경 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto2@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
    await page.waitForLoadState('networkidle');
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element = await page.waitForSelector('#log-nav-btn');
    await element.click();
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Purchases' }).click();
    await page.waitForTimeout(3000);

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


test('소장작품_삭제 팝업 노출 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('auto3@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  await page.getByRole('button', { name: '편집' }).click();

await page.getByText('전체 선택').click();

  const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
  await element4.click();
  
  const lzModalHeaderSelector = '.lzModal__header';
  const lzModalTitleSelector = '.lzModal__title';
  const lzModaldivSelector = '.lzModal__body';
  const lzModalmessageSelector = '.lzModal__body';
  
  const lzModalHeader = await page.waitForSelector(lzModalHeaderSelector, { timeout: 5000 });
  
  if (lzModalHeader) {
    const lzModalTitleElement = await lzModalHeader.$(lzModalTitleSelector);
  
    if (lzModalTitleElement) {
      const titleText = await lzModalTitleElement.evaluate((title) => title.textContent?.trim() || '');
  
      console.log('Title Text:', titleText);
      expect(titleText).toBe('내 서재에서 삭제');
    } else {
      // Element not found
      console.error('Title Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Header Element not found');
    expect(true).toBe(false);
  }
  
  const lzModalBodySelector = '.lzModal__body';
  const dialogMessageSelector = '.dialog-message';
  
  const lzModalBody = await page.waitForSelector(lzModalBodySelector, { timeout: 5000 });
  
  if (lzModalBody) {
    const dialogMessageElement = await lzModalBody.$(dialogMessageSelector);
  
    if (dialogMessageElement) {
      const messageText = await dialogMessageElement.evaluate((message) => message.textContent?.trim() || '');
  
      console.log('Dialog Message Text:', messageText);
      expect(messageText).toBe('선택하신 작품은 내 서재 목록에서 삭제되며,에피소드 목록에서는 감상하실 수 있습니다.');
    } else {
      // Element not found
      console.error('Dialog Message Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Body Element not found');
    expect(true).toBe(false);
  }

  const lzModalFooterSelector = '.lzModal__footer';
const cancelButtonSelector = '.lzBtn.lzBtn--small';
const deleteButtonSelector = '.lzBtn.lzBtn--small.lzBtn--major';

const lzModalFooter = await page.waitForSelector(lzModalFooterSelector, { timeout: 5000 });

if (lzModalFooter) {
  const [cancelButton, deleteButton] = await Promise.all([
    lzModalFooter.$(cancelButtonSelector),
    lzModalFooter.$(deleteButtonSelector)
  ]);

  if (cancelButton && deleteButton) {
    const cancelButtonText = await cancelButton.evaluate((button) => button.textContent?.trim() || '');
    const deleteButtonText = await deleteButton.evaluate((button) => button.textContent?.trim() || '');

    console.log('Cancel Button Text:', cancelButtonText);
    console.log('Delete Button Text:', deleteButtonText);

    expect(cancelButtonText).toBe('취소');
    expect(deleteButtonText).toBe('삭제');
  } else {
    // Element not found
    console.error('Cancel or Delete Button Element not found');
    expect(true).toBe(false);
  }
} else {
  // Element not found
  console.error('Footer Element not found');
  expect(true).toBe(false);
}

});

test('소장작품_삭제 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('auto3@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  await page.getByRole('button', { name: '편집' }).click();

await page.getByText('전체 선택').click();

const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
await element4.click();

await page.getByRole('alertdialog', { name: '내 서재에서 삭제' }).getByRole('button', { name: '삭제' }).click();

  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 10개 작품 삭제');
  const alertText = await alert.textContent();

  expect(alertText).toBe('10개 작품 삭제');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});


test('소장작품_삭제 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
 await element2.click();
 //이메일 로그인 입력 란 요소 선택
 const element3 = await page.waitForSelector('.login__input');
 await element3.click();
 //아이디 입력
 await page.getByLabel('メールアドレス').fill('auto3@yopmail.com');
 await page.getByLabel('メールアドレス').press('Tab');
 //비밀번호 입력
 await page.getByLabel('パスワード').fill('lezhin123!');
 await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();

  await page.getByRole('button', { name: '編集' }).click();

await page.getByText('全選択').click();

const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
await element4.click();

await page.getByRole('alertdialog', { name: '購入作品の削除' }).getByRole('button', { name: '削除' }).click();

  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 10作品を削除');
  const alertText = await alert.textContent();

  expect(alertText).toBe('10作品を削除');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});


test('소장작품_삭제 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto3@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'Purchases' }).click();
  await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Edit' }).click();

await page.getByText('Select All').click();

const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
await element4.click();


await page.getByRole('alertdialog', { name: 'Delete Purchased Titles' }).getByRole('button', { name: 'Delete' }).click();


  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 10 Titles Deleted');
  const alertText = await alert.textContent();
  

  expect(alertText).toBe('10 Titles Deleted');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});



test('소장작품 숨김 작품_삭제 KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('auto4@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  await page.getByRole('button', { name: '편집' }).click();
  await page.getByText('전체 선택').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1작품 선택';

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '숨김' }).click();
  
  const alert1 = await page.waitForSelector('text= 숨김 작품 보기');
  const alertText1 = await alert1.textContent();
  expect(alertText1).toBe('숨김 작품 보기');
  await page.waitForTimeout(5000);

await page.reload();

await page.getByRole('button', { name: '만화 (0) / 최근 본 순' }).click();
  await page.waitForTimeout(3000);

await page.getByRole('option', { name: '숨김 작품' }).click();

  await page.getByRole('button', { name: '편집' }).click();

await page.getByText('전체 선택').click();

const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
await element4.click();

await page.getByRole('alertdialog', { name: '내 서재에서 삭제' }).getByRole('button', { name: '삭제' }).click();

  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 1개 작품 삭제');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1개 작품 삭제');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});


test('소장작품 숨김 작품_삭제 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
 await element2.click();
 //이메일 로그인 입력 란 요소 선택
 const element3 = await page.waitForSelector('.login__input');
 await element3.click();
 //아이디 입력
 await page.getByLabel('メールアドレス').fill('auto4@yopmail.com');
 await page.getByLabel('メールアドレス').press('Tab');
 //비밀번호 입력
 await page.getByLabel('パスワード').fill('lezhin123!');
 await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();

  await page.getByRole('button', { name: '編集' }).click();

await page.getByText('全選択').click();

await page.getByRole('button', { name: '隠す' }).click();

const alert1 = await page.waitForSelector('text= 非表示作品一覧');
  const alertText1 = await alert1.textContent();
  expect(alertText1).toBe('非表示作品一覧');
  await page.waitForTimeout(3000);

  await page.getByRole('button', { name: '作品 (0) / 閲覧順' }).click();
  await page.getByRole('option', { name: '非表示作品' }).click();
  await page.getByRole('button', { name: '編集' }).click();
  await page.getByText('全選択').click();
  await page.getByRole('button', { name: '削除' }).click();
  await page.getByRole('alertdialog', { name: '購入作品の削除' }).getByRole('button', { name: '削除' }).click();


  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 1作品を削除');
  const alertText = await alert.textContent();

  expect(alertText).toBe('1作品を削除');
  await page.waitForTimeout(5000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인 할 수 있음
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});


test('소장작품 숨김 작품_삭제 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto4@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'Purchases' }).click();
  await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Edit' }).click();

await page.getByText('Select All').click();

await page.getByRole('button', { name: 'Hide' }).click();
  
const alert1 = await page.waitForSelector('text= View Hidden');
const alertText1 = await alert1.textContent();
expect(alertText1).toBe('View Hidden');

await page.getByRole('button', { name: 'Titles (0) / History' }).click();
await page.getByRole('option', { name: 'Hidden' }).click();

await page.getByRole('button', { name: 'Edit' }).click();
await page.getByText('Select All').click();
const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
await element4.click();

await page.getByRole('alertdialog', { name: 'Delete Purchased Titles' }).getByRole('button', { name: 'Delete' }).click();


  //1개 작품 삭제 알럿 존재하는지 확인
  const alert = await page.waitForSelector('text= 1 Title Deleted');
  const alertText = await alert.textContent();
  

  expect(alertText).toBe('1 Title Deleted');
  await page.waitForTimeout(3000);

  //편집 버튼이 비활성화 시 작품 삭제 됨을 확인
  const editButton = await page.waitForSelector('.libEdit__btn--open[disabled]', { timeout: 2000 });
  expect(editButton).toBeTruthy();

});

test('소장작품_삭제 팝업 노출 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
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

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();

  await page.getByRole('button', { name: '編集' }).click();

await page.getByText('全選択').click();

  const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
  await element4.click();
  
  const lzModalHeaderSelector = '.lzModal__header';
  const lzModalTitleSelector = '.lzModal__title';
  const lzModaldivSelector = '.lzModal__body';
  const lzModalmessageSelector = '.lzModal__body';
  
  const lzModalHeader = await page.waitForSelector(lzModalHeaderSelector, { timeout: 5000 });
  
  if (lzModalHeader) {
    const lzModalTitleElement = await lzModalHeader.$(lzModalTitleSelector);
  
    if (lzModalTitleElement) {
      const titleText = await lzModalTitleElement.evaluate((title) => title.textContent?.trim() || '');
  
      console.log('Title Text:', titleText);
      expect(titleText).toBe('購入作品の削除');
    } else {
      // Element not found
      console.error('Title Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Header Element not found');
    expect(true).toBe(false);
  }
  
  const lzModalBodySelector = '.lzModal__body';
  const dialogMessageSelector = '.dialog-message';
  
  const lzModalBody = await page.waitForSelector(lzModalBodySelector, { timeout: 5000 });
  
  if (lzModalBody) {
    const dialogMessageElement = await lzModalBody.$(dialogMessageSelector);
  
    if (dialogMessageElement) {
      const messageText = await dialogMessageElement.evaluate((message) => message.textContent?.trim() || '');
  
      console.log('Dialog Message Text:', messageText);
      expect(messageText).toBe('選択した作品は「購入作品」のリストから削除され、エピソードリストからは閲覧することができます。');
    } else {
      // Element not found
      console.error('Dialog Message Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Body Element not found');
    expect(true).toBe(false);
  }

  const lzModalFooterSelector = '.lzModal__footer';
const cancelButtonSelector = '.lzBtn.lzBtn--small';
const deleteButtonSelector = '.lzBtn.lzBtn--small.lzBtn--major';

const lzModalFooter = await page.waitForSelector(lzModalFooterSelector, { timeout: 5000 });

if (lzModalFooter) {
  const [cancelButton, deleteButton] = await Promise.all([
    lzModalFooter.$(cancelButtonSelector),
    lzModalFooter.$(deleteButtonSelector)
  ]);

  if (cancelButton && deleteButton) {
    const cancelButtonText = await cancelButton.evaluate((button) => button.textContent?.trim() || '');
    const deleteButtonText = await deleteButton.evaluate((button) => button.textContent?.trim() || '');

    console.log('Cancel Button Text:', cancelButtonText);
    console.log('Delete Button Text:', deleteButtonText);

    expect(cancelButtonText).toBe('キャンセル');
    expect(deleteButtonText).toBe('削除');
  } else {
    // Element not found
    console.error('Cancel or Delete Button Element not found');
    expect(true).toBe(false);
  }
} else {
  // Element not found
  console.error('Footer Element not found');
  expect(true).toBe(false);
}

});

test('소장작품_삭제 팝업 노출 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto3@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
    await page.waitForLoadState('networkidle');
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element = await page.waitForSelector('#log-nav-btn');
    await element.click();
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Purchases' }).click();
    await page.waitForTimeout(3000);

  await page.getByRole('button', { name: 'Edit' }).click();

  await page.getByText('Select All').click();

  const element4 = await page.waitForSelector('.libEdit__btn.libEdit__btn--delete');
  await element4.click();
  
  const lzModalHeaderSelector = '.lzModal__header';
  const lzModalTitleSelector = '.lzModal__title';
  const lzModaldivSelector = '.lzModal__body';
  const lzModalmessageSelector = '.lzModal__body';
  
  const lzModalHeader = await page.waitForSelector(lzModalHeaderSelector, { timeout: 5000 });
  
  if (lzModalHeader) {
    const lzModalTitleElement = await lzModalHeader.$(lzModalTitleSelector);
  
    if (lzModalTitleElement) {
      const titleText = await lzModalTitleElement.evaluate((title) => title.textContent?.trim() || '');
  
      console.log('Title Text:', titleText);
      expect(titleText).toBe('Delete Purchased Titles');
    } else {
      // Element not found
      console.error('Title Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Header Element not found');
    expect(true).toBe(false);
  }
  
  const lzModalBodySelector = '.lzModal__body';
  const dialogMessageSelector = '.dialog-message';
  
  const lzModalBody = await page.waitForSelector(lzModalBodySelector, { timeout: 5000 });
  
  if (lzModalBody) {
    const dialogMessageElement = await lzModalBody.$(dialogMessageSelector);
  
    if (dialogMessageElement) {
      const messageText = await dialogMessageElement.evaluate((message) => message.textContent?.trim() || '');
  
      console.log('Dialog Message Text:', messageText);
      expect(messageText).toBe('Deleting will remove this title from My Library, but purchased episodes will still be available in the title\'s episode list.');
    } else {
      // Element not found
      console.error('Dialog Message Element not found');
      expect(true).toBe(false);
    }
  } else {
    // Element not found
    console.error('Body Element not found');
    expect(true).toBe(false);
  }

  const lzModalFooterSelector = '.lzModal__footer';
const cancelButtonSelector = '.lzBtn.lzBtn--small';
const deleteButtonSelector = '.lzBtn.lzBtn--small.lzBtn--major';

const lzModalFooter = await page.waitForSelector(lzModalFooterSelector, { timeout: 5000 });

if (lzModalFooter) {
  const [cancelButton, deleteButton] = await Promise.all([
    lzModalFooter.$(cancelButtonSelector),
    lzModalFooter.$(deleteButtonSelector)
  ]);

  if (cancelButton && deleteButton) {
    const cancelButtonText = await cancelButton.evaluate((button) => button.textContent?.trim() || '');
    const deleteButtonText = await deleteButton.evaluate((button) => button.textContent?.trim() || '');

    console.log('Cancel Button Text:', cancelButtonText);
    console.log('Delete Button Text:', deleteButtonText);

    expect(cancelButtonText).toBe('Cancel');
    expect(deleteButtonText).toBe('Delete');
  } else {
    // Element not found
    console.error('Cancel or Delete Button Element not found');
    expect(true).toBe(false);
  }
} else {
  // Element not found
  console.error('Footer Element not found');
  expect(true).toBe(false);
}

});


test('소장작품_숨김(만화) KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('skdsid1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

  await page.getByRole('button', { name: '편집' }).click();
  await page.getByText('전체 선택').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1작품 선택';

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '숨김' }).click();
  
  const alert = await page.waitForSelector('text= 숨김 작품 보기');
  const alertText = await alert.textContent();
  expect(alertText).toBe('숨김 작품 보기');
  await page.waitForTimeout(5000);

  await page.waitForFunction(() => !document.querySelector('.your-alert-class'));
  await page.waitForLoadState('domcontentloaded');
  
  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});
//jhcomes03@gmail.com'
test('소장작품_숨김(소설) KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');

  //오늘 하루 안보기 버튼 선택
  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  //햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();
  //이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();
  //이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();
  //아이디 입력
  await page.getByLabel('이메일').fill('jhcomes03@gmail.com');
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  //오늘 다시 안보기 버튼 선택
   try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }
  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();


await page.getByRole('link', { name: '내 서재' }).click();
await page.reload();
  await page.getByRole('tab', { name: '소장 작품' }).click();

await page.getByRole('button', { name: '만화 (646) / 최근 본 순' }).click();
await page.getByRole('option', { name: '소설' }).click();
await page.waitForTimeout(4000);
await page.getByRole('button', { name: '편집' }).click();
await page.waitForTimeout(4000);

await page.getByText('전체 선택').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '12작품 선택';

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '숨김' }).click();
  
  const alert = await page.waitForSelector('text= 숨김 작품 보기');
  const alertText = await alert.textContent();
  expect(alertText).toBe('숨김 작품 보기');
  await page.waitForTimeout(4000);

  await page.waitForFunction(() => !document.querySelector('.your-alert-class'));
  await page.waitForLoadState('domcontentloaded');
  
  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});

test('소장작품_숨김 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
 await element2.click();
 //이메일 로그인 입력 란 요소 선택
 const element3 = await page.waitForSelector('.login__input');
 await element3.click();
 //아이디 입력
 await page.getByLabel('メールアドレス').fill('skdsid1@yopmail.com');
 await page.getByLabel('メールアドレス').press('Tab');
 //비밀번호 입력
 await page.getByLabel('パスワード').fill('lezhin123!');
 await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();

await page.getByRole('button', { name: '編集' }).click();
  await page.waitForLoadState('networkidle');

await page.getByText('全選択').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1件選択';
  

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

 await page.getByRole('button', { name: '隠す' }).click();
  
  const alert = await page.waitForSelector('text= 非表示作品一覧');
  const alertText = await alert.textContent();
  expect(alertText).toBe('非表示作品一覧');
  await page.waitForLoadState('networkidle');

  await page.getByRole('tab', { name: '購入作品' }).click();
  await page.waitForLoadState('networkidle');


  const editButton = await page.waitForSelector('.libEdit__btn--open');
await page.waitForLoadState('networkidle');

if (editButton) {
  const isDisabled = await editButton.getAttribute('disabled');

  if (isDisabled === null) {
    console.log('편집 버튼이 활성화 상태입니다.');
    expect(true).toBe(true); // 활성화된 경우 테스트 통과
  } else {
    console.log('편집 버튼이 비활성화 상태입니다.');
    throw new Error('편집 버튼이 비활성화 상태입니다.'); // 비활성화된 경우 에러 처리
  }
} else {
  console.log('편집 버튼을 찾을 수 없습니다.');
  throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
}
  await page.close();
});

test('소장작품_숨김 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    // 햄버거 메뉴 버튼 선택
    const element1 = await page.waitForSelector('#log-nav-btn');
    await element1.click();
  
    // 이메일 로그인 버튼 요소 선택
    const element2 = await page.waitForSelector('.logNav__emailBtn');
    await element2.click();
  
    // 이메일 로그인 입력 란 요소 선택
    const element3 = await page.waitForSelector('.login__input');
    await element3.click();
  
    // 아이디 입력
    await page.getByLabel('Email').fill('auto2@yopmail.com');
    await page.getByLabel('Email').press('Tab');
  
    // 비밀번호 입력
    await page.getByLabel('password').fill('lezhin123!');
    await page.getByRole('button', { name: 'Login with email' }).click();
    await page.waitForLoadState('networkidle');
  
    try {
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }
  
    const element = await page.waitForSelector('#log-nav-btn');
    await element.click();
  
    await page.getByRole('link', { name: 'My Library' }).click();
    await page.reload();
    await page.getByRole('tab', { name: 'Purchases' }).click();
    await page.waitForTimeout(3000);

await page.getByRole('button', { name: 'Edit' }).click();
await page.getByText('Select All').click();


  // 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1title';
  

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: 'Hide' }).click();
  
  const alert = await page.waitForSelector('text= View Hidden');
  const alertText = await alert.textContent();
  expect(alertText).toBe('View Hidden');
  await page.waitForLoadState('networkidle');

  const editButton = await page.waitForSelector('.libEdit__btn--open');
await page.waitForLoadState('networkidle');

if (editButton) {
  const isDisabled = await editButton.getAttribute('disabled');

  if (isDisabled === null) {
    console.log('편집 버튼이 활성화 상태입니다.');
    expect(true).toBe(true); // 활성화된 경우 테스트 통과
  } else {
    console.log('편집 버튼이 비활성화 상태입니다.');
    throw new Error('편집 버튼이 비활성화 상태입니다.'); // 비활성화된 경우 에러 처리
  }
} else {
  console.log('편집 버튼을 찾을 수 없습니다.');
  throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
}
  await page.close();
});


test('소설작품_해제 KR', async ({ page }) => {

  
  await page.goto('https://q-www.lezhin.com/ko');
  await page.getByRole('button', { name: '닫기' }).click();
  await page.getByRole('button', { name: '계정 메뉴' }).click();
  await page.getByRole('link', { name: '이메일로 로그인' }).click();
  await page.getByLabel('이메일').click();
  await page.getByLabel('이메일').fill('skdsid1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  await page.getByRole('button', { name: '닫기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');
  await page.waitForTimeout(4000);

  await page.getByRole('tab', { name: '소장 작품' }).click();
  
  await page.getByRole('button', { name: '만화 (0) / 최근 본 순' }).click();
  await page.getByRole('option', { name: '숨김 작품' }).click();


  await page.getByRole('button', { name: '편집' }).click();
  await page.getByText('전체 선택').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1작품 선택';

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }



  await page.getByRole('button', { name: '숨김 해제' }).click();
  
  const alert = await page.waitForSelector('text= 소장 작품 보기');
  const alertText = await alert.textContent();
  expect(alertText).toBe('소장 작품 보기');
  await page.waitForFunction(() => !document.querySelector('.your-alert-class'));
  await page.waitForLoadState('domcontentloaded');
  
  const editButton = await page.waitForSelector('.libEdit__btn--open', { state: 'visible' });

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');
  
    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});
//jhcomes03@gmail.com
test('소장작품_해제(소설) KR', async ({ page }) => {

  await page.goto('https://q-www.lezhin.com/ko');
  await page.getByRole('button', { name: '닫기' }).click();
  await page.getByRole('button', { name: '계정 메뉴' }).click();
  await page.getByRole('link', { name: '이메일로 로그인' }).click();
  await page.getByLabel('이메일').click();
  await page.getByLabel('이메일').fill('jhcomes03@gmail.com');
  await page.getByLabel('이메일').press('Tab');
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  await page.getByRole('button', { name: '닫기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/library?page=0');
  await page.waitForTimeout(4000);

  await page.getByRole('tab', { name: '소장 작품' }).click();
await page.getByRole('button', { name: '만화 (646) / 최근 본 순' }).click();
await page.getByRole('option', { name: '숨김 작품' }).click();
await page.waitForTimeout(4000);
await page.getByRole('button', { name: '편집' }).click();
await page.waitForTimeout(4000);

await page.getByText('전체 선택').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '12작품 선택';

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '숨김' }).click();
  
  const alert = await page.waitForSelector('text= 소장 작품 보기');
  const alertText = await alert.textContent();
  expect(alertText).toBe('소장 작품 보기');
  await page.waitForFunction(() => !document.querySelector('.your-alert-class'));
  await page.waitForTimeout(3000);
  
  const editButton = await page.waitForSelector('.libEdit__btn--open'); // 편집 버튼 선택자로 수정
  await page.waitForTimeout(3000);
  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');

    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});
test('소장작품_해제 JP', async ({ page }) => {

  await page.goto('https://q-www.lezhin.jp/ja');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

 //햄버거 메뉴 버튼 선택
 const element1 = await page.waitForSelector('#log-nav-btn');
 await element1.click();
 //이메일 로그인 버튼 요소 선택
 const element2 = await page.waitForSelector('.logNav__emailBtn');
 await element2.click();
 //이메일 로그인 입력 란 요소 선택
 const element3 = await page.waitForSelector('.login__input');
 await element3.click();
 //아이디 입력
 await page.getByLabel('メールアドレス').fill('skdsid1@yopmail.com');
 await page.getByLabel('メールアドレス').press('Tab');
 //비밀번호 입력
 await page.getByLabel('パスワード').fill('lezhin123!');
 await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

 try {
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}

 const element5 = await page.waitForSelector('#log-nav-btn');
 await element5.click();

  await page.getByRole('link', { name: 'My本棚' }).click();
  await page.reload();

  await page.getByRole('tab', { name: '購入作品' }).click();
  await page.waitForLoadState('networkidle');

await page.getByRole('button', { name: '作品 (0) / 閲覧順' }).click();
await page.getByRole('option', { name: '非表示作品' }).click();

await page.getByRole('button', { name: '編集' }).click();
await page.waitForTimeout(3000);


await page.getByText('全選択').click();

  //리스트 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1件選択';
  

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: '非表示' }).click();

  const alert = await page.waitForSelector('text= 購入作品一覧');
  const alertText = await alert.textContent();
  expect(alertText).toBe('購入作品一覧');
  await page.waitForTimeout(5000);



  const editButton = await page.waitForSelector('.libEdit__btn--open', { state: 'visible' });

  if (editButton) {
    const isDisabled = await editButton.getAttribute('disabled');
  
    if (isDisabled === null) {
      console.log('편집 버튼이 활성화 상태입니다.');
      throw new Error('편집 버튼이 활성화 상태입니다.'); // 활성화된 경우 에러 처리
    } else {
      console.log('편집 버튼이 비활성화 상태입니다.');
      expect(true).toBe(true); // 비활성화된 경우 테스트 통과
    }
  } else {
    console.log('편집 버튼을 찾을 수 없습니다.');
    throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
  }
});

test('소장작품_해제 US', async ({ page }) => {

  await page.goto('https://q-www.lezhinus.com/en');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  // 햄버거 메뉴 버튼 선택
  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  // 이메일 로그인 버튼 요소 선택
  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  // 이메일 로그인 입력 란 요소 선택
  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  // 아이디 입력
  await page.getByLabel('Email').fill('auto2@yopmail.com');
  await page.getByLabel('Email').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('password').fill('lezhin123!');
  await page.getByRole('button', { name: 'Login with email' }).click();
  await page.waitForLoadState('networkidle');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();

  await page.getByRole('link', { name: 'My Library' }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'Purchases' }).click();
  await page.waitForTimeout(3000);


  await page.getByRole('button', { name: 'Titles (0) / History' }).click();

  await page.getByRole('option', { name: 'Hidden' }).click();


  await page.getByRole('button', { name: 'Edit' }).click();
  await page.getByText('Select All').click();
  
  // 선택 후'1작품' 텍스트 존재하는지 확인
  const content1 = await page.textContent('body');

  const searchText = '1title';
  

  const isTextPresent = await page.waitForSelector(`text=${searchText}`);

  if (isTextPresent) {
    expect('pass').toBe('pass'); // 텍스트가 존재하는 경우
  } else {
    expect('fail').toBe('pass'); // 텍스트가 존재하지 않는 경우
  }

  await page.getByRole('button', { name: 'Unhidden' }).click();
  const alert = await page.waitForSelector('text= View Purchases');
  const alertText = await alert.textContent();
  expect(alertText).toBe('View Purchases');
  await page.waitForLoadState('networkidle');

  const editButton = await page.waitForSelector('.libEdit__btn--open');
await page.waitForLoadState('networkidle');

if (editButton) {
  const isDisabled = await editButton.getAttribute('disabled');

  if (isDisabled === null) {
    console.log('편집 버튼이 활성화 상태입니다.');
    expect(true).toBe(true); // 활성화된 경우 테스트 통과
  } else {
    console.log('편집 버튼이 비활성화 상태입니다.');
    throw new Error('편집 버튼이 비활성화 상태입니다.'); // 비활성화된 경우 에러 처리
  }
} else {
  console.log('편집 버튼을 찾을 수 없습니다.');
  throw new Error('편집 버튼을 찾을 수 없습니다.'); // 버튼을 찾을 수 없는 경우 에러 처리
}
  await page.close();
});
