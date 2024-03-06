import { test, expect } from '@playwright/test';

test('알림함 랜딩 KR', async ({ page }) => {
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


  await page.goto('https://q-www.lezhin.com/ko/notifications')

  // "선공개" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="252332"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 랜딩'); // 텍스트에 '알림함 랜딩'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="252332"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();
  await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.com/ko/comic/revatoon') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.com/ko/comic/revatoon') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 랜딩 JP', async ({ page }) => {
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
 await page.getByLabel('メールアドレス').fill('autorim@yopmail.com');
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

  await page.goto('https://q-www.lezhin.jp/ja/notifications')


  // "알림함 랜딩" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="269086"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 랜딩'); // 텍스트에 '알림함 랜딩'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="269086"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();
  await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.jp/ja/comic/relife') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.jp/ja/comic/relife') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 랜딩 US', async ({ page }) => {
  await page.goto('https://q-www.lezhinus.com/en');

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
  await page.getByLabel('Email').fill('autorim1@yopmail.com');
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

await page.goto('https://q-www.lezhinus.com/en/notifications')

  // "알림함 랜딩" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="269094"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 랜딩'); // 텍스트에 '알림함 랜딩'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item.noti__item--read[data-item-id="269094"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();

await page.waitForTimeout(6000);

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhinus.com/en/comic/lookatme') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhinus.com/en/comic/lookatme') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.waitForLoadState('networkidle');
  await page.close();
});


test('알림함 랜딩 없음 KR', async ({ page }) => {
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
      const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
      await element.click();
      console.log('오늘 하루 안보기 버튼 클릭 성공');
    } catch (error) {
      console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
    }

    await page.goto('https://q-www.lezhin.com/ko/notifications')

// "선공개" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="252333"]', { timeout: 5000 });

if (presentsItem) {
const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩 없음")');

if (presentsBtn) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
  if (buttonText) {
    expect(buttonText).toContain('알림함 랜딩 없음'); // 텍스트에 '알림함 랜딩 없음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 텍스트가 없는 경우
    expect('fail').toBe('fail');
  }
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('fail');
}
} else {
// presents__item 요소가 없는 경우
expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item[data-item-id="252333"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();
await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

const currentUrl = await page.url();
if (currentUrl === 'https://q-www.lezhin.com/ko/notifications') {
  console.log('url 매칭');
  // URL이 일치하는 경우 
} else {
  console.log('url 비매칭');
  // URL이 일치하지 않는 경우 
}

if (currentUrl === 'https://q-www.lezhin.com/ko/notifications') {
  // 예상 결과가 맞는지 검증하는 코드
  expect('pass').toBe('pass'); // 매칭하는 경우
} else {
  expect('fail').toBe('pass'); // 비매칭하는 경우
}

await page.waitForLoadState('networkidle');
await page.close();


});


test('알림함 랜딩 없음 JP', async ({ page }) => {
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
 await page.getByLabel('メールアドレス').fill('autorim@yopmail.com');
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

  await page.goto('https://q-www.lezhin.jp/ja/notifications')

// ""알림함 랜딩 없음" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="269088"]', { timeout: 5000 });

if (presentsItem) {
const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩 없음")');

if (presentsBtn) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
  if (buttonText) {
    expect(buttonText).toContain('알림함 랜딩 없음'); // 텍스트에 '알림함 랜딩 없음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 텍스트가 없는 경우
    expect('fail').toBe('fail');
  }
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('fail');
}
} else {
// presents__item 요소가 없는 경우
expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item[data-item-id="269088"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();
await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

const currentUrl = await page.url();
if (currentUrl === 'https://q-www.lezhin.jp/ja/notifications') {
  console.log('url 매칭');
  // URL이 일치하는 경우 
} else {
  console.log('url 비매칭');
  // URL이 일치하지 않는 경우 
}

if (currentUrl === 'https://q-www.lezhin.jp/ja/notifications') {
  // 예상 결과가 맞는지 검증하는 코드
  expect('pass').toBe('pass'); // 매칭하는 경우
} else {
  expect('fail').toBe('pass'); // 비매칭하는 경우
}

  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 랜딩 없음 US', async ({ page }) => {
  await page.goto('https://q-www.lezhinus.com/en');

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
  await page.getByLabel('Email').fill('autorim1@yopmail.com');
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

await page.goto('https://q-www.lezhinus.com/en/notifications')

// ""알림함 랜딩 없음" 텍스트를 포함하는 버튼을 기다립니다.
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="269094"]', { timeout: 5000 });

if (presentsItem) {
const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 랜딩 없음")');

if (presentsBtn) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
  if (buttonText) {
    expect(buttonText).toContain('알림함 랜딩 없음'); // 텍스트에 '알림함 랜딩 없음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 텍스트가 없는 경우
    expect('fail').toBe('fail');
  }
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('fail');
}
} else {
// presents__item 요소가 없는 경우
expect('fail').toBe('fail');
}
const presentsItem1 = await page.waitForSelector('.noti__item[data-item-id="269094"]', { timeout: 5000 });

// 클릭 이벤트 발생
await presentsItem1.click();



const currentUrl = await page.url();
if (currentUrl === 'https://q-www.lezhinus.com/en/notifications') {
  console.log('url 매칭');
  // URL이 일치하는 경우 
} else {
  console.log('url 비매칭');
  // URL이 일치하지 않는 경우 
}

if (currentUrl === 'https://q-www.lezhinus.com/en/notifications') {
  // 예상 결과가 맞는지 검증하는 코드
  expect('pass').toBe('pass'); // 매칭하는 경우
} else {
  expect('fail').toBe('pass'); // 비매칭하는 경우
}

  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 안읽음 상태 KR', async ({ page }) => {
  await page.goto('https://q2-www.lezhin.com/ko');
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

  const element4 = await page.waitForSelector('#log-nav-btn');
  await element4.click();

await page.getByRole('link', { name: '알림함' }).click();

  //noti__item으로 읽지 않은 상태를 나타남
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="252334"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 안 읽은 상태")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 안 읽은 상태'); // 텍스트에 '알림함 안 읽은 상태'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 안읽음 상태 JP', async ({ page }) => {
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
 await page.getByLabel('メールアドレス').fill('autorim@yopmail.com');
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

  await page.goto('https://q-www.lezhin.jp/ja/notifications')

  //noti__item으로 읽지 않은 상태를 나타남
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="269089"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 안 읽은 상태")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 안 읽은 상태'); // 텍스트에 '알림함 안 읽은 상태'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
  await page.waitForLoadState('networkidle');
  await page.close();
});

test('알림함 안읽음 상태 US', async ({ page }) => {
  await page.goto('https://q-www.lezhinus.com/en');

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
  await page.getByLabel('Email').fill('autorim1@yopmail.com');
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

await page.goto('https://q-www.lezhinus.com/en/notifications')

  //noti__item으로 읽지 않은 상태를 나타남
const presentsItem = await page.waitForSelector('.noti__item[data-item-id="269096"]', { timeout: 5000 });

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.noti__link:has-text("알림함 안 읽은 상태")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.evaluate((element: Element) => element.textContent?.trim());
    if (buttonText) {
      expect(buttonText).toContain('알림함 안 읽은 상태'); // 텍스트에 '알림함 안 읽은 상태'가 포함되어 있는지 확인
      expect('pass').toBe('pass');
    } else {
      // 텍스트가 없는 경우
      expect('fail').toBe('fail');
    }
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('fail');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('fail');
}
  await page.waitForLoadState('networkidle');
  await page.close();
});