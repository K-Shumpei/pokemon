var berry_item_list = [
    'チイラのみ', 
    'リュガのみ', 
    'アッキのみ', 
    'ヤタピのみ', 
    'ズアのみ', 
    'タラプのみ', 
    'カムラのみ', 
    'ミクルのみ', 
    'サンのみ', 
    'スターのみ', 
    'ジャポのみ', 
    'レンブのみ', 
    'オッカのみ', 
    'イトケのみ', 
    'ソクノのみ', 
    'リンドのみ', 
    'ヤチェのみ', 
    'ヨプのみ', 
    'ビアーのみ', 
    'シュカのみ', 
    'バコウのみ', 
    'ウタンのみ', 
    'タンガのみ', 
    'ヨロギのみ', 
    'カシブのみ', 
    'ハバンのみ', 
    'ナモのみ', 
    'リリバのみ', 
    'ロゼルのみ', 
    'ホズのみ', 
    'オレンのみ', 
    'オボンのみ', 
    'ナゾのみ', 
    'ヒメリのみ', 
    'ラムのみ', 
    'モモンのみ', 
    'チーゴのみ', 
    'クラボのみ', 
    'カゴのみ', 
    'ナナシのみ', 
    'キーのみ', 
    'イバンのみ', 
    'フィラのみ', 
    'ウイのみ', 
    'マゴのみ', 
    'バンジのみ', 
    'イアのみ'
]

// 半減きのみ
var half_damage_berry_list = [
    ['オッカのみ', 'ほのお'], 
    ['イトケのみ', 'みず'], 
    ['ソクノのみ', 'でんき'], 
    ['リンドのみ', 'くさ'], 
    ['ヤチェのみ', 'こおり'], 
    ['ヨプのみ', 'かくとう'], 
    ['ビアーのみ', 'どく'], 
    ['シュカのみ', 'じめん'], 
    ['バコウのみ', 'ひこう'], 
    ['ウタンのみ', 'エスパー'], 
    ['タンガのみ', 'むし'], 
    ['ヨロギのみ', 'いわ'], 
    ['カシブのみ', 'ゴースト'], 
    ['ハバンのみ', 'ドラゴン'], 
    ['ナモのみ', 'あく'], 
    ['リリバのみ', 'はがね'], 
    ['ロゼルのみ', 'フェアリー'], 
    ['ホズのみ', 'ノーマル']
]

// しぜんのめぐみ：対応するタイプと威力
var natural_gift_item_list = [
    ['クラボのみ', 'ほのお', 80], 
    ['カゴのみ', 'みず', 80], 
    ['モモンのみ', 'でんき', 80], 
    ['チーゴのみ', 'くさ', 80], 
    ['ナナシのみ', 'こおり', 80], 
    ['ヒメリのみ', 'かくとう', 80], 
    ['オレンのみ', 'どく', 80], 
    ['キーのみ', 'じめん', 80], 
    ['ラムのみ', 'ひこう', 80], 
    ['オボンのみ', 'エスパー', 80], 
    ['フィラのみ', 'ほのお', 80], 
    ['ウイのみ', 'いわ', 80], 
    ['マゴのみ', 'ゴースト', 80], 
    ['バンジのみ', 'ドラゴン', 80], 
    ['イアのみ', 'あく', 80], 
    ['ズリのみ', 'はがね', 80], 
    ['ブリーのみ', 'ほのお', 90], 
    ['ナナのみ', 'みず', 90], 
    ['セシナのみ', 'でんき', 90], 
    ['パイルのみ', 'くさ', 90], 
    ['ザロクのみ', 'こおり', 90], 
    ['ネコブのみ', 'かくとう', 90], 
    ['タポルのみ', 'どく', 90], 
    ['ロメのみ', 'じめん', 90], 
    ['ウブのみ', 'ひこう', 90], 
    ['マトマのみ', 'エスパー', 90], 
    ['モコシのみ', 'むし', 90], 
    ['ゴスのみ', 'いわ', 90], 
    ['ラブタのみ', 'ゴースト', 90], 
    ['ノメルのみ', 'ドラゴン', 90], 
    ['ノワキのみ', 'あく', 90], 
    ['シーヤのみ', 'はがね', 90], 
    ['カイスのみ', 'ほのお', 100], 
    ['ドリのみ', 'みず', 100], 
    ['ベリブのみ', 'でんき', 100], 
    ['オッカのみ', 'ほのお', 80], 
    ['イトケのみ', 'みず', 80], 
    ['ソクノのみ', 'でんき', 80], 
    ['リンドのみ', 'くさ', 80], 
    ['ヤチェのみ', 'こおり', 80], 
    ['ヨプのみ', 'かくとう', 80], 
    ['ビアーのみ', 'どく', 80], 
    ['シュカのみ', 'じめん', 80], 
    ['バコウのみ', 'ひこう', 80], 
    ['ウタンのみ', 'エスパー', 80], 
    ['タンガのみ', 'むし', 80], 
    ['ヨロギのみ', 'いわ', 80], 
    ['カシブのみ', 'ゴースト', 80], 
    ['ハバンのみ', 'ドラゴン', 80], 
    ['ナモのみ', 'あく', 80], 
    ['リリバのみ', 'はがね', 80], 
    ['ホズのみ', 'ノーマル', 80], 
    ['チイラのみ', 'くさ', 100], 
    ['リュガのみ', 'こおり', 100], 
    ['カムラのみ', 'かくとう', 100], 
    ['ヤタピのみ', 'どく', 100], 
    ['ズアのみ', 'じめん', 100], 
    ['サンのみ', 'ひこう', 100], 
    ['スターのみ', 'エスパー', 100], 
    ['ナゾのみ', 'むし', 100], 
    ['ミクルのみ', 'いわ', 100], 
    ['イバンのみ', 'ゴースト', 100], 
    ['ジャポのみ', 'ドラゴン', 100], 
    ['レンブのみ', 'あく', 100], 
    ['ロゼルのみ', 'フェアリー', 80], 
    ['アッキのみ', 'フェアリー', 100], 
    ['タラプのみ', 'あく', 100]
]

var incense_item_list = [
    ['シルクのスカーフ', 'ノーマル'], 
    ['うしおのおこう', 'みず'], 
    ['さざなみのおこう', 'みず'], 
    ['しんぴのしずく', 'みず'], 
    ['おはなのおこう', 'くさ'], 
    ['きせきのタネ', 'くさ'], 
    ['もくたん', 'ほのお'], 
    ['じしゃく', 'でんき'], 
    ['とけないこおり', 'こおり'], 
    ['くろおび', 'かくとう'], 
    ['くろいメガネ', 'あく'], 
    ['どくバリ', 'どく'], 
    ['やわらかいすな', 'じめん'], 
    ['するどいくちばし', 'ひこう'], 
    ['あやしいおこう', 'エスパー'], 
    ['まがったスプーン', 'エスパー'], 
    ['がんせきおこう', 'いわ'], 
    ['かたいいし', 'いわ'], 
    ['ぎんのこな', 'むし'], 
    ['のろいのおふだ', 'ゴースト'],
    ['りゅうのキバ', 'ドラゴン'], 
    ['メタルコート', 'はがね']  
]

var mega_stone_item_list = [
    ['アブソルナイト', 'アブソル', 'メガアブソル'], 
    ['エルレイドナイト', 'エルレイド', 'メガエルレイド'], 
    ['オニゴーリナイト', 'オニゴーリ', 'メガオニゴーリ'], 
    ['カイロスナイト', 'カイロス', 'メガカイロス'], 
    ['カメックスナイト', 'カメックス', 'メガカメックス'], 
    ['ガブリアスナイト', 'ガブリアス', 'メガガブリアス'], 
    ['ガルーラナイト', 'ガルーラ', 'メガガルーラ'], 
    ['ギャラドスナイト', 'ギャラドス', 'メガギャラドス'], 
    ['クチートナイト', 'クチート', 'メガクチート'], 
    ['ゲンガナイト', 'ゲンガー', 'メガゲンガー'], 
    ['サメハダナイト', 'サメハダー', 'メガサメハダー'], 
    ['サーナイトナイト', 'サーナイト', 'メガサーナイト'], 
    ['ジュカインナイト', 'ジュカイン', 'メガジュカイン'], 
    ['ジュペッタナイト', 'ジュペッタ', 'メガジュペッタ'], 
    ['スピアナイト', 'スピアー', 'メガスピアー'], 
    ['タブンネナイト', 'タブンネ', 'メガタブンネ'], 
    ['チャーレムナイト', 'チャーレム', 'メガチャーレム'], 
    ['チルタリスナイト', 'チルタリス', 'メガチルタリス'], 
    ['ディアンシナイト', 'ディアンシー', 'メガディアンシー'], 
    ['デンリュウナイト', 'デンリュウ', 'メガデンリュウ'], 
    ['ハガネールナイト', 'ハガネール', 'メガハガネール'], 
    ['ハッサムナイト', 'ハッサム', 'メガハッサム'], 
    ['バクーダナイト', 'バクーダ', 'メガバクーダ'], 
    ['バシャーモナイト', 'バシャーモ', 'メガバシャーモ'], 
    ['バンギラスナイト', 'バンギラス', 'メガバンギラス'], 
    ['ピジョットナイト', 'ピジョット', 'メガピジョット'], 
    ['フシギバナイト', 'フシギバナ', 'メガフシギバナ'], 
    ['フーディナイト', 'フーディン', 'メガフーディン'], 
    ['プテラナイト', 'プテラ', 'メガプテラ'], 
    ['ヘラクロスナイト', 'ヘラクロス', 'メガヘラクロス'], 
    ['ヘルガナイト', 'ヘルガー', 'メガヘルガー'], 
    ['ボスゴドラナイト', 'ボスゴドラ', 'メガボスゴドラ'], 
    ['ボーマンダナイト', 'ボーマンダ', 'メガボーマンダ'], 
    ['ミミロップナイト', 'ミミロップ', 'メガミミロップ'], 
    ['ミュウツナイトX', 'ミュウツー', 'メガミュウツーX'], 
    ['ミュウツナイトY', 'ミュウツー', 'メガミュウツーY'], 
    ['メタグロスナイト', 'メタグロス', 'メガメタグロス'], 
    ['ヤドランナイト', 'ヤドラン', 'メガヤドラン'], 
    ['ヤミラミナイト', 'ヤミラミ', 'メガヤミラミ'], 
    ['ユキノオナイト', 'ユキノオー', 'メガユキノオー'], 
    ['ライボルトナイト', 'ライボルト', 'メガライボルト'], 
    ['ラグラージナイト', 'ラグラージ', 'メガラグラージ'], 
    ['ラティアスナイト', 'ラティアス', 'メガラティアス'], 
    ['ラティオスナイト', 'ラティオス', 'メガラティオス'], 
    ['リザードナイトX', 'リザードン', 'メガリザードンX'], 
    ['リザードナイトY', 'リザードン', 'メガリザードンY'], 
    ['ルカリオナイト', 'ルカリオ', 'メガルカリオ']
]

// きのみを食べた時、即座に発動する効果
// ついばむ、むしくい、おちゃかい
var eat_berry_effect = [
    ['クラボのみ', 'a', 'まひ'], 
    ['カゴのみ', 'a', 'ねむり'], 
    ['モモンのみ', 'a', 'どく'], 
    ['チーゴのみ', 'a', 'やけど'], 
    ['ナナシのみ', 'a', 'こおり'], 
    ['ヒメリのみ', 'pp'], 
    ['オレンのみ', 'HP', 10], 
    ['キーのみ', 'a', 'こんらん'], 
    ['ラムのみ', 'a', 'all'], 
    ['オボンのみ', 'HP', 1/4], 
    ['フィラのみ', 'c', 'A'], 
    ['ウイのみ', 'c', 'C'], 
    ['マゴのみ', 'c', 'S'], 
    ['バンジのみ', 'c', 'D'], 
    ['イアのみ', 'c', 'B'], 
    ['チイラのみ', 'rank', 'A'], 
    ['リュガのみ', 'rank', 'B'], 
    ['カムラのみ', 'rank', 'S'], 
    ['ヤタピのみ', 'rank', 'C'], 
    ['ズアのみ', 'rank', 'D'], 
    ['サンのみ', 'critical'], 
    ['スターのみ', 'sun'], 
    ['ナゾのみ', 'HP', 1/4], 
    ['ミクルのみ', 'accurcy'], 
    ['アッキのみ', 'rank', 'B'], 
    ['タラプのみ', 'rank', 'D']
]

// シルヴァディに持たせるとタイプが変わる
var multi_attack_memory = [
    ['アイスメモリ', 'こおり'], 
    ['エレクトロメモリ', 'でんき'], 
    ['グラウンドメモリ', 'じめん'], 
    ['グラスメモリ', 'くさ'], 
    ['ゴーストメモリ', 'ゴースト'], 
    ['サイキックメモリ', 'エスパー'], 
    ['スチールメモリ', 'はがね'], 
    ['ダークメモリ', 'あく'], 
    ['ドラゴンメモリ', 'ドラゴン'], 
    ['バグメモリ', 'むし'], 
    ['ファイトメモリ', 'かくとう'], 
    ['ファイヤーメモリ', 'ほのお'], 
    ['フェアリーメモリ', 'フェアリー'], 
    ['フライングメモリ', 'ひこう'], 
    ['ポイズンメモリ', 'どく'], 
    ['ロックメモリ', 'いわ']
]

// アルセウスに持たせるとタイプが変わる
var judgement_plate = [
    ['あおぞらプレート', 'ひこう'], 
    ['いかずちプレート', 'でんき'], 
    ['がんせきプレート', 'いわ'], 
    ['こうてつプレート', 'はがね'], 
    ['こぶしのプレート', 'かくとう'], 
    ['こわもてプレート', 'あく'], 
    ['しずくプレート', 'みず'], 
    ['せいれいプレート', 'フェアリー'], 
    ['たまむしプレート', 'むし'], 
    ['だいちのプレート', 'じめん'], 
    ['つららのプレート', 'こおり'], 
    ['ひのたまプレート', 'ほのお'], 
    ['ふしぎのプレート', 'エスパー'], 
    ['みどりのプレート', 'くさ'], 
    ['もうどくプレート', 'どく'], 
    ['もののけプレート', 'ゴースト'], 
    ['りゅうのプレート', 'ドラゴン']
]

// Zクリスタル
var Z_crystal_list = [
    ['ノーマル', 'ウルトラダッシュアタック', 'ノーマルZ'], 
    ['くさ', 'ブルームシャインエクストラ', 'クサZ'], 
    ['ほのお', 'ダイナミックフルフレイム', 'ホノオZ'], 
    ['みず', 'スーパーアクアトルネード', 'ミズZ'], 
    ['でんき', 'スパーキングギガボルト', 'デンキZ'], 
    ['ひこう', 'ファイナルダイブクラッシュ', 'ヒコウZ'], 
    ['かくとう', 'ぜんりょくむそうげきれつけん', 'カクトウZ'], 
    ['じめん', 'ライジングランドオーバー', 'ジメンZ'], 
    ['むし', 'ぜったいほしょくかいてんざん', 'ムシZ'], 
    ['いわ', 'ワールズエンドフォール', 'イワZ'], 
    ['あく', 'ブラックホールイクリプス', 'アクZ'], 
    ['こおり', 'レイジングジオフリーズ', 'コオリZ'], 
    ['どく', 'アシッドポイズンデリート', 'ドクZ'], 
    ['はがね', 'ちょうぜつらせんれんげき', 'ハガネZ'], 
    ['ゴースト', 'むげんあんやへのいざない', 'ゴーストZ'], 
    ['エスパー', 'マキシマムサイブレイカー', 'エスパーZ'], 
    ['ドラゴン', 'アルティメットドラゴンバーン', 'ドラゴンZ'], 
    ['フェアリー', 'ラブリースターインパクト', 'フェアリーZ']
]

// 専用Z
var special_Z_crystal_list = [
    ['ピカチュウ', 'ひっさつのピカチュート', 'ピカチュウZ', 'ボルテッカー'], 
    ['ジュナイパー', 'シャドーアローズストライク', 'ジュナイパーZ', 'かげぬい'], 
    ['ガオガエン', 'ハイパーダーククラッシャー', 'ガオガエンZ', 'DDラリアット'], 
    ['アシレーヌ', 'わだつみのシンフォニア', 'アシレーヌZ', 'うたかたのアリア'], 
    ['カプ・コケコ', 'ガーディアン・デ・アローラ', 'カプZ', 'しぜんのいかり'], 
    ['カプ・テテフ', 'ガーディアン・デ・アローラ', 'カプZ', 'しぜんのいかり'], 
    ['カプ・ブルル', 'ガーディアン・デ・アローラ', 'カプZ', 'しぜんのいかり'], 
    ['カプ・レヒレ', 'ガーディアン・デ・アローラ', 'カプZ', 'しぜんのいかり'], 
    ['マーシャドー', 'しちせいだっこんたい', 'マーシャドーZ', 'シャドースチール'], 
    ['ライチュウ(アローラのすがた)', 'ライトニングサーフライド', 'アロライZ', '10まんボルト'], 
    ['カビゴン', 'ほんきをだす こうげき', 'カビゴンZ', 'ギガインパクト'], 
    ['イーブイ', 'ナインエボルブースト', 'イーブイZ', 'とっておき'], 
    ['ミュウ', 'オリジンズスーパーノヴァ', 'ミュウZ', 'サイコキネシス'], 
    ['サトシのピカチュウ', '1000まんボルト', 'サトピカZ', '10まんボルト'], 
    ['ソルガレオ', 'サンシャインスマッシャー', 'ソルガレオZ', 'メテオドライブ'], 
    ['日食ネクロズマ', 'サンシャインスマッシャー', 'ソルガレオZ', 'メテオドライブ'], 
    ['ルナアーラ', 'ムーンライトブラスター', 'ルナアーラZ', 'シャドーレイ'], 
    ['月食ネクロズマ', 'ムーンライトブラスター', 'ルナアーラZ', 'シャドーレイ'], 
    ['ウルトラネクロズマ', 'てんこがすめつぼうのひかり', 'ウルトラネクロZ', 'フォトンゲイザー'], 
    ['ミミッキュ', 'ぽかぼかフレンドタイム', 'ミミッキュZ', 'じゃれつく'], 
    ['ルガルガン', 'ラジアルエッジストーム', 'ルガルガンZ', 'ストーンエッジ'], 
    ['ジャラランガ', 'ブレイジングソウルビート', 'ジャラランガZ', 'スケイルノイズ'], 
]