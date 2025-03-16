// 駅情報データベース
const stationDetails = {
  "JB-01": { // 三鷹駅
    name: "三鷹駅",
    furigana: "みたかえき",
    landmarks: ["三鷹の森ジブリ美術館", "井の頭恩賜公園"],
    transferLines: ["中央線"]
  },
  "JB-02": { // 吉祥寺駅
    name: "吉祥寺駅",
    furigana: "きちじょうじえき",
    landmarks: ["井の頭公園", "吉祥寺サンロード商店街"],
    transferLines: ["中央線", "京王井の頭線"]
  },
  "JB-03": { // 西荻窪駅
    name: "西荻窪駅",
    furigana: "にしおぎくぼえき",
    landmarks: ["西荻窪テラス", "善福寺公園"],
    transferLines: ["中央線"]
  },
  "JB-04": { // 荻窪駅
    name: "荻窪駅",
    furigana: "おぎくぼえき",
    landmarks: ["荻窪タウンセブン", "大田黒公園"],
    transferLines: ["中央線", "丸ノ内線"]
  },
  "JB-05": { // 阿佐ケ谷駅
    name: "阿佐ケ谷駅",
    furigana: "あさがやえき",
    landmarks: ["阿佐ヶ谷パールセンター商店街", "杉並アニメーションミュージアム"],
    transferLines: ["中央線"]
  },
  "JB-06": { // 高円寺駅
    name: "高円寺駅",
    furigana: "こうえんじえき",
    landmarks: ["高円寺パル商店街", "和田堀公園"],
    transferLines: ["中央線"]
  },
  "JB-07": { // 中野駅
    name: "中野駅",
    furigana: "なかのえき",
    landmarks: ["中野ブロードウェイ", "中野サンモール商店街"],
    transferLines: ["中央線", "東西線"]
  },
  "JB-08": { // 東中野駅
    name: "東中野駅",
    furigana: "ひがしなかのえき",
    landmarks: ["東中野セントラルパーク", "本妙寺"],
    transferLines: ["中央線", "総武線"]
  },
  "JB-09": { // 大久保駅
    name: "大久保駅",
    furigana: "おおくぼえき",
    landmarks: ["新大久保コリアンタウン", "大久保公園"],
    transferLines: ["総武線"]
  },
  "JB-10": { // 新宿駅
    name: "新宿駅",
    furigana: "しんじゅくえき",
    landmarks: ["東京都庁", "新宿御苑", "歌舞伎町"],
    transferLines: ["山手線", "中央線", "小田急線", "京王線", "丸ノ内線", "新宿線"]
  },
  "JB-11": { // 代々木駅
    name: "代々木駅",
    furigana: "よよぎえき",
    landmarks: ["代々木公園", "NHKホール"],
    transferLines: ["山手線", "総武線"]
  },
  "JB-12": { // 千駄ケ谷駅
    name: "千駄ケ谷駅",
    furigana: "せんだがやえき",
    landmarks: ["国立競技場", "明治神宮外苑"],
    transferLines: ["総武線"]
  },
  "JB-13": { // 信濃町駅
    name: "信濃町駅",
    furigana: "しなのまちえき",
    landmarks: ["明治神宮", "新宿御苑"],
    transferLines: ["総武線"]
  },
  "JB-14": { // 四ツ谷駅
    name: "四ツ谷駅",
    furigana: "よつやえき",
    landmarks: ["迎賓館", "須賀神社"],
    transferLines: ["中央線", "丸ノ内線", "南北線"]
  },
  "JB-15": { // 市ケ谷駅
    name: "市ケ谷駅",
    furigana: "いちがやえき",
    landmarks: ["防衛省", "外濠公園"],
    transferLines: ["総武線", "有楽町線", "南北線", "都営新宿線"]
  },
  "JB-16": { // 飯田橋駅
    name: "飯田橋駅",
    furigana: "いいだばしえき",
    landmarks: ["神楽坂", "東京ドームシティ"],
    transferLines: ["総武線", "東西線", "有楽町線", "南北線", "大江戸線"]
  },
  "JB-17": { // 水道橋駅
    name: "水道橋駅",
    furigana: "すいどうばしえき",
    landmarks: ["東京ドーム", "ラクーア"],
    transferLines: ["総武線", "三田線"]
  },
  "JB-18": { // 御茶ノ水駅
    name: "御茶ノ水駅",
    furigana: "おちゃのみずえき",
    landmarks: ["ニコライ堂", "御茶ノ水楽器街"],
    transferLines: ["総武線", "丸ノ内線", "千代田線"]
  },
  "JB-19": { // 秋葉原駅
    name: "秋葉原駅",
    furigana: "あきはばらえき",
    landmarks: ["ヨドバシカメラ", "AKIBAカルチャーズZONE"],
    transferLines: ["山手線", "京浜東北線", "総武線", "日比谷線", "つくばエクスプレス"]
  },
  "JB-20": { // 浅草橋駅
    name: "浅草橋駅",
    furigana: "あさくさばしえき",
    landmarks: ["浅草橋ビーズ街", "浅草橋商店街"],
    transferLines: ["総武線", "都営浅草線"]
  },
  "JB-21": { // 両国駅
    name: "両国駅",
    furigana: "りょうごくえき",
    landmarks: ["両国国技館", "江戸東京博物館"],
    transferLines: ["総武線", "都営大江戸線"]
  },
  "JB-22": { // 錦糸町駅
    name: "錦糸町駅",
    furigana: "きんしちょうえき",
    landmarks: ["アルカキット錦糸町", "オリナス錦糸町"],
    transferLines: ["総武線", "半蔵門線"]
  },
  "JB-23": { // 亀戸駅
    name: "亀戸駅",
    furigana: "かめいどえき",
    landmarks: ["亀戸天神社", "亀戸梅屋敷"],
    transferLines: ["総武線", "東武亀戸線"]
  },
  "JB-24": { // 平井駅
    name: "平井駅",
    furigana: "ひらいえき",
    landmarks: ["平井大橋", "江戸川区スポーツランド"],
    transferLines: ["総武線"]
  },
  "JB-25": { // 新小岩駅
    name: "新小岩駅",
    furigana: "しんこいわえき",
    landmarks: ["新小岩公園", "総武線車両基地"],
    transferLines: ["総武線"]
  },
  "JB-26": { // 小岩駅
    name: "小岩駅",
    furigana: "こいわえき",
    landmarks: ["小岩駅前商店街", "小岩城址公園"],
    transferLines: ["総武線"]
  },
  "JB-27": { // 市川駅
    name: "市川駅",
    furigana: "いちかわえき",
    landmarks: ["市川市文学ミュージアム", "中山法華経寺"],
    transferLines: ["総武線", "京成本線"]
  },
  "JB-28": { // 本八幡駅
    name: "本八幡駅",
    furigana: "もとやわたえき",
    landmarks: ["本八幡駅南口商店街", "八幡神社"],
    transferLines: ["総武線", "都営新宿線", "京成本線"]
  },
  "JB-29": { // 下総中山駅
    name: "下総中山駅",
    furigana: "しもうさなかやまえき",
    landmarks: ["下総国分寺", "中山競馬場"],
    transferLines: ["総武線"]
  },
  "JB-30": { // 西船橋駅
    name: "西船橋駅",
    furigana: "にしふなばしえき",
    landmarks: ["西船橋駅前商店街", "船橋市民文化ホール"],
    transferLines: ["総武線", "武蔵野線", "京葉線", "東西線"]
  },
  "JB-31": { // 船橋駅
    name: "船橋駅",
    furigana: "ふなばしえき",
    landmarks: ["船橋FACE", "船橋市場"],
    transferLines: ["総武線", "東武野田線", "京成本線"]
  },
  "JB-32": { // 東船橋駅
    name: "東船橋駅",
    furigana: "ひがしふなばしえき",
    landmarks: ["船橋市運動公園", "東船橋商店街"],
    transferLines: ["総武線"]
  },
  "JB-33": { // 津田沼駅
    name: "津田沼駅",
    furigana: "つだぬまえき",
    landmarks: ["津田沼パルコ", "千葉工業大学"],
    transferLines: ["総武線", "新京成線"]
  },
  "JB-34": { // 幕張本郷駅
    name: "幕張本郷駅",
    furigana: "まくはりほんごうえき",
    landmarks: ["幕張勤労市民プラザ", "花見川"],
    transferLines: ["総武線", "京成千葉線"]
  },
  "JB-35": { // 幕張駅
    name: "幕張駅",
    furigana: "まくはりえき",
    landmarks: ["幕張メッセ", "幕張海浜公園"],
    transferLines: ["総武線", "京葉線"]
  },
  "JB-36": { // 新検見川駅
    name: "新検見川駅",
    furigana: "しんけみがわえき",
    landmarks: ["花見川", "花島公園"],
    transferLines: ["総武線"]
  },
  "JB-37": { // 稲毛駅
    name: "稲毛駅",
    furigana: "いなげえき",
    landmarks: ["稲毛海浜公園", "稲毛せんげん通り商店街"],
    transferLines: ["総武線"]
  },
  "JB-38": { // 西千葉駅
    name: "西千葉駅",
    furigana: "にしちばえき",
    landmarks: ["千葉大学", "西千葉商店街"],
    transferLines: ["総武線", "京成千葉線"]
  },
  "JB-39": { // 千葉駅
    name: "千葉駅",
    furigana: "ちばえき",
    landmarks: ["千葉城（千葉神社）", "千葉市美術館"],
    transferLines: ["総武線", "外房線", "内房線", "成田線", "千葉都市モノレール", "京成千葉線"]
  }
};

// サイコロのメッセージ
const diceMessages = {
    1: "ゆっくり進みます！",
    2: "いい感じに進みます！",
    3: "かなり進みます！！",
    4: "すごいスピードで進みます！！！"
};

// ゲーム状態管理オブジェクト
const gameState = {
    players: [],
    currentPlayerIndex: 0,
    totalTurns: 1,
    playerColors: ['var(--player1-color)', 'var(--player2-color)', 'var(--player3-color)'],
    isRolling: false
};

// スクリーン要素の取得
const screens = {
    start: document.getElementById('startScreen'),
    game: document.getElementById('gameScreen'),
    result: document.getElementById('resultScreen')
};

// 効果音
const startSound = document.getElementById('startSound');
const clearSound = document.getElementById('clearSound');
const bgmSound = document.getElementById('bgmSound');
let isBgmPlaying = false;

// BGM制御
function initAudio() {
    const bgmToggle = document.getElementById('bgmToggle');
    const volumeSlider = document.getElementById('volumeSlider');
    
    // ボリューム初期設定
    bgmSound.volume = volumeSlider.value;
    
    // BGM再生/停止ボタン
    bgmToggle.addEventListener('click', () => {
        if (isBgmPlaying) {
            pauseBGM();
            bgmToggle.textContent = 'BGM ON';
        } else {
            playBGM();
            bgmToggle.textContent = 'BGM OFF';
        }
    });
    
    // ボリューム調整
    volumeSlider.addEventListener('input', () => {
        bgmSound.volume = volumeSlider.value;
    });
}

// BGM再生
function playBGM() {
    bgmSound.play().then(() => {
        isBgmPlaying = true;
    }).catch(error => {
        console.log("BGM再生エラー:", error);
    });
}

// BGM一時停止
function pauseBGM() {
    bgmSound.pause();
    isBgmPlaying = false;
}

// ゲーム初期化
function initGame(playerCount) {
    gameState.players = [];
    gameState.currentPlayerIndex = 0;
    gameState.totalTurns = 1;
    
    // プレイヤー作成
    for (let i = 0; i < playerCount; i++) {
        gameState.players.push({
            id: i + 1,
            position: 1, // 三鷹駅からスタート
            color: gameState.playerColors[i]
        });
    }
    
    createGameBoard();
    updatePlayerStatus();
    showStationInfo(1); // 初期駅情報表示
    updateStationHighlights();
}

// ゲームボード生成
function createGameBoard() {
    const container = document.getElementById('stationsContainer');
    container.innerHTML = '';
    
    // 駅マス生成
    for (let i = 1; i <= 39; i++) {
        const stationId = `JB-${i.toString().padStart(2, '0')}`;
        const station = document.createElement('div');
        station.className = 'station';
        station.dataset.id = stationId;
        
        station.innerHTML = `
            <div class="station-number">${stationId}</div>
            <div class="station-name">${stationDetails[stationId].name}</div>
            <div class="station-furigana">${stationDetails[stationId].furigana}</div>
        `;
        container.appendChild(station);
    }
}

// 駅マスのハイライト更新
function updateStationHighlights() {
    // 全駅のハイライトをリセット
    document.querySelectorAll('.station').forEach(station => {
        station.classList.remove('player1-current', 'player2-current', 'player3-current', 'multi-players');
    });
    
    // プレイヤーごとの位置を記録
    const positionCounts = {};
    
    // 各プレイヤーの位置をチェック
    gameState.players.forEach(player => {
        const position = player.position;
        
        if (!positionCounts[position]) {
            positionCounts[position] = [];
        }
        positionCounts[position].push(player.id);
    });
    
    // 駅マスのハイライト設定
    for (const position in positionCounts) {
        const playerIds = positionCounts[position];
        const stationIndex = parseInt(position) - 1;
        const stations = document.querySelectorAll('.station');
        
        if (playerIds.length === 1) {
            // 1人だけの場合
            stations[stationIndex].classList.add(`player${playerIds[0]}-current`);
        } else {
            // 複数人の場合
            stations[stationIndex].classList.add('multi-players');
        }
    }
}

// サイコロを振る
function rollDice() {
    if (gameState.isRolling) return;
    
    // 効果音再生
    startSound.currentTime = 0;
    startSound.play().catch(e => console.log("音声再生エラー:", e));
    
    gameState.isRolling = true;
    const diceResult = document.getElementById('diceResult');
    const diceMessage = document.getElementById('diceMessage');
    const diceButton = document.getElementById('diceButton');
    diceButton.disabled = true;
    
    // サイコロアニメーション
    let rollCount = 0;
    const maxRolls = 10;
    const rollInterval = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 4) + 1;
        diceResult.textContent = randomNum;
        rollCount++;
        
        if (rollCount >= maxRolls) {
            clearInterval(rollInterval);
            const finalResult = Math.floor(Math.random() * 4) + 1;
            
            // 出目に応じた演出
            diceResult.textContent = finalResult;
            diceResult.className = 'dice-animation';
            
            // 演出を適用
            setTimeout(() => {
                diceResult.classList.add(`dice-${finalResult}`);
                diceMessage.textContent = diceMessages[finalResult];
                diceMessage.style.color = getColorForDice(finalResult);
                
                // 少し待ってから移動
                setTimeout(() => {
                    movePlayer(finalResult);
                    gameState.isRolling = false;
                    diceButton.disabled = false;
                }, 1000);
            }, 100);
        }
    }, 100);
}

// サイコロの目に応じた色を取得
function getColorForDice(diceValue) {
    switch(diceValue) {
        case 1: return 'var(--player1-color)';
        case 2: return 'var(--player2-color)';
        case 3: return 'var(--player3-color)';
        case 4: return '#FF9500'; // オレンジ
        default: return 'var(--dark-gray)';
    }
}

// ゲーム進行
function movePlayer(steps) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const newPosition = currentPlayer.position + steps;
    
    // 千葉駅ちょうどの場合
    if (newPosition === 39) {
        currentPlayer.position = 39;
        updateStationHighlights();
        showStationInfo(currentPlayer.position);
        
        // 勝利
        setTimeout(() => {
            // クリア効果音
            clearSound.currentTime = 0;
            clearSound.play().catch(e => console.log("音声再生エラー:", e));
            
            showResultScreen(currentPlayer);
        }, 1000);
        return;
    }
    // 千葉駅を超えた場合は戻る
    else if (newPosition > 39) {
        const overSteps = newPosition - 39;
        currentPlayer.position = 39 - overSteps;
        
        // 超過分のメッセージ
        const diceMessage = document.getElementById('diceMessage');
        diceMessage.textContent = `千葉駅を${overSteps}駅通り過ぎたので、${overSteps}駅戻ります！`;
        diceMessage.style.color = 'red';
    } else {
        currentPlayer.position = newPosition;
    }
    
    updateStationHighlights();
    showStationInfo(currentPlayer.position);
    
    // 次のプレイヤーへ
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    if (gameState.currentPlayerIndex === 0) {
        gameState.totalTurns++;
    }
    
    updatePlayerStatus();
}

// 駅情報表示
function showStationInfo(position) {
    const stationId = `JB-${position.toString().padStart(2, '0')}`;
    const info = stationDetails[stationId];
    const infoPanel = document.getElementById('stationInfo');
    
    infoPanel.innerHTML = `
        <h3>
            ${info.name}
            <small>${info.furigana}</small>
        </h3>
        <p>🏯 主な施設: ${info.landmarks.join('、')}</p>
        <p>🚃 乗換路線: ${info.transferLines.join('、')}</p>
    `;
}

// 結果画面表示
function showResultScreen(winner) {
    screens.game.classList.remove('visible');
    screens.result.classList.add('visible');
    document.getElementById('winnerMessage').textContent = `プレイヤー${winner.id}の勝利！`;
    
    // 派手な演出
    const winnerMessage = document.getElementById('winnerMessage');
    winnerMessage.style.color = gameState.playerColors[winner.id - 1];
    winnerMessage.style.animation = 'pulse 0.5s infinite alternate';
}

// 画面切り替え
function switchScreen(from, to) {
    from.classList.remove('visible');
    to.classList.add('visible');
}

// プレイヤー情報更新
function updatePlayerStatus() {
    document.getElementById('currentTurn').textContent = gameState.totalTurns;
    const statusElement = document.getElementById('playerStatus');
    
    let statusHTML = '';
    gameState.players.forEach((player, index) => {
        const currentMark = gameState.currentPlayerIndex === index ? '→ ' : '';
        statusHTML += `
            <div class="player-status">
                <span style="color: ${gameState.playerColors[index]}">●</span>
                ${currentMark}プレイヤー${player.id}: ${player.position}駅目
            </div>
        `;
    });
    
    statusElement.innerHTML = statusHTML;
}

// イベントリスナー
document.addEventListener('DOMContentLoaded', () => {
    // 音声初期化
    initAudio();
    
    // ゲーム開始ボタン
    document.getElementById('startButton').addEventListener('click', () => {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        switchScreen(screens.start, screens.game);
        initGame(playerCount);
        
        // BGM再生開始
        playBGM();
    });
    
    // サイコロボタン
    document.getElementById('diceButton').addEventListener('click', rollDice);
    
    // もう一度遊ぶボタン
    document.getElementById('replayButton').addEventListener('click', () => {
        switchScreen(screens.result, screens.start);
        // リセット
        document.getElementById('diceResult').className = 'dice-animation';
        document.getElementById('diceResult').textContent = '';
        document.getElementById('diceMessage').textContent = '';
    });
});
