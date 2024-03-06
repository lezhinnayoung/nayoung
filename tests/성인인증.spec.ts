import { test, expect } from '@playwright/test';

test('19토글 on 성인화면 노출 KR', async ({ page }) => {
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

  const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
  await button.click();

  await page.waitForNavigation();

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall';
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: '19세 미만 나가기' }).click();

  const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
  await twobutton.click();

  await page.waitForNavigation();

  const currentUrl2 = await page.url();
  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();

});


test('19토글 on 성인화면 노출_US', async ({ page }) => {
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
  await page.getByLabel('Email').fill('auto2@yopmail.com');
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

  const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
  await button.click();

  await page.waitForNavigation();

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcontent-mode%3Fpath%3D%252Fen%26sw%3Dall';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.getByRole('button', { name: 'Leave (I am underage)' }).click();


  const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
  await twobutton.click();

  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcontent-mode%3Fpath%3D%252Fen%26sw%3Dall';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl2 === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.close();
});


test('19토글 on 성인화면 노출 JP', async ({ page }) => {
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

const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
await button.click();

await page.waitForNavigation();

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcontent-mode%3Fpath%3D%252Fja%26sw%3Dall';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: 'このページを離れる' }).click();

  const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
        await twobutton.click();
  
        await page.waitForLoadState('networkidle');
  
        const currentUrl2 = await page.url();
        const expectedUrl2 = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcontent-mode%3Fpath%3D%252Fja%26sw%3Dall';
        await page.waitForLoadState('networkidle');
        console.log('Current URL:', currentUrl);
      
        if (currentUrl2 === expectedUrl) {
          console.log('URL 매칭');
          // URL이 일치하는 경우 
          expect('pass').toBe('pass'); // 매칭하는 경우
        } else {
          console.log('URL 비매칭');
          // URL이 일치하지 않는 경우 
          expect('fail').toBe('pass'); // 비매칭하는 경우
        }
    
  
        await page.close();
  });

test('에피소드 목록 진입 성인화면 노출 KR', async ({ page }) => {
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
  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam');
  await page.waitForLoadState('networkidle');
  
  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.getByRole('button', { name: '19세 미만 나가기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam');
  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});

test('에피소드 목록 진입 성인화면 노출 US', async ({ page }) => {
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
  await page.getByLabel('Email').fill('auto4@yopmail.com');
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

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');
  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: 'Leave (I am underage)' }).click();

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl2 === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.close();

});

test('에피소드 목록 진입 성인화면 노출 JP', async ({ page }) => {
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
 await page.getByLabel('メールアドレス').fill('auto5@yopmail.com');
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

  await page.goto('https://q-www.lezhin.jp/ja/comic/pool');

  await page.waitForLoadState('networkidle');
  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.jp/ja/comic/pool';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});



test('비 성인_성인 이벤트 페이지 KR', async ({ page }) => {
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


  //세일 성인 이벤트 페이지 이동
  await page.goto('https://q-www.lezhin.com/ko/page/qa_ju/211103_jp1'); //성인이벤트 URL
  await page.reload();

  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1';

  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: '19세 미만 나가기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/page/qa_ju/211103_jp1'); //성인이벤트 URL
  await page.reload();

  const currentUrl2 = await page.url();
  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});

test('에피소드 뷰어 진입 성인화면 노출 KR', async ({ page }) => {
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

  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam/1');
  await page.waitForLoadState('networkidle');

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.getByRole('button', { name: '19세 미만 나가기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam/1');
  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
});

test('에피소드 뷰어 진입 성인화면 노출 JP', async ({ page }) => {
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
 await page.getByLabel('メールアドレス').fill('auto5@yopmail.com');
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

await page.goto('https://q-www.lezhin.jp/ja/comic/pool/1');
await page.waitForLoadState('networkidle');

const currentUrl = await page.url();
if (currentUrl === 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1') {
  console.log('url 매칭');
  // URL이 일치하는 경우 
} else {
  console.log('url 비매칭');
  // URL이 일치하지 않는 경우 
}

if (currentUrl === 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1') {
  // 예상 결과가 맞는지 검증하는 코드
  expect('pass').toBe('pass'); // 매칭하는 경우
} else {
  expect('fail').toBe('pass'); // 비매칭하는 경우
}

await page.getByRole('button', { name: 'このページを離れる' }).click();

await page.goto('https://q-www.lezhin.jp/ja/comic/pool/1');
await page.waitForLoadState('networkidle');

      const currentUrl2 = await page.url();
      const expectedUrl2 = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1';
      await page.waitForLoadState('networkidle');
      console.log('Current URL:', currentUrl);
    
      if (currentUrl2 === expectedUrl2) {
        console.log('URL 매칭');
        // URL이 일치하는 경우 
        expect('pass').toBe('pass'); // 매칭하는 경우
      } else {
        console.log('URL 비매칭');
        // URL이 일치하지 않는 경우 
        expect('fail').toBe('pass'); // 비매칭하는 경우
      }
  

      await page.close();
  });

  test('에피소드 뷰어 진입 성인화면 노출 US', async ({ page }) => {
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
  await page.getByLabel('Email').fill('auto4@yopmail.com');
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

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');
  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: 'Leave (I am underage)' }).click();


  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl2 === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.close();

  });
//sgcomes_gq06@yopmail.com
  test('1년 이상 계정 19토글 on 성인화면 노출 KR', async ({ page }) => {
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
    await page.getByLabel('이메일').fill('sgcomes_gq06@yopmail.com');
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
  
    const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
    await button.click();
  
    await page.waitForNavigation();
  
    const currentUrl = await page.url();
    if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
      console.log('url 매칭');
      // URL이 일치하는 경우 
    } else {
      console.log('url 비매칭');
      // URL이 일치하지 않는 경우 
    }
  
    if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
      // 예상 결과가 맞는지 검증하는 코드
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
    await page.getByRole('button', { name: '19세 미만 나가기' }).click();

    const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
    await twobutton.click();
  
    await page.waitForNavigation();
  
    const currentUrl2 = await page.url();
    if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
      console.log('url 매칭');
      // URL이 일치하는 경우 
    } else {
      console.log('url 비매칭');
      // URL이 일치하지 않는 경우 
    }
  
    if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcontent-mode%3Fpath%3D%252Fko%26sw%3Dall') {
      // 예상 결과가 맞는지 검증하는 코드
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
  
    await page.close();
  });

  test('1년 이상 계정 19토글 on 성인화면 노출_US', async ({ page }) => {
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
    await page.getByLabel('Email').fill('sgcomes_gq06@yopmail.com');
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
  
    const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
    await button.click();
  
    await page.waitForNavigation();


    const currentUrl = await page.url();
    const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcontent-mode%3Fpath%3D%252Fen%26sw%3Dall';
    await page.waitForLoadState('networkidle');
    console.log('Current URL:', currentUrl);
  
    if (currentUrl === expectedUrl) {
      console.log('URL 매칭');
      // URL이 일치하는 경우 
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      console.log('URL 비매칭');
      // URL이 일치하지 않는 경우 
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
    await page.getByRole('button', { name: 'Leave (I am underage)' }).click();


    const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
    await twobutton.click();
  
    await page.waitForLoadState('networkidle');
  
    const currentUrl2 = await page.url();
    const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcontent-mode%3Fpath%3D%252Fen%26sw%3Dall';
    await page.waitForLoadState('networkidle');
    console.log('Current URL:', currentUrl);
  
    if (currentUrl2 === expectedUrl) {
      console.log('URL 매칭');
      // URL이 일치하는 경우 
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      console.log('URL 비매칭');
      // URL이 일치하지 않는 경우 
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
  
  
    await page.close();
  
  });
  
  
  test('1년 이상 계정 19토글 on 성인화면 노출 JP', async ({ page }) => {
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
   await page.getByLabel('メールアドレス').fill('sgcomes01@yopmail.com');
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
  
  const button = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
  await button.click();
  
  await page.waitForNavigation();

    const currentUrl = await page.url();
    const expectedUrl = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcontent-mode%3Fpath%3D%252Fja%26sw%3Dall';
    await page.waitForLoadState('networkidle');
    console.log('Current URL:', currentUrl);
  
    if (currentUrl === expectedUrl) {
      console.log('URL 매칭');
      // URL이 일치하는 경우 
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      console.log('URL 비매칭');
      // URL이 일치하지 않는 경우 
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
  
    await page.getByRole('button', { name: 'このページを離れる' }).click();

    const twobutton = await page.waitForSelector('button.style_toggleContentMode__btn__K0Vf9');
          await twobutton.click();
    
          await page.waitForLoadState('networkidle');
    
          const currentUrl2 = await page.url();
          const expectedUrl2 = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcontent-mode%3Fpath%3D%252Fja%26sw%3Dall';
          await page.waitForLoadState('networkidle');
          console.log('Current URL:', currentUrl);
        
          if (currentUrl2 === expectedUrl) {
            console.log('URL 매칭');
            // URL이 일치하는 경우 
            expect('pass').toBe('pass'); // 매칭하는 경우
          } else {
            console.log('URL 비매칭');
            // URL이 일치하지 않는 경우 
            expect('fail').toBe('pass'); // 비매칭하는 경우
          }
      
    
          await page.close();
    });
  

  test('1년 이상 계정 에피소드 목록 진입 성인화면 노출 KR', async ({ page }) => {
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
    await page.getByLabel('이메일').fill('sgcomes_gq06@yopmail.com');
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
  
    await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam');
    await page.waitForLoadState('networkidle');
    
    const currentUrl = await page.url();
    if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
      console.log('url 매칭');
      // URL이 일치하는 경우 
    } else {
      console.log('url 비매칭');
      // URL이 일치하지 않는 경우 
    }
  
    if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
      // 예상 결과가 맞는지 검증하는 코드
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }

    await page.getByRole('button', { name: '19세 미만 나가기' }).click();

    await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam');
    await page.waitForLoadState('networkidle');
    
    const currentUrl2 = await page.url();
    if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
      console.log('url 매칭');
      // URL이 일치하는 경우 
    } else {
      console.log('url 비매칭');
      // URL이 일치하지 않는 경우 
    }
  
    if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam') {
      // 예상 결과가 맞는지 검증하는 코드
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }

    await page.close();
  });

  test('1년 이상 계정 에피소드 목록 진입 성인화면 노출 JP', async ({ page }) => {
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
   await page.getByLabel('メールアドレス').fill('sgcomes01@yopmail.com');
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
  
    await page.goto('https://q-www.lezhin.jp/ja/comic/pool');
  
    await page.waitForLoadState('networkidle');
    const currentUrl = await page.url();
    const expectedUrl = 'https://q-www.lezhin.jp/ja/comic/pool';
    await page.waitForLoadState('networkidle');
    console.log('Current URL:', currentUrl);
  
    if (currentUrl === expectedUrl) {
      console.log('URL 매칭');
      // URL이 일치하는 경우 
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      console.log('URL 비매칭');
      // URL이 일치하지 않는 경우 
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
  
    await page.close();
  });


  test('1년 이상 계정 에피소드 목록 진입 성인화면 노출 US', async ({ page }) => {
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
  await page.getByLabel('Email').fill('sgcomes_gq06@yopmail.com');
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

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');
  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: 'Leave (I am underage)' }).click();

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl2 === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.close();
  });


  test('1년 이상 계정 에피소드 뷰어 진입 성인화면 노출 KR', async ({ page }) => {
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
  await page.getByLabel('이메일').fill('sgcomes_gq06@yopmail.com');
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

  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam/1');
  await page.waitForLoadState('networkidle');

  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.getByRole('button', { name: '19세 미만 나가기' }).click();

  await page.goto('https://q-www.lezhin.com/ko/comic/son_of_nam/1');
  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fcomic%2Fson_of_nam%2F1') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.close();
   
    });

    test('1년 이상 계정 에피소드 뷰어 진입 성인화면 노출 JP', async ({ page }) => {
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
     await page.getByLabel('メールアドレス').fill('sgcomes01@yopmail.com');
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
    
    await page.goto('https://q-www.lezhin.jp/ja/comic/pool/1');
    await page.waitForLoadState('networkidle');
    
    const currentUrl = await page.url();
    if (currentUrl === 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1') {
      console.log('url 매칭');
      // URL이 일치하는 경우 
    } else {
      console.log('url 비매칭');
      // URL이 일치하지 않는 경우 
    }
    
    if (currentUrl === 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1') {
      // 예상 결과가 맞는지 검증하는 코드
      expect('pass').toBe('pass'); // 매칭하는 경우
    } else {
      expect('fail').toBe('pass'); // 비매칭하는 경우
    }
    
    await page.getByRole('button', { name: 'このページを離れる' }).click();
    
    await page.goto('https://q-www.lezhin.jp/ja/comic/pool/1');
    await page.waitForLoadState('networkidle');
    
          const currentUrl2 = await page.url();
          const expectedUrl2 = 'https://q-www.lezhin.jp/ja/adult?redirect=%2Fja%2Fcomic%2Fpool%2F1';
          await page.waitForLoadState('networkidle');
          console.log('Current URL:', currentUrl);
        
          if (currentUrl2 === expectedUrl2) {
            console.log('URL 매칭');
            // URL이 일치하는 경우 
            expect('pass').toBe('pass'); // 매칭하는 경우
          } else {
            console.log('URL 비매칭');
            // URL이 일치하지 않는 경우 
            expect('fail').toBe('pass'); // 비매칭하는 경우
          }
      
    
          await page.close();
      });
  
    test('1년 이상 계정 에피소드 뷰어 진입 성인화면 노출 US', async ({ page }) => {
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
  await page.getByLabel('Email').fill('sgcomes_gq06@yopmail.com');
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

  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');
  const currentUrl = await page.url();
  const expectedUrl = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }

  await page.getByRole('button', { name: 'Leave (I am underage)' }).click();


  await page.goto('https://q-www.lezhinus.com/en/comic/forgednight_sadistic_serviceman');

  await page.waitForLoadState('networkidle');

  const currentUrl2 = await page.url();
  const expectedUrl2 = 'https://q-www.lezhinus.com/en/adult?redirect=%2Fen%2Fcomic%2Fforgednight_sadistic_serviceman';
  await page.waitForLoadState('networkidle');
  console.log('Current URL:', currentUrl);

  if (currentUrl2 === expectedUrl) {
    console.log('URL 매칭');
    // URL이 일치하는 경우 
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    console.log('URL 비매칭');
    // URL이 일치하지 않는 경우 
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }


  await page.close();
    });
  

    test('1년 이상 계정 성인 이벤트 페이지 성인화면 노출 KR', async ({ page }) => {
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
      await page.getByLabel('이메일').fill('sgcomes_gq06@yopmail.com');
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
    
    
      //세일 성인 이벤트 페이지 이동
      await page.goto('https://q-www.lezhin.com/ko/page/qa_ju/211103_jp1'); //성인이벤트 URL
      await page.reload();
    
      const currentUrl = await page.url();
      const expectedUrl = 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1';
    
      console.log('Current URL:', currentUrl);
    
      if (currentUrl === expectedUrl) {
        console.log('URL 매칭');
        // URL이 일치하는 경우 
        expect('pass').toBe('pass'); // 매칭하는 경우
      } else {
        console.log('URL 비매칭');
        // URL이 일치하지 않는 경우 
        expect('fail').toBe('pass'); // 비매칭하는 경우
      }
    
      await page.getByRole('button', { name: '19세 미만 나가기' }).click();
    
      await page.goto('https://q-www.lezhin.com/ko/page/qa_ju/211103_jp1'); //성인이벤트 URL
      await page.reload();
    
      const currentUrl2 = await page.url();
      if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1') {
        console.log('url 매칭');
        // URL이 일치하는 경우 
      } else {
        console.log('url 비매칭');
        // URL이 일치하지 않는 경우 
      }
    
      if (currentUrl2 === 'https://q-www.lezhin.com/ko/adult?redirect=%2Fko%2Fpage%2Fqa_ju%2F211103_jp1') {
        // 예상 결과가 맞는지 검증하는 코드
        expect('pass').toBe('pass'); // 매칭하는 경우
      } else {
        expect('fail').toBe('pass'); // 비매칭하는 경우
      }
    
      await page.close();

    });
    
