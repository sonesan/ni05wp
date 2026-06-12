new Splide('.splide', {
    type      : 'loop',    // 画像のループ
    autoplay  : true,      // 自動再生をオン
    interval  : 3000,      // 次の画像に切り替わるまでの時間
    speed     : 800,       // スライドが切り替わるスピード
    pagination: true,      // 下の丸いドットを表示
    arrows    : false,     // 左右の矢印はなし
    perPage   : 3,         // 常に3枚表示する
    gap       : '18px',    // 画像と画像のスキマ
    perMove   : 1,         // 1枚ずつ動かす
    focus     : 'center',  // 真ん中の画像を「主役（アクティブ）」にする
    updateOnMove: true,    // 動いている最中も真ん中の判定をキープする
  }).mount();



const buttons = document.querySelectorAll('.btn');
const newsItems = document.querySelectorAll('.event-item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 1. ボタンの「アクティブ状態（白背景）」を切り替える
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // 2. クリックされたボタンのターゲット（カテゴリ名）を取得
    const target = button.dataset.target;

    // 3. ニュースの表示・非表示を切り替える
newsItems.forEach(item => {
  // 💡 item.dataset.category（例: "naya mobile"）を取得
  const itemCategories = item.dataset.category;

  // 「all」が選ばれたか、または指定したカテゴリが文字列に含まれている場合
  if (target === 'all' || itemCategories.includes(target)) {
    item.classList.remove('is-hidden');
  } else {
    item.classList.add('is-hidden');
  }
});
  });
});

// すべてのポップアップを開くボタンを一括で取得して監視する
const triggerButtons = document.querySelectorAll('.popup-trigger');

triggerButtons.forEach(button => {
  button.addEventListener('click', () => {
    // クリックされたボタンの data-popup に書いてあるID名を取得（例: "popup-app"）
    const targetId = button.dataset.popup;
    // そのIDを持つ dialog 要素を探す
    const dialog = document.getElementById(targetId);
    
    if (dialog) {
      dialog.showModal(); // ポップアップを開く
    }
  });
});

// すべてのポップアップ（dialog）に対して閉じる処理を一括で設定
const dialogs = document.querySelectorAll('.service-dialog');

dialogs.forEach(dialog => {
  // ① 中にある「閉じる」ボタンが押されたら閉じる
  const closeBtn = dialog.querySelector('.close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
    });
  }

  // ② ポップアップの外側（黒い背景）がクリックされたら閉じる
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });
});