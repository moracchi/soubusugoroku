// 駅情報データベース
const stationDetails = {
  "JB-01": { // 三鷹駅
    name: "三鷹駅",
    furigana: "みたかえき",
    description: "三鷹市の玄関口。中央線と総武線が走る始発駅です。",
    landmarks: ["三鷹の森ジブリ美術館", "井の頭恩賜公園"],
    transferLines: ["中央線"]
  },
  "JB-02": { // 吉祥寺駅
    name: "吉祥寺駅",
    furigana: "きちじょうじえき",
    description: "若者に人気の街「吉祥寺」の玄関口。おしゃれな街として有名です。",
    landmarks: ["井の頭公園", "吉祥寺サンロード商店街"],
    transferLines: ["中央線", "京王井の頭線"]
  },
  "JB-03": { // 西荻窪駅
    name: "西荻窪駅",
    furigana: "にしおぎくぼえき",
    description: "古本屋やアンティークショップが多い、ちょっと大人の街です。",
    landmarks: ["西荻窪テラス", "善福寺公園"],
    transferLines: ["中央線"]
  },
  "JB-04": { // 荻窪駅
    name: "荻窪駅",
    furigana: "おぎくぼえき",
    description: "杉並区の中心地。住宅街としても人気のエリアです。",
    landmarks: ["荻窪タウンセブン", "大田黒公園"],
    transferLines: ["中央線", "丸ノ内線"]
  },
  "JB-05": { // 阿佐ケ谷駅
    name: "阿佐ケ谷駅",
    furigana: "あさがやえき",
    description: "商店街が活気にあふれる、昔ながらの良さが残る街です。",
    landmarks: ["阿佐ヶ谷パールセンター商店街", "杉並アニメーションミュージアム"],
    transferLines: ["中央線"]
  },
  "JB-06": { // 高円寺駅
    name: "高円寺駅",
    furigana: "こうえんじえき",
    description: "若者文化の発信地。古着屋や個性的なお店が多い活気ある街です。",
    landmarks: ["高円寺パル商店街", "和田堀公園"],
    transferLines: ["中央線"]
  },
  "JB-07": { // 中野駅
    name: "中野駅",
    furigana: "なかのえき",
    description: "サブカルチャーの聖地。若者が集まる活気ある街です。",
    landmarks: ["中野ブロードウェイ", "中野サンモール商店街"],
    transferLines: ["中央線", "東西線"]
  },
  "JB-08": { // 東中野駅
    name: "東中野駅",
    furigana: "ひがしなかのえき",
    description: "住宅街と商店街が調和した静かな街です。",
    landmarks: ["東中野セントラルパーク", "本妙寺"],
    transferLines: ["中央線", "総武線"]
  },
  "JB-09": { // 大久保駅
    name: "大久保駅",
    furigana: "おおくぼえき",
    description: "新宿の隣にある、多国籍な雰囲気が特徴の街です。",
    landmarks: ["新大久保コリアンタウン", "大久保公園"],
    transferLines: ["総武線"]
  },
  "JB-10": { // 新宿駅
    name: "新宿駅",
    furigana: "しんじゅくえき",
    description: "世界一乗降客数の多い駅。巨大な商業施設が集まるターミナル駅です。",
    landmarks: ["東京都庁", "新宿御苑", "歌舞伎町"],
    transferLines: ["山手線", "中央線", "小田急線", "京王線", "丸ノ内線", "新宿線"]
  },
  "JB-11": { // 代々木駅
    name: "代々木駅",
    furigana: "よよぎえき",
    description: "新宿と原宿の間にある便利な駅。緑豊かな公園も近くにあります。",
    landmarks: ["代々木公園", "NHKホール"],
    transferLines: ["山手線", "総武線"]
  },
  "JB-12": { // 千駄ケ谷駅
    name: "千駄ケ谷駅",
    furigana: "せんだがやえき",
    description: "明治神宮の近くにあり、スポーツ施設も多い駅です。",
    landmarks: ["国立競技場", "明治神宮外苑"],
    transferLines: ["総武線"]
  },
  "JB-13": { // 信濃町駅
    name: "信濃町駅",
    furigana: "しなのまちえき",
    description: "明治神宮の最寄り駅。緑豊かな環境が魅力です。",
    landmarks: ["明治神宮", "新宿御苑"],
    transferLines: ["総武線"]
  },
  "JB-14": { // 四ツ谷駅
    name: "四ツ谷駅",
    furigana: "よつやえき",
    description: "坂の多い街として知られる四ツ谷。歴史的建造物も多いエリアです。",
    landmarks: ["迎賓館", "須賀神社"],
    transferLines: ["中央線", "丸ノ内線", "南北線"]
  },
  "JB-15": { // 市ケ谷駅
    name: "市ケ谷駅",
    furigana: "いちがやえき",
    description: "防衛省があり、学生の街としても知られています。",
    landmarks: ["防衛省", "外濠公園"],
    transferLines: ["総武線", "有楽町線", "南北線", "都営新宿線"]
  },
  "JB-16": { // 飯田橋駅
    name: "飯田橋駅",
    furigana: "いいだばしえき",
    description: "神楽坂の入口にあたる駅。運河沿いの散歩も楽しめます。",
    landmarks: ["神楽坂", "東京ドームシティ"],
    transferLines: ["総武線", "東西線", "有楽町線", "南北線", "大江戸線"]
  },
  "JB-17": { // 水道橋駅
    name: "水道橋駅",
    furigana: "すいどうばしえき",
    description: "東京ドームがすぐそばにある駅。スポーツ観戦に便利です。",
    landmarks: ["東京ドーム", "ラクーア"],
    transferLines: ["総武線", "三田線"]
  },
  "JB-18": { // 御茶ノ水駅
    name: "御茶ノ水駅",
    furigana: "おちゃのみずえき",
    description: "楽器店が並ぶ楽器の街。医科大学も多く、文教地区です。",
    landmarks: ["ニコライ堂", "御茶ノ水楽器街"],
    transferLines: ["総武線", "丸ノ内線", "千代田線"]
  },
  "JB-19": { // 秋葉原駅
    name: "秋葉原駅",
    furigana: "あきはばらえき",
    description: "電気街・アニメの聖地として世界的に有名な街です。",
    landmarks: ["ヨドバシカメラ", "AKIBAカルチャーズZONE"],
    transferLines: ["山手線", "京浜東北線", "総武線", "日比谷線", "つくばエクスプレス"]
  },
  "JB-20": { // 浅草橋駅
    name: "浅草橋駅",
    furigana: "あさくさばしえき",
    description: "問屋街として知られ、手芸や工芸品の専門店が多い地域です。",
    landmarks: ["浅草橋ビーズ街", "浅草橋商店街"],
    transferLines: ["総武線", "都営浅草線"]
  },
  "JB-21": { // 両国駅
    name: "両国駅",
    furigana: "りょうごくえき",
    description: "相撲の聖地・両国国技館がある駅。江戸東京博物館も人気です。",
    landmarks: ["両国国技館", "江戸東京博物館"],
    transferLines: ["総武線", "都営大江戸線"]
  },
  "JB-22": { // 錦糸町駅
    name: "錦糸町駅",
    furigana: "きんしちょうえき",
    description: "墨田区の商業中心地。ショッピングモールや飲食店が集まる街です。",
    landmarks: ["アルカキット錦糸町", "オリナス錦糸町"],
    transferLines: ["総武線", "半蔵門線"]
  },
  "JB-23": { // 亀戸駅
    name: "亀戸駅",
    furigana: "かめいどえき",
    description: "亀戸天神社の最寄り駅。下町情緒あふれる街です。",
    landmarks: ["亀戸天神社", "亀戸梅屋敷"],
    transferLines: ["総武線", "東武亀戸線"]
  },
  "JB-24": { // 平井駅
    name: "平井駅",
    furigana: "ひらいえき",
    description: "江戸川区にある住宅街の駅。川沿いの公園も人気です。",
    landmarks: ["平井大橋", "江戸川区スポーツランド"],
    transferLines: ["総武線"]
  },
  "JB-25": { // 新小岩駅
    name: "新小岩駅",
    furigana: "しんこいわえき",
    description: "総武線の車両基地がある駅。商店街も活気があります。",
    landmarks: ["新小岩公園", "総武線車両基地"],
    transferLines: ["総武線"]
  },
  "JB-26": { // 小岩駅
    name: "小岩駅",
    furigana: "こいわえき",
    description: "江戸川区の主要駅。活気ある商店街が広がります。",
    landmarks: ["小岩駅前商店街", "小岩城址公園"],
    transferLines: ["総武線"]
  },
  "JB-27": { // 市川駅
    name: "市川駅",
    furigana: "いちかわえき",
    description: "千葉県市川市の中心駅。文教地区としても知られています。",
    landmarks: ["市川市文学ミュージアム", "中山法華経寺"],
    transferLines: ["総武線", "京成本線"]
  },
  "JB-28": { // 本八幡駅
    name: "本八幡駅",
    furigana: "もとやわたえき",
    description: "市川市の商業の中心地。ショッピングに便利な駅です。",
    landmarks: ["本八幡駅南口商店街", "八幡神社"],
    transferLines: ["総武線", "都営新宿線", "京成本線"]
  },
  "JB-29": { // 下総中山駅
    name: "下総中山駅",
    furigana: "しもうさなかやまえき",
    description: "市川市と船橋市の境にある駅。桜の名所としても知られています。",
    landmarks: ["下総国分寺", "中山競馬場"],
    transferLines: ["総武線"]
  },
  "JB-30": { // 西船橋駅
    name: "西船橋駅",
    furigana: "にしふなばしえき",
    description: "船橋市の主要駅。多くの路線が乗り入れるターミナル駅です。",
    landmarks: ["西船橋駅前商店街", "船橋市民文化ホール"],
    transferLines: ["総武線", "武蔵野線", "京葉線", "東西線"]
  },
  "JB-31": { // 船橋駅
    name: "船橋駅",
    furigana: "ふなばしえき",
    description: "船橋市の玄関口。大型商業施設が集まる便利な街です。",
    landmarks: ["船橋FACE", "船橋市場"],
    transferLines: ["総武線", "東武野田線", "京成本線"]
  },
  "JB-32": { // 東船橋駅
    name: "東船橋駅",
    furigana: "ひがしふなばしえき",
    description: "船橋市東部の住宅地にある駅。買い物にも便利です。",
    landmarks: ["船橋市運動公園", "東船橋商店街"],
    transferLines: ["総武線"]
  },
  "JB-33": { // 津田沼駅
    name: "津田沼駅",
    furigana: "つだぬまえき",
    description: "大学や商業施設が集まる、若者の多い活気ある街です。",
    landmarks: ["津田沼パルコ", "千葉工業大学"],
    transferLines: ["総武線", "新京成線"]
  },
  "JB-34": { // 幕張本郷駅
    name: "幕張本郷駅",
    furigana: "まくはりほんごうえき",
    description: "幕張の住宅地にある駅。住みやすさで人気のエリアです。",
    landmarks: ["幕張勤労市民プラザ", "花見川"],
    transferLines: ["総武線", "京成千葉線"]
  },
  "JB-35": { // 幕張駅
    name: "幕張駅",
    furigana: "まくはりえき",
    description: "幕張メッセ近くの駅。国際的なイベントが多く開催されます。",
    landmarks: ["幕張メッセ", "幕張海浜公園"],
    transferLines: ["総武線", "京葉線"]
  },
  "JB-36": { // 新検見川駅
    name: "新検見川駅",
    furigana: "しんけみがわえき",
    description: "千葉市の住宅地にある駅。緑豊かな環境が魅力です。",
    landmarks: ["花見川", "花島公園"],
    transferLines: ["総武線"]
  },
  "JB-37": { // 稲毛駅
    name: "稲毛駅",
    furigana: "いなげえき",
    description: "千葉市稲毛区の中心駅。海浜公園も近くにある便利な街です。",
    landmarks: ["稲毛海浜公園", "稲毛せんげん通り商店街"],
    transferLines: ["総武線"]
  },
  "JB-38": { // 西千葉駅
    name: "西千葉駅",
    furigana: "にしちばえき",
    description: "千葉大学の最寄り駅。学生の街として賑わいがあります。",
    landmarks: ["千葉大学", "西千葉商店街"],
    transferLines: ["総武線", "京成千葉線"]
  },
  "JB-39": { // 千葉駅
    name: "千葉駅",
    furigana: "ちばえき",
    description: "千葉県の県庁所在地・千葉市の中心駅。県内最大の都市です。",
    landmarks: ["千葉城（千葉神社）", "千葉市美術館"],
    transferLines: ["総武線", "外房線", "内房線", "成田線", "千葉都市モノレール", "京成千葉線"]
  }
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
    
    gameState.isRolling = true;
    const diceResult = document.getElementById('diceResult');
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
            diceResult.textContent = finalResult;
            
            // 少し待ってから移動
            setTimeout(() => {
                movePlayer(finalResult);
                gameState.isRolling = false;
                diceButton.disabled = false;
            }, 500);
        }
    }, 100);
}

// ゲーム進行
function movePlayer(steps) {
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    currentPlayer.position += steps;
    
    updateStationHighlights();
    showStationInfo(currentPlayer.position);
    
    // 勝利条件チェック
    if (currentPlayer.position >= 39) {
        setTimeout(() => {
            showResultScreen(currentPlayer);
        }, 1000);
        return;
    }
    
    // 次のプレイヤーへ
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    if (gameState.currentPlayerIndex === 0) {
        gameState.totalTurns++;
    }
    
    updatePlayerStatus();
}

// 駅情報表示
function showStationInfo(position) {
    if (position > 39) position = 39;
    
    const stationId = `JB-${position.toString().padStart(2, '0')}`;
    const info = stationDetails[stationId];
    const infoPanel = document.getElementById('stationInfo');
    
    infoPanel.innerHTML = `
        <h3>
            ${info.name}
            <small>${info.furigana}</small>
        </h3>
        <p>${info.description}</p>
        <p>🏯 主な施設: ${info.landmarks.join('、')}</p>
        <p>🚃 乗換路線: ${info.transferLines.join('、')}</p>
    `;
}

// 結果画面表示
function showResultScreen(winner) {
    screens.game.classList.remove('visible');
    screens.result.classList.add('visible');
    document.getElementById('winnerMessage').textContent = `プレイヤー${winner.id}の勝利！`;
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
    // ゲーム開始ボタン
    document.getElementById('startButton').addEventListener('click', () => {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        switchScreen(screens.start, screens.game);
        initGame(playerCount);
    });
    
    // サイコロボタン
    document.getElementById('diceButton').addEventListener('click', rollDice);
    
    // もう一度遊ぶボタン
    document.getElementById('replayButton').addEventListener('click', () => {
        switchScreen(screens.result, screens.start);
    });
});
