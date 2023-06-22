import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
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
  await page.getByLabel('이메일').fill('spb03265@gmail.com');
  //Tab 해 비밀번호 커서박스로 이동
  await page.getByLabel('이메일').press('Tab');
  //비밀번호 입력
  await page.getByLabel('비밀번호').fill('spb0326500!');
  //이메일로 로그인 완료
  await page.getByRole('button', { name: '이메일로 로그인' }).click();
  //광고 팝업 닫기 버튼 클릭
  await page.getByRole('button', { name: '닫기' }).click();
  //햄버거 메뉴 클릭
  await page.getByRole('button', { name: '계정 메뉴 1' }).click();
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

  await page.getByRole('button', { name: '01 1화 21.01.17 무료 최근 본 에피소드' }).click(); 

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

// 토스트 팝업의 문구를 가져옵니다.
const toastMessage = await page.textContent('.lzSnackbar__msg');

// 예상되는 토스트 팝업의 문구를 expect 함수를 사용하여 확인합니다.
expect(toastMessage).toContain('1개 작품 삭제');
await page.waitForTimeout(3000); // 대기


  // 내 서재 > 본 작품 없을 경우 유효성 체크
  const updatedContent = await page.textContent('body');
  expect(updatedContent).toContain('해당하는 작품이 없습니다.');
  expect(updatedContent).toContain('레진코믹스의 인기 작품을 감상해보세요.');
  expect(updatedContent).toContain('작품 보러가기');


});
