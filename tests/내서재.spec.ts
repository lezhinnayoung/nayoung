import { test, expect } from '@playwright/test';
test('본 작품_작품 노출', async ({ page }) => {

  //레진코믹스 QA 페이지 진입
  await page.goto('https://q-www.lezhin.com/ko');
  // 광고 팝업 닫기 버튼 클릭
  await page.getByRole('button', { name: '닫기' }).click();
  //햄버거 메뉴 클릭
  await page.getByRole('button', { name: '계정 메뉴' }).click();
  //이메일로 로그인
  await page.getByRole('link', { name: '이메일로 로그인' }).click();
  //이메일 커서박스 클릭
  await page.getByLabel('이메일').click();
  //이메일 입력
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  //Tab 해 비밀번호 커서박스로 이동
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('lezhin123!');
  //이메일로 로그인 완료
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  //광고 팝업 닫기 버튼 클릭
  await page.getByRole('button', { name: '닫기' }).click();
  //햄버거 메뉴 클릭
  await page.getByRole('button', { name: '계정 메뉴 30' }).click();
  //내 서재 버튼 클릭
  await page.getByRole('link', { name: '내 서재' }).click();


  //본문에서 텍스트 찾기
  const content = await page.textContent('body');
  // 내 서재 > 본 작품 없을 경우 유효성 체크
  expect(content).toContain('해당하는 작품이 없습니다.');
  expect(content).toContain('레진코믹스의 인기 작품을 감상해보세요.');
  expect(content).toContain('작품 보러가기');

  await page.waitForNavigation();

  //작품 보러가기 버튼 클릭
  await page.getByRole('link', { name: '작품 보러가기' }).click()
  
  //임의의 고정된 에피소드 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/gentleman');

  await page.waitForTimeout(4000); 

  await page.getByRole('button', { name: '01 1화 21.01.17 무료' }).click(); 

  await page.waitForTimeout(4000); 
  //내 서재 본 작품 진입
  await page.goto('https://q-www.lezhin.com/ko/library?page=0');


  //content 변수는 페이지 로드 후 한번만 가져오기 떄문에 reload 필요
  await page.reload();
  const Content = await page.textContent('body');
  expect(Content).toContain('방금');

  //본 작품 삭제
  await page.waitForTimeout(3100); // 대기
  await page.getByRole('button', { name: '편집' }).click();

  await page.getByText('전체 선택').click();
  await page.waitForTimeout(1000); // 대기
  await page.getByRole('button', { name: '삭제' }).click();

 

// 토스트 팝업이 나타날 때까지 기다립니다.
await page.waitForSelector('.lzSnackbar__msg', { timeout: 5000 });

await page.waitForTimeout(3000); // 대기


  // 내 서재 > 본 작품 없을 경우 유효성 체크
  const updatedContent = await page.textContent('body');
  expect(updatedContent).toContain('해당하는 작품이 없습니다.');
  expect(updatedContent).toContain('레진코믹스의 인기 작품을 감상해보세요.');
  expect(updatedContent).toContain('작품 보러가기');

 const alert = await page.waitForSelector('text= 1개 작품 삭제');
 // 얼럿 메시지의 텍스트 가져오기
  const alertText = await alert.textContent();
 // 예상 기대결과 확인 (메시지 내용이 일치하는지 확인)
  expect(alertText).toBe('1개 작품 삭제');

});


test('본작품_필터', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴 30' }).click();

//내 서재 버튼 클릭
await page.getByRole('link', { name: '내 서재' }).click();
await page.getByRole('button', { name: '전체 / 최근 본 순' }).click();
    
const content = await page.textContent('body');
  // 내 서재 > 필터/정렬 유효성 체크
  expect(content).toContain('전체');
  expect(content).toContain('매매무');
  expect(content).toContain('최근 본 순');
  expect(content).toContain('업데이트 순');
  expect(content).toContain('제목 순');

});


test('본작품_필터 비활성화', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴 30' }).click();

//내 서재 버튼 클릭
await page.getByRole('link', { name: '내 서재' }).click();

try {
  await page.getByRole('button', { name: '편집' }).click();
  // 버튼이 클릭되었을 때의 추가 동작 가능.
  // 버튼이 선택되어 실패한 것이므로 테스트 실패 처리
  throw new Error('Expected button not to be clicked');
} catch (error) {
  // 오류가 발생하면 테스트 통과 처리
  expect(error.message).toContain('Expected button not to be clicked');
}

});
test('본작품_편집 모드로 변경', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();


await page.goto('https://q-www.lezhin.com/ko/comic/gentleman');
  await page.waitForTimeout(4000); 
  await page.getByRole('button', { name: '01 1화 21.01.17 무료' }).click(); 

await page.goto('https://q-www.lezhin.com/ko/comic/blossom_days');
  await page.waitForTimeout(4000); 
  await page.getByRole('button', { name: '프롤로그 낙엽 마른 풀(Dry Grasses) 13.05.23 무료' }).click();
  //내 서재 진입
  await page.goto('https://q-www.lezhin.com/ko/library?page=0');

  await page.getByRole('button', { name: '편집' }).click();

  const content = await page.textContent('body');
  // 내 서재 > 편집 모드로 변경 유효 체크
  // 편집 버튼을 선택 했을 경우 '0작품' 글자가 유효하면 PASS or '전체/최근 본 순' 글자가 무효하면 PASS
 expect(content).toContain('0작품');
 expect(content).not.toContain('전체/최근 본 순');
  await page.waitForTimeout(4000); 

  

});

test('본작품_(일반) 작품 개수 노출/작품 삭제', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();

await page.goto('https://q-www.lezhin.com/ko/comic/gentleman/1');
  await page.waitForTimeout(4000); 

await page.goto('https://q-www.lezhin.com/ko/comic/blossom_days/p1');
  await page.waitForTimeout(4000); 
  //내 서재 진입
await page.goto('https://q-www.lezhin.com/ko/library?page=0');
  await page.waitForTimeout(4000); 

await page.getByRole('button', { name: '편집' }).click();
  
await page.getByRole('listitem').filter({ hasText: 'Event수상작 명동젠틀맨 방금' }).click();
  const content = await page.textContent('body');
  // 편집 버튼을 선택 했을 경우 '1작품' 글자가 유효하면 PASS 
  expect(content).toContain('1작품');

await page.getByRole('listitem').filter({ hasText: '블로섬 데이즈 방금' }).locator('i').first().click();
  const content1 = await page.textContent('body');
  // 편집 버튼을 선택 했을 경우 '2작품' 글자가 유효하면 PASS 
  expect(content1).toContain('2작품');
  
await page.getByRole('button', { name: '삭제' }).click();

const alert = await page.waitForSelector('text= 2개 작품 삭제');
  // 얼럿 메시지의 텍스트 가져오기
  const alertText = await alert.textContent();
  // 예상 기대결과 확인 (메시지 내용이 일치하는지 확인)
  expect(alertText).toBe('2개 작품 삭제');

});

test('본작품_(매매무) 작품 개수 노출/작품 삭제', async ({ page }) => {

   //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();

await page.goto('https://q-www.lezhin.com/ko/comic/yesiamshy/1');
  await page.waitForTimeout(4000); 

  //내 서재 진입
await page.goto('https://q-www.lezhin.com/ko/library?page=0');
  await page.waitForTimeout(4000); 

await page.getByRole('button', { name: '편집' }).click();
  
await page.getByRole('listitem').filter({ hasText: '수줍어서 그래 방금' }).click();
  const content = await page.textContent('body');
  // 편집 버튼을 선택 했을 경우 '1작품' 글자가 유효하면 PASS 
  expect(content).toContain('1작품');
  
await page.getByRole('button', { name: '삭제' }).click();

const alert = await page.waitForSelector('text= 1개 작품 삭제');
  // 얼럿 메시지의 텍스트 가져오기
  const alertText = await alert.textContent();
  // 예상 기대결과 확인 (메시지 내용이 일치하는지 확인)
  expect(alertText).toBe('1개 작품 삭제');

});

test('본작품_삭제 반영', async ({ page }) => {

  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();

await page.goto('https://q-www.lezhin.com/ko/comic/yesiamshy/1');
 await page.waitForTimeout(4000); 

 //내 서재 진입
await page.goto('https://q-www.lezhin.com/ko/library?page=0');
 await page.waitForTimeout(4000); 

await page.getByRole('button', { name: '편집' }).click();
 
await page.getByRole('listitem').filter({ hasText: '수줍어서 그래 방금' }).click();
 const content = await page.textContent('body');
 // 편집 버튼을 선택 했을 경우 '1작품' 글자가 유효하면 PASS 
 expect(content).toContain('1작품');
 
await page.getByRole('button', { name: '삭제' }).click();

const alert = await page.waitForSelector('text= 1개 작품 삭제');
 // 얼럿 메시지의 텍스트 가져오기
 const alertText = await alert.textContent();
 // 예상 기대결과 확인 (메시지 내용이 일치하는지 확인)
 expect(alertText).toBe('1개 작품 삭제');

 expect(content).toContain('전체/최근 본 순');
  // 수줍어서 그래 텍스트 없음을 확인
 expect(content).not.toContain('수줍어서 그래');
 expect(content).toContain('해당하는 작품이 없습니다.');
});

test('찜작품_작품 노출', async ({ page }) => {

  //레진코믹스 QA 페이지 진입
  await page.goto('https://q-www.lezhin.com/ko');
  await page.getByRole('button', { name: '닫기' }).click();
  await page.getByRole('button', { name: '계정 메뉴' }).click();
  await page.getByRole('link', { name: '이메일로 로그인' }).click();
  await page.getByLabel('이메일').click();
  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  await page.getByRole('button', { name: '닫기' }).click();
  await page.getByRole('button', { name: '계정 메뉴 30' }).click();
  await page.getByRole('link', { name: '내 서재' }).click();


  //본문에서 텍스트 찾기
  const content = await page.textContent('body');
  // 내 서재 > 본 작품 없을 경우 유효성 체크
  expect(content).toContain('해당하는 작품이 없습니다.');
  expect(content).toContain('레진코믹스의 인기 작품을 감상해보세요.');
  expect(content).toContain('작품 보러가기');

  await page.waitForNavigation();

  //작품 보러가기 버튼 클릭
  await page.getByRole('link', { name: '작품 보러가기' }).click();
  //임의의 고정된 에피소드 진입
  await page.goto('https://q-www.lezhin.com/ko/comic/gentleman');
  await page.waitForTimeout(4000); 

  await page.getByRole('checkbox', { name: '찜하기' }).click();

  //내 서재 본 작품 진입
  await page.goto('https://q-www.lezhin.com/ko/library?page=0');

await page.getByRole('tab', { name: '찜한 작품' }).click();


  //content 변수는 페이지 로드 후 한번만 가져오기 떄문에 reload 필요
  await page.waitForSelector('body');
  const Content = await page.textContent('body');
  
  expect(Content).toContain('완결');
  await page.waitForTimeout(4000); 

  //본 작품 삭제
  await page.getByRole('button', { name: '편집' }).click();

  await page.getByText('전체 선택').click();
  await page.waitForTimeout(1000); // 대기
  await page.getByRole('button', { name: '삭제' }).click();

  // 내 서재 > 본 작품 없을 경우 유효성 체크
  const updatedContent = await page.textContent('body');
  expect(updatedContent).toContain('해당하는 작품이 없습니다.');
  expect(updatedContent).toContain('레진코믹스의 인기 작품을 감상해보세요.');
  expect(updatedContent).toContain('작품 보러가기');

  const alert = await page.waitForSelector('text= 1개 작품 삭제');
 // 얼럿 메시지의 텍스트 가져오기
  const alertText = await alert.textContent();
 // 예상 기대결과 확인 (메시지 내용이 일치하는지 확인)
  expect(alertText).toBe('1개 작품 삭제');

});


test('찜작품_필터', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴 30' }).click();

//내 서재 버튼 클릭
await page.getByRole('link', { name: '내 서재' }).click();
//찜한 작품 버튼 클릭
await page.getByRole('tab', { name: '찜한 작품' }).click();
//필터 선택
await page.getByRole('button', { name: '전체 / 찜한 순' }).click();

    
const content = await page.textContent('body');
  // 내 서재 > 필터/정렬 유효성 체크
  expect(content).toContain('전체');
  expect(content).toContain('매매무');
  expect(content).toContain('찜한 순');
  expect(content).toContain('업데이트 순');
  expect(content).toContain('제목 순');

});



test('찜작품_필터 비활성화', async ({ page }) => {
  //레진코믹스 QA 페이지 진입
await page.goto('https://q-www.lezhin.com/ko');

//로그인 > 내서재 진입
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴' }).click();
await page.getByRole('link', { name: '이메일로 로그인' }).click();
await page.getByLabel('이메일').click();
await page.getByLabel('이메일').fill('auto1@yopmail.com');
await page.getByLabel('이메일').press('Tab');
await page.getByLabel('비밀번호').fill('lezhin123!');
await page.getByRole('button', { name: '이메일로 로그인' }).click();
await page.getByRole('button', { name: '닫기' }).click();
await page.getByRole('button', { name: '계정 메뉴 30' }).click();

//내 서재 버튼 클릭
await page.getByRole('link', { name: '내 서재' }).click();
await page.getByRole('tab', { name: '찜한 작품' }).click();

try {
  await page.getByRole('button', { name: '편집' }).click();
  // 버튼이 클릭되었을 때의 추가 동작 가능.
  // 버튼이 선택되어 실패한 것이므로 테스트 실패 처리
  throw new Error('Expected button not to be clicked');
} catch (error) {
  // 오류가 발생하면 테스트 통과 처리
  expect(error.message).toContain('Expected button not to be clicked');
}

});
