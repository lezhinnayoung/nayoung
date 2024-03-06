import { test, expect } from '@playwright/test';


test('비성인 특정 작품 1개 KR', async ({ page }) => {
  const navigateToNextPage = async () => {
    const nextButton = await page.waitForSelector('.lzNav__btn.lzNav__btn--next', { timeout: 5000 });
    if (nextButton) {
      await nextButton.click();
      await page.waitForLoadState('networkidle');
    } else {
      console.log('lzNav__btn lzNav__btn--next 버튼이 없어 중단합니다.');
      throw new Error('Next button not found.');
    }
  };

  await page.goto('https://q2-www.lezhin.com/ko');

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  const element1 = await page.waitForSelector('#log-nav-btn');
  await element1.click();

  const element2 = await page.waitForSelector('.logNav__emailBtn');
  await element2.click();

  const element3 = await page.waitForSelector('.login__input');
  await element3.click();

  await page.getByLabel('이메일').fill('auto1@yopmail.com');
  await page.getByLabel('이메일').press('Tab');
  
  await page.getByLabel('비밀번호').fill('lezhin123!');
  await page.getByRole('button', { name: '이메일로 로그인' }).click();

  try {
    const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 5000 });
    await element.click();
    console.log('오늘 하루 안보기 버튼 클릭 성공');
  } catch (error) {
    console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
  }

  await page.getByRole('link', { name: '선물함' }).click();

  let presentsItem;

  // 첫 번째 페이지에서 presentsItem 찾기
  try {
    presentsItem = await page.waitForSelector('.presents__item[data-item-id="A2Dh1RwlfXFvdg9mNkBt8w"]', { timeout: 5000 });
  } catch (error) {
    console.log('첫 번째 페이지에서 presents__item을 찾지 못해 lzNav__btn lzNav__btn--next 버튼을 누릅니다.');
    await navigateToNextPage();
    return;
  }

  // 두 번째 페이지부터는 presentsItem을 찾을 때까지 반복
  while (!presentsItem) {
    await navigateToNextPage();

    try {
      presentsItem = await page.waitForSelector('.presents__item[data-item-id="A2Dh1RwlfXFvdg9mNkBt8w"]', { timeout: 5000 });
    } catch (error) {
      console.log('다음 페이지에서도 presents__item을 찾지 못해 계속 진행합니다.');
    }
  }

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q2-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

    const presentsBtn = await presentsItem.$('.presents__info:has-text("100보너스코인")');

    if (presentsBtn) {
      const buttonText = await presentsBtn.textContent();
      expect(buttonText).toContain('100보너스코인');
      console.log('Pass');
    } else {
      console.log('Fail');
    }
    const presentsBtn2 = await presentsItem.$('.presents__info:has-text("비성인 특정 작품 1개")');

    if (presentsBtn2) {
      const buttonText = await presentsBtn2.textContent();
      console.log('buttonText:', buttonText); // 추가된 부분
      expect(buttonText).toContain('비성인 특정 작품 1개');
      console.log('Pass');
    } else {
      console.log('Fail');
    }

    const presentsBtn3 = await presentsItem.$('.presents__info:has-text("등록유효기간: 2036-07-18 00:00")');

    if (presentsBtn3) {
      const buttonText = await presentsBtn3.textContent();
      expect(buttonText).toContain('등록유효기간: 2036-07-18 00:00');
      console.log('Pass');
    } else {
      console.log('Fail');
    }

    const presentsBtn4 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("선물받기")', { timeout: 5000 });

  if (presentsBtn4) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn4.textContent();
    expect(buttonText).toContain('선물받기'); // 텍스트에 '선물받기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  }


  else {
    console.log('presents__item이 없어서 테스트를 진행할 수 없습니다.');
  }

  // 페이지 닫기
  await page.waitForLoadState('networkidle');
  await page.close();
});



test('비성인 특정 작품 1개 JP', async ({ page }) => {
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
await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

 // "비성인 특정 작품 1개" 텍스트를 포함하는 버튼을 기다립니다.
 const presentsItemSelector = '.presents__item[data-item-id="yYhItPyQ52EeE8mv-tLCpQ"]';
 const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

 if (presentsItem) {
   const imgSelector = '.presents__img';
   const imgElement = await presentsItem.$(imgSelector);

   if (imgElement) {
     const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

     if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/4970628502061056/images/wide?updated=1693978595825&width=688') {
       console.log('Image Pass');
     } else {
       console.log('Image Fail');
     }
   } else {
     console.log('Image Fail');
   }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("비성인 특정 작품 1개")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('비성인 특정 작품 1개'); // 텍스트에 '비성인 특정 작품 1개'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100보너스포인트" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100보너스포인트'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "登録有効期限: 2036-07-25 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("登録有効期限: 2036-07-25 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('登録有効期限: 2036-07-25 00:00'); // 텍스트에 '기간만료'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("プレゼントを受け取る")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('プレゼントを受け取る'); // 텍스트에 '선물받기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('비성인 특정 작품 1개 US', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

 // "비성인 특정 작품 1개" 텍스트를 포함하는 버튼을 기다립니다.

 const presentsItemSelector = '.presents__item[data-item-id="bZgcFGc1kmrF20mJSCDcFQ"]';
 const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

 if (presentsItem) {
   const imgSelector = '.presents__img';
   const imgElement = await presentsItem.$(imgSelector);

   if (imgElement) {
     const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

     if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/5219463788167168/images/wide?updated=1703579638537&width=688') {
       console.log('Image Pass');
     } else {
       console.log('Image Fail');
     }
   } else {
     console.log('Image Fail');
   }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("비성인 특정 작품 1개")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('비성인 특정 작품 1개'); // 텍스트에 '비성인 특정 작품 1개'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100 Bonus Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Redeem Gift Until: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Redeem Gift Until: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Redeem Gift Until: 2036-07-18 00:00'); // 텍스트에 '기간만료'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Redeem Gift")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Redeem Gift'); // 텍스트에 'Redeem Gift'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 다수 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="6F2CLuqLiKWN5V32AMIhgA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수'); // 텍스트에 '특정 작품 다수'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100보너스코인" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100보너스코인")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100보너스코인'); // 텍스트에 '100보너스코인'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "등록유효기간: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("등록유효기간: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('등록유효기간: 2036-07-18 00:00'); // 텍스트에 '등록유효기간: 2036-07-18 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("선물받기")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('선물받기'); // 텍스트에 '선물받기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 다수 JP', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="d_gJxXF6mr1Rur7Oqu4saQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수'); // 텍스트에 '특정 작품 다수'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100ボーナスポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "登録有効期限: 2036-07-25 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("登録有効期限: 2036-07-25 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('登録有効期限: 2036-07-25 00:00'); // 텍스트에 '登録有効期限: 2036-07-25 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("プレゼントを受け取る")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('プレゼントを受け取る'); // 텍스트에 'プレゼントを受け取る'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();
} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 다수 US', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="C78mueYlbIOxjZ5qVZvD0w"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }



if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수'); // 텍스트에 '특정 작품 다수'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}


// "100 Bonus Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Redeem Gift Until: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Redeem Gift Until: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Redeem Gift Until: 2036-07-18 00:00'); // 텍스트에 'Redeem Gift Until: 2036-07-18 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Redeem Gift")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Redeem Gift'); // 텍스트에 'Redeem Gift'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}
});



test('전체 작품 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="Z2gTLVQEM9xblAFzAHGDHA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품'); // 텍스트에 '전체 작품'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100코인" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100코인")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100코인'); // 텍스트에 '100코인'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "등록유효기간: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("등록유효기간: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('등록유효기간: 2036-07-18 00:00'); // 텍스트에 '등록유효기간: 2036-07-18 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("선물받기")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('선물받기'); // 텍스트에 '선물받기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}


});

test('전체 작품 JP', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="tiBurJ224U3pDE69PEV8kg"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품'); // 텍스트에 '전체 작품'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ポイント'); // 텍스트에 '100ポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우


  expect('fail').toBe('pass');
}

// "登録有効期限: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("登録有効期限: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('登録有効期限: 2036-07-18 00:00'); // 텍스트에 '登録有効期限: 2036-07-18 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("プレゼントを受け取る")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('プレゼントを受け取る'); // 텍스트에 'プレゼントを受け取る'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();
} else {
  expect('fail').toBe('pass');
}

});

test('전체 작품 US', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="Yc8kCYf5Eddzs5jRRJXOyA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품'); // 텍스트에 '전체 작품'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100 Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Coins'); // 텍스트에 '100 Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우


  expect('fail').toBe('pass');
}

// "Redeem Gift Until: 2036-07-18 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Redeem Gift Until: 2036-07-18 00:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();

  expect(buttonText).toContain('Redeem Gift Until: 2036-07-18 00:00'); // 텍스트에 'Redeem Gift Until: 2036-07-18 00:00'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Redeem Gift")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Redeem Gift'); // 텍스트에 'Redeem Gift'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});


test('전체 작품 선물받음 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="PTh7A-KbNwwRfRp6VhNEFQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품 선물 받음")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품 선물 받음'); // 텍스트에 '전체 작품 선물 받음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100코인" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100코인")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100코인'); // 텍스트에 '100코인'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "사용유효기간: 2138-01-31 04:30" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("사용유효기간: 2138-01-31 04:30")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('사용유효기간: 2138-01-31 04:30'); // 텍스트에 '사용유효기간: 2138-01-31 04:30'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("선물받음")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('선물받음'); // 텍스트에 '선물받음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('전체 작품 선물받음 JP', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="2Qk3iHvsbq_j-pbWdFLlhA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품 선물 받음")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품 선물 받음'); // 텍스트에 '전체 작품 선물 받음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ポイント'); // 텍스트에 '100ポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "使用有効期限: 2138-01-26 08:25" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("使用有効期限: 2138-01-26 08:25")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('使用有効期限: 2138-01-26 08:25'); // 텍스트에 '使用有効期限: 2138-01-26 08:25'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("プレゼント受取り済み")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('プレゼント受取り済み'); // 텍스트에 'プレゼント受取り済み'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});


test('전체 작품 선물받음 US', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  

const presentsItemSelector = '.presents__item[data-item-id="nfDgsQbD86xNmnFKXpqkWQ"]';
const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

if (presentsItem) {
  const imgSelector = '.presents__img';
  const imgElement = await presentsItem.$(imgSelector);

  if (imgElement) {
    const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

    if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-none-target.png') {
      console.log('Image Pass');
    } else {
      console.log('Image Fail');
    }
  } else {
    console.log('Image Fail');
  }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("전체 작품 선물 받음")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('전체 작품 선물 받음'); // 텍스트에 '전체 작품 선물 받음'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Coins")');


if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Coins'); // 텍스트에 '100 Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Use Gift Until: 2138-01-27 04:08" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Use Gift Until: 2138-01-27 04:08")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Use Gift Until: 2138-01-27 04:08'); // 텍스트에 'Use Gift Until: 2138-01-27 04:08'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Gift Redeemed")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Gift Redeemed'); // 텍스트에 'Gift Redeemed'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});




test('특정 작품 1개 작품보기 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');


  const presentsItemSelector = '.presents__item[data-item-id="Z4S23Bdut6EiYrhjZXSirQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


    
if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 작품보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 작품보기'); // 텍스트에 '특정 작품 1개 작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100보너스코인" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100보너스코인")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100보너스코인'); // 텍스트에 '100보너스코인'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "등록유효기간: 2024-03-23 00:00" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("사용유효기간: 2138-01-31 04:30")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('사용유효기간: 2138-01-31 04:30'); // 텍스트에 '사용유효기간: 2138-01-31 04:30'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("작품보기")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('작품보기'); // 텍스트에 '작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.getByRole('listitem').filter({ hasText: '100보너스코인 특정 작품 1개 작품보기 사용유효기간: 2138-01-31 04:30 작품보기' }).getByRole('link', { name: '작품보기' }).click();
  await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

  const currentUrl = await page.url();
  if (currentUrl === 'https://q2-www.lezhin.com/ko/comic/revatoon') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q2-www.lezhin.com/ko/comic/revatoon') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 1개 작품보기 JP', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="PuqgBaAdHIGfVWQlR5rqTQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 작품보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 작품보기'); // 텍스트에 '특정 작품 1개 작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100ボーナスポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "使用有効期限: 2138-01-26 08:29" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("使用有効期限: 2138-01-26 08:29")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('使用有効期限: 2138-01-26 08:29'); // 텍스트에 '使用有効期限: 2138-01-26 08:29'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("作品を読む")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('作品を読む'); // 텍스트에 '作品を読む'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
 // data-item-id가 "PuqgBaAdHIGfVWQlR5rqTQ"인 요소 선택
 const targetElement = await page.waitForSelector(`[data-item-id="PuqgBaAdHIGfVWQlR5rqTQ"]`);

 if (targetElement) {
   // "作品を読む" 버튼 선택
   const readButton = await targetElement.$('.lzBtn.lzBtn--comics');
 
   if (readButton) {
     // 버튼이 나타난 경우 클릭
     await readButton.click();
     console.log('작품을 읽는 버튼을 클릭했습니다.');
   } else {
     console.log('작품을 읽는 버튼을 찾을 수 없습니다.');
   }
 } else {
   console.log('해당하는 data-item-id를 가진 요소를 찾을 수 없습니다.');
 }
 
 await page.waitForLoadState('networkidle');
 await page.waitForTimeout(6000);
 
 const currentUrl = await page.url();
 if (currentUrl === 'https://q-www.lezhin.jp/ja/comic/swingbaeevy') {
   console.log('url 매칭');
   // URL이 일치하는 경우 
 } else {
   console.log('url 비매칭');
   // URL이 일치하지 않는 경우 
 }

 if (currentUrl === 'https://q-www.lezhin.jp/ja/comic/swingbaeevy') {
   // 예상 결과가 맞는지 검증하는 코드
   expect('pass').toBe('pass'); // 매칭하는 경우
 } else {
   expect('fail').toBe('pass'); // 비매칭하는 경우
 }
 await page.close();
} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 1개 작품보기 US', async ({ page }) => {
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
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="jtYVSerzoH0OOka5wfEU7Q"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 작품보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 작품보기'); // 텍스트에 '특정 작품 1개 작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');


if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Use Gift Until: 2138-01-27 04:08" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Use Gift Until: 2138-01-27 04:08")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Use Gift Until: 2138-01-27 04:08'); // 텍스트에 'Use Gift Until: 2138-01-27 04:08'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("See Title")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('See Title'); // 텍스트에 'See Title'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
 // data-item-id가 "PuqgBaAdHIGfVWQlR5rqTQ"인 요소 선택
 const targetElement = await page.waitForSelector(`[data-item-id="jtYVSerzoH0OOka5wfEU7Q"]`);

 if (targetElement) {
   // "See Title" 버튼 선택
   const readButton = await targetElement.$('.lzBtn.lzBtn--comics');
 
   if (readButton) {
     // 버튼이 나타난 경우 클릭
     await readButton.click();
     console.log('작품을 읽는 버튼을 클릭했습니다.');
   } else {
     console.log('작품을 읽는 버튼을 찾을 수 없습니다.');
   }
 } else {
   console.log('해당하는 data-item-id를 가진 요소를 찾을 수 없습니다.');
 }
 
 await page.waitForTimeout(6000);
 
 const currentUrl = await page.url();
 if (currentUrl === 'https://q-www.lezhinus.com/en/comic/close_comfort') {
   console.log('url 매칭');
   // URL이 일치하는 경우 
 } else {
   console.log('url 비매칭');
   // URL이 일치하지 않는 경우 
 }

 if (currentUrl === 'https://q-www.lezhinus.com/en/comic/close_comfort') {
   // 예상 결과가 맞는지 검증하는 코드
   expect('pass').toBe('pass'); // 매칭하는 경우
 } else {
   expect('fail').toBe('pass'); // 비매칭하는 경우
 }
 await page.close();
} else {
  expect('fail').toBe('pass');
}

});

test('특정 다수 작품 보기 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="ePH8V5oLPVuVWC4Oi1tcCA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 다수 작품 보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 다수 작품 보기'); // 텍스트에 '특정 다수 작품 보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100보너스코인" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100보너스코인")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100보너스코인'); // 텍스트에 '100보너스코인'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "사용유효기간: 2138-01-31 04:30" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("사용유효기간: 2138-01-31 04:30")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('사용유효기간: 2138-01-31 04:30'); // 텍스트에 '사용유효기간: 2138-01-31 04:30'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("작품보기")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('작품보기'); // 텍스트에 '작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.getByRole('listitem').filter({ hasText: '100보너스코인 특정 다수 작품 보기 사용유효기간: 2138-01-31 04:30 작품보기' }).getByRole('link', { name: '작품보기' }).click();
  await page.waitForLoadState('networkidle');
await page.waitForTimeout(6000);

  const currentUrl = await page.url();
  if (currentUrl === 'https://q2-www.lezhin.com/ko/presents/ePH8V5oLPVuVWC4Oi1tcCA') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }

  if (currentUrl === 'https://q2-www.lezhin.com/ko/presents/ePH8V5oLPVuVWC4Oi1tcCA') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.close();

} else {
  expect('fail').toBe('pass');
}


});

test('특정 다수 작품 보기 JP', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="BRSRKB_IyJOKWK3x2SrYog"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 다수 작품 보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 다수 작품 보기'); // 텍스트에 '특정 다수 작품 보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100ボーナスポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "使用有効期限: 2138-01-26 08:37" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("使用有効期限: 2138-01-26 08:37")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('使用有効期限: 2138-01-26 08:37'); // 텍스트에 '使用有効期限: 2138-01-26 08:37'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("作品を読む")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('作品を読む'); // 텍스트에 '작품보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.waitForLoadState('networkidle');
  // data-item-id가 "PuqgBaAdHIGfVWQlR5rqTQ"인 요소 선택
  const targetElement = await page.waitForSelector(`[data-item-id="BRSRKB_IyJOKWK3x2SrYog"]`);
 
  if (targetElement) {
    // "作品を読む" 버튼 선택
    const readButton = await targetElement.$('.lzBtn.lzBtn--comics');
  
    if (readButton) {
      // 버튼이 나타난 경우 클릭
      await readButton.click();
      console.log('작품을 읽는 버튼을 클릭했습니다.');
    } else {
      console.log('작품을 읽는 버튼을 찾을 수 없습니다.');
    }
  } else {
    console.log('해당하는 data-item-id를 가진 요소를 찾을 수 없습니다.');
  }
  
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(6000);
  
  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhin.jp/ja/presents/BRSRKB_IyJOKWK3x2SrYog') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }
 
  if (currentUrl === 'https://q-www.lezhin.jp/ja/presents/BRSRKB_IyJOKWK3x2SrYog') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.close();

  
} else {
  expect('fail').toBe('pass');
}


});

test('특정 다수 작품 보기 US', async ({ page }) => {
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

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item[data-item-id="54q0Ij2ne1kpUHFsMCaWYw"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 다수 작품 보기")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 다수 작품 보기'); // 텍스트에 '특정 다수 작품 보기'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100 Bonus Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Use Gift Until: 2138-01-27 06:35" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Use Gift Until: 2138-01-27 06:35")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Use Gift Until: 2138-01-27 06:35'); // 텍스트에 'Use Gift Until: 2138-01-27 06:35'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--comics:has-text("See Title")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('See Title'); // 텍스트에 'See Title'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.waitForLoadState('networkidle');
  // data-item-id가 "PuqgBaAdHIGfVWQlR5rqTQ"인 요소 선택
  const targetElement = await page.waitForSelector(`[data-item-id="54q0Ij2ne1kpUHFsMCaWYw"]`);
 
  if (targetElement) {
    // "作品を読む" 버튼 선택
    const readButton = await targetElement.$('.lzBtn.lzBtn--comics');
  
    if (readButton) {
      // 버튼이 나타난 경우 클릭
      await readButton.click();
      console.log('작품을 읽는 버튼을 클릭했습니다.');
    } else {
      console.log('작품을 읽는 버튼을 찾을 수 없습니다.');
    }
  } else {
    console.log('해당하는 data-item-id를 가진 요소를 찾을 수 없습니다.');
  }
  
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(6000);
  
  const currentUrl = await page.url();
  if (currentUrl === 'https://q-www.lezhinus.com/en/presents/54q0Ij2ne1kpUHFsMCaWYw') {
    console.log('url 매칭');
    // URL이 일치하는 경우 
  } else {
    console.log('url 비매칭');
    // URL이 일치하지 않는 경우 
  }
 
  if (currentUrl === 'https://q-www.lezhinus.com/en/presents/54q0Ij2ne1kpUHFsMCaWYw') {
    // 예상 결과가 맞는지 검증하는 코드
    expect('pass').toBe('pass'); // 매칭하는 경우
  } else {
    expect('fail').toBe('pass'); // 비매칭하는 경우
  }
  await page.close();
} else {
  expect('fail').toBe('pass');
}


});

test('특정 작품 1개 기간만료 KR ', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="OhCB9oKH7mkR4u4-xC9qcQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

  
if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 기간만료'); // 텍스트에 '특정 작품 1개 기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

  
if (presentsItem) {
  const presentsBtn2 = await presentsItem.$('.presents__info:has-text("등록유효기간: 2024-01-02 12:35")');

  if (presentsBtn2) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn2.textContent();
    expect(buttonText).toContain('등록유효기간: 2024-01-02 12:35'); // 텍스트에 '등록유효기간: 2024-01-02 12:35'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("기간만료")', { timeout: 3000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('기간만료'); // 텍스트에 '기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
  await page.waitForLoadState('networkidle');
  await page.close();

} else {
  expect('fail').toBe('pass');
}

});

test('특정 작품 1개 기간만료 JP ', async ({ page }) => {
  await page.goto('https://q-www.lezhin.jp/ja');

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
  const element = await page.waitForSelector('#root-modal-do-not-show', { timeout: 3000 });
  await element.click();
  console.log('오늘 하루 안보기 버튼 클릭 성공');
} catch (error) {
  console.log('오늘 하루 안보기 버튼이 없습니다. 계속 진행합니다.');
}


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="EoJYsBy4Le4CZJzXhor_UA-xC9qcQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 기간만료'); // 텍스트에 '특정 작품 1개 기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100ボーナスポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "使用有効期限: 2138-01-26 08:37" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("登録有効期限: 2023-12-28 18:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('登録有効期限: 2023-12-28 18:00'); // 텍스트에 '使用有効期限: 2138-01-26 08:37'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("期限切れ")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('期限切れ'); // 텍스트에 '期限切れ'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.close();
} else {
  expect('fail').toBe('pass');
}
});


test('특정 작품 1개 기간만료 US ', async ({ page }) => {
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

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="DV9BNK7P9kC4-0lzqA02tA"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);

    if (imgElement) {
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

      if (imgSrc === 'https://q-ccdn.lezhin.com/v2/comics/260/images/wide?updated=1695206622152&width=688') {
        console.log('Image Pass');
      } else {
        console.log('Image Fail');
      }
    } else {
      console.log('Image Fail');
    }

if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 1개 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 1개 기간만료'); // 텍스트에 '특정 작품 1개 기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100 Bonus Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Redeem Gift Until: 2023-12-29 12:15" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Redeem Gift Until: 2023-12-29 12:15")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Redeem Gift Until: 2023-12-29 12:15'); // 텍스트에 'Redeem Gift Until: 2023-12-29 12:15'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Expired")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Expired'); // 텍스트에 'Expired'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.close();
} else {
  expect('fail').toBe('pass');
}
});

test('특정 작품 다수 기간만료 KR', async ({ page }) => {
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


  await page.getByRole('link', { name: '선물함' }).click();
  await page.waitForLoadState('networkidle');
// disabled 기간만료



const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="nV4Xg3qMsvnH8bpyRPOWAQ"]';
const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });

if (presentsItem) {
  const imgSelector = '.presents__img';
  const imgElement = await presentsItem.$(imgSelector);

  if (imgElement) {
    // 이미지 요소가 존재하는 경우
    const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));

    if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
      // 이미지의 소스가 기대한 값과 일치하는 경우
      console.log('Image Pass');
    } else {
      // 이미지의 소스가 일치하지 않는 경우
      console.log('Image Fail');
    }
  } else {
    // 이미지 요소가 존재하지 않는 경우
    console.log('Image Fail');
  }

  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수 기간만료'); // 텍스트에 '특정 작품 다수 기간만료'가 포함되어 있는지 확인
    console.log('Text Pass');
  } else {
    // 버튼이 나타나지 않은 경우
    console.log('Text Fail');
  }
} else {
  // presents__item 요소가 없는 경우
  console.log('Item Fail');
}

const presentsBtn2 = await page.waitForSelector('.presents__info:has-text("등록유효기간: 2024-01-02 12:35")', { timeout: 5000 });

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('등록유효기간: 2024-01-02 12:35'); // 텍스트에 '등록유효기간: 2024-01-02 12:35'가 포함되어 있는지 확인
  console.log('Button Pass');
} else {
  // 버튼이 나타나지 않은 경우
  console.log('Button Fail');
}




const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("기간만료")', { timeout: 5000 });

if (presentsBtn3) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn3.textContent();
  expect(buttonText).toContain('기간만료'); // 텍스트에 '기간만료'가 포함되어 있는지 확인
  console.log('Button Pass');
} else {
  // 버튼이 나타나지 않은 경우
  console.log('Button Fail');
}

await page.waitForLoadState('networkidle');
await page.close();
});

test('특정 작품 다수 기간만료 JP ', async ({ page }) => {
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


await page.getByRole('link', { name: 'Myプレゼント' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="U_ZykPiJtpP1VUSLgtoLIw"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });
  
  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);
  
    if (imgElement) {
      // 이미지 요소가 존재하는 경우
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));
  
      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        // 이미지의 소스가 기대한 값과 일치하는 경우
        console.log('Image Pass');
      } else {
        // 이미지의 소스가 일치하지 않는 경우
        console.log('Image Fail');
      }
    } else {
      // 이미지 요소가 존재하지 않는 경우
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수 기간만료'); // 텍스트에 '특정 작품 다수 기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100ボーナスポイント" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100ボーナスポイント")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100ボーナスポイント'); // 텍스트에 '100ボーナスポイント'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "使用有効期限: 2138-01-26 08:37" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("登録有効期限: 2023-12-28 18:00")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('登録有効期限: 2023-12-28 18:00'); // 텍스트에 '使用有効期限: 2138-01-26 08:37'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("期限切れ")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('期限切れ'); // 텍스트에 '期限切れ'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.close();
} else {
  expect('fail').toBe('pass');
}
});


test('특정 작품 다수 기간만료 US ', async ({ page }) => {
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

  const element = await page.waitForSelector('#log-nav-btn');
  await element.click();
  await page.getByRole('link', { name: 'Gift Box' }).click();
  await page.waitForLoadState('networkidle');

  const presentsItemSelector = '.presents__item.presents__item--disabled[data-item-id="53eowAa6SeokRECyGifTpQ"]';
  const presentsItem = await page.waitForSelector(presentsItemSelector, { timeout: 5000 });
  
  if (presentsItem) {
    const imgSelector = '.presents__img';
    const imgElement = await presentsItem.$(imgSelector);
  
    if (imgElement) {
      // 이미지 요소가 존재하는 경우
      const imgSrc = await imgElement.evaluate(img => img.getAttribute('src'));
  
      if (imgSrc === '//ccdn.lezhin.com/files/assets/img/present-img-multiple-target.png') {
        // 이미지의 소스가 기대한 값과 일치하는 경우
        console.log('Image Pass');
      } else {
        // 이미지의 소스가 일치하지 않는 경우
        console.log('Image Fail');
      }
    } else {
      // 이미지 요소가 존재하지 않는 경우
      console.log('Image Fail');
    }


if (presentsItem) {
  const presentsBtn = await presentsItem.$('.presents__info:has-text("특정 작품 다수 기간만료")');

  if (presentsBtn) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn.textContent();
    expect(buttonText).toContain('특정 작품 다수 기간만료'); // 텍스트에 '특정 작품 다수 기간만료'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }
} else {
  // presents__item 요소가 없는 경우
  expect('fail').toBe('pass');
}

// "100 Bonus Coins" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn1 = await presentsItem.$('.presents__info:has-text("100 Bonus Coins")');

if (presentsBtn1) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn1.textContent();
  expect(buttonText).toContain('100 Bonus Coins'); // 텍스트에 '100 Bonus Coins'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}

// "Redeem Gift Until: 2023-12-29 12:15" 텍스트를 포함하는 버튼을 기다립니다.
const presentsBtn2 = await presentsItem.$('.presents__info:has-text("Redeem Gift Until: 2023-12-29 12:15")');

if (presentsBtn2) {
  // 버튼이 나타난 경우
  const buttonText = await presentsBtn2.textContent();
  expect(buttonText).toContain('Redeem Gift Until: 2023-12-29 12:15'); // 텍스트에 'Redeem Gift Until: 2023-12-29 12:15'가 포함되어 있는지 확인
  expect('pass').toBe('pass');
} else {
  // 버튼이 나타나지 않은 경우
  expect('fail').toBe('pass');
}
const presentsBtn3 = await page.waitForSelector('.lzBtn.lzBtn--presents:has-text("Expired")', { timeout: 5000 });

  if (presentsBtn3) {
    // 버튼이 나타난 경우
    const buttonText = await presentsBtn3.textContent();
    expect(buttonText).toContain('Expired'); // 텍스트에 '期Expired限切れ'가 포함되어 있는지 확인
    expect('pass').toBe('pass');
  } else {
    // 버튼이 나타나지 않은 경우
    expect('fail').toBe('pass');
  }

  await page.close();
} else {
  expect('fail').toBe('pass');
}
});
