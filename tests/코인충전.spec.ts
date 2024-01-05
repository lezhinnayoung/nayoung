import { test, expect } from '@playwright/test';

test('소프트뱅크', async ({ page, context }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulMobile').getByRole('button').first().click();
await page.getByRole('button', { name: '次 へ' }).click();
await page.getByRole('button', { name: '決済完了する' }).click();
await page.getByRole('button', { name: 'サイトに戻る' }).click();

const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});


test('au', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

  await page.locator('#ulMobile').getByRole('listitem').nth(2).click();


  await page.getByRole('button', { name: '次 へ' }).click();
  await page.getByRole('button', { name: '合算払いで支払う' }).click();
  await page.getByRole('link', { name: 'サイトに戻る' }).click();

  const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

  if (paymentResultElement) {
    console.log('pass');
  } else {
    console.log('fail');
  }
    await page.close();



await page.close();
  });


test('라인페이', async ({ page }) => {
   await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulEwallet').getByRole('button').click();
await page.getByRole('button', { name: '次 へ' }).click();
await page.getByRole('button', { name: '決済完了する' }).click();
await page.getByRole('link', { name: 'サイトに戻る' }).click();

const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 50000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}

  await page.close();
});

test('웹머니', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulPrepaid').getByRole('button').nth(1).click();

await page.getByRole('button', { name: '支払い' }).click();

const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 100000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});


test('도코모', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulMobile').getByRole('button').nth(1).click();
await page.getByRole('button', { name: '次 へ' }).click();
await page.getByRole('button', { name: '決済する' }).click();
await page.getByRole('link', { name: 'サイトに戻る' }).click();

const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});

test('비트캐시', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulPrepaid').getByRole('button').first().click();
await page.getByRole('link', { name: 'ひらがなIDで支払う' }).click();
await page.locator('#pno').click();
await page.locator('#pno').fill('とえゆよるらせなるゆゆれいやしき');
await page.getByRole('button', { name: 'お支払いを行う' }).click();
await page.getByRole('link', { name: 'ご利用先にもどる' }).click();
const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});


    



test('stripe', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulJPCredit').getByRole('button').first().click();

await page.getByPlaceholder('半角数字、ハイフン(-)不要').click();
await page.getByPlaceholder('半角数字、ハイフン(-)不要').fill('4242424242424242');
await page.locator('#cc_expire-m').selectOption('01');
await page.locator('#cc_expire-y').selectOption('2027');
await page.getByPlaceholder('カード裏面の数字下3桁 (AMEXは表面4桁)').click();
await page.getByPlaceholder('カード裏面の数字下3桁 (AMEXは表面4桁)').fill('4242');
await page.locator('#cc_methods').selectOption('1');
await page.getByRole('button', { name: '次 へ' }).click();
await page.getByRole('button', { name: '確 定' }).click();
await page.getByRole('link', { name: 'サイトに戻る' }).click();

const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});


test('stripe/GPOQ', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();

await page.locator('#ulJPCredit').getByRole('button').nth(3).click();
await page.getByPlaceholder('半角数字、ハイフン(-)不要').click();
await page.getByPlaceholder('半角数字、ハイフン(-)不要').fill('4242424242424242');
await page.locator('#cc_expire-m').selectOption('01');
await page.locator('#cc_expire-y').selectOption('2027');
await page.getByPlaceholder('カード裏面の数字下3桁 (AMEXは表面4桁)').click();
await page.getByPlaceholder('カード裏面の数字下3桁 (AMEXは表面4桁)').fill('4242');
await page.locator('#cc_methods').selectOption('1');
await page.getByRole('button', { name: '次 へ' }).click();
await page.getByRole('button', { name: '確 定' }).click();
await page.getByRole('link', { name: 'サイトに戻る' }).click();


const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});

test('라쿠텐페이', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja/payment/payletter?currency=JPY&amount=550.0&pointAmount=0&pg=payletter&idCoinProduct=6755062780135718&paymentMethod=payletter');

  // 이메일 로그인 입력 란 요소 선택
  const emailInputElement = await page.waitForSelector('.login__input');
  await emailInputElement.click();

  // 아이디 입력
  await page.getByLabel('メールアドレス').fill('auto1@yopmail.com');
  await page.getByLabel('メールアドレス').press('Tab');

  // 비밀번호 입력
  await page.getByLabel('パスワード').fill('lezhin123!');

  // 로그인 버튼 클릭
  await page.getByRole('button', { name: 'メールアドレスでログイン' }).click();

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);
  
  const payItem1 = await page.waitForSelector('.lzBtn.lzBtn--large.lzBtn--major', { timeout: 5000 });
  await payItem1.click();
await page.locator('#ulCVS').getByRole('button').click();


await page.getByRole('link', { name: 'サイトに戻る' }).click();


const paymentResultElement = await page.waitForSelector('.paymentResult', { timeout: 5000 });

if (paymentResultElement) {
  console.log('pass');
} else {
  console.log('fail');
}
  await page.close();
});
