var poke_abikity_list = [
    ['イリュージョン', '手持ちの最後のポケモンの姿と名前で戦闘に出る。『タイプ』や能力に変化はない。ダメージを受けると元に戻る。'], 
    ['おどりこ', '場にいるポケモンが踊り系の技『ちょうのまい』『つるぎのまい』『はなびらのまい』『フェザーダンス』『フラフラダンス』『ほのおのまい』『みかづきのまい』『めざめるダンス』『りゅうのまい』『ソウルビート』を使うと、その直後に同じ技を使える。(自分の選択した技はこの特性とは別にもう一度行動できる)'], 
    ['おやこあい', '同じ技を1ターンに2回攻撃できる。2回目の攻撃は、威力が0.25倍になる。能力ランクを下げるなどの効果は2回分与えられる。1ターンに連続して攻撃する技や、複数の相手に攻撃する技の場合は2回攻撃できない。(第6世代は2回目威力0.5倍)'], 
    ['かがくへんかガス', 'このポケモンが場にいる限り、すべてのポケモンの特性の効果が無効になり、発動しなくなる。ただし、『バトルスイッチ』『ばけのかわ』などフォルムに関わる特性や、一部の固有の特性などには効かない。'], 
    ['かたやぶり', '相手の特性の影響を受けずに攻撃できる。ただし、攻撃後に受ける効果は消えない。'], 
    ['かわりもの', '戦闘に出ると、相手のポケモンに変身し、『へんしん』状態になる。ダブルバトルでは正面の相手に変身するため、正面のポケモンがいない場合は失敗する。'], 
    ['ききかいひ', '相手の技のダメージで自分の残りHPが半分以下になると、他の手持ちのポケモンと交代する。相手の技のダメージ以外の場合や、すでに残りHPが半分以下の場合は発動しない。なお、野生のポケモンが相手の場合は交代せずに逃げ出す。'], 
    ['きみょうなくすり', '戦闘に出たとき、味方のポケモンの能力ランクの変化をもとに戻す。上がったランクも戻る。(ダブルバトル用)'], 
    ['きょうせい', '味方が道具を使ったり失った時、自分の持っている道具を味方に移動する。'], 
    ['きんちょうかん', 'すべての相手は『きのみ』を使用できなくなる。'], 
    ['ぎゃくじょう', '相手の技のダメージで自分の残りHPが半分以下になると、『とくこう』ランクが1段階上がる。相手の技のダメージ以外の場合や、すでに残りHPが半分以下の場合は発動しない。'], 
    ['ぎょぐん', 'レベル20以上になると、残りHPが最大HPの1/4以上であれば、場に出た時かターン終了時に『むれたすがた』にフォルムチェンジする。残りHPが最大HPの1/4以下になると、ターン終了時に『たんどくのすがた』に戻る。'], 
    ['ごりむちゅう', '同じ技しか出せなくなるが、物理技が1.5倍になる(『こうげき』を上げるのかは不明)。ダイマックス中は、すべての効果がない。'], 
 
    ['シンクロ', '相手の技や特性によって『どく』『まひ』『やけど』状態になった時、相手を同じ状態異常にする。／同じ『せいかく』の野生のポケモンと出会いやすくなる。'], 
    
    ['ぜったいねむり', '常に『ねむり』状態で、他の状態異常にならない。『ねむり』状態で技を出せる。'], 
    ['ターボブレイズ', '相手の特性の影響を受けずに攻撃できる。ただし、攻撃後に受ける効果は消えない。'], 
    ['ちからずく', '追加効果のある技を使うと、追加効果が発動しない代わりに威力が1.3倍になる。また、追加効果がある技を使うと、道具『いのちのたま』の反動効果や『かいがらのすず』の回復効果を受けない。攻撃対象の相手の道具『だっしゅつボタン』『レッドカード』『アッキのみ』『タラプのみ』および特性『にげごし』『ききかいひ』『へんしょく』『わるいてぐせ』『ぎゃくじょう』の効果も発動させない。なお、自分の能力ランクを下げる技や反動技、ダイマックス技は追加効果の対象ではない。'], 

    ['テラボルテージ', '相手の特性の影響を受けずに攻撃できる。ただし、攻撃後に受ける効果は消えない。'], 
    ['てんきや', '天気が『にほんばれ』の時は『ほのお』タイプに、『あめ』の時は『みず』タイプに、『あられ』の時は『こおり』タイプになり、姿がそれぞれ変化する。'], 
    ['てんねん', '相手の能力ランクの変化の影響を受けない。'], 
    ['てんのめぐみ', '技の追加効果の発生率が2倍になる。'], 
    ['デルタストリーム', '戦闘に出ている間、天気が『らんきりゅう』になる。『ひこう』タイプのポケモンの弱点となるタイプの技のダメージが通常のダメージになる。また、技『あまごい』『にほんばれ』『すなあらし』『あられ』が失敗し、特性『あめふらし』『ひでり』『すなおこし』『ゆきふらし』が発動しなくなる。この状態を変更できるのは特性『はじまりのうみ』『おわりのだいち』のみ。'], 

    ['とびだすなかみ', '相手の技のダメージによって『ひんし』になった時、その最後の技を受けた時に残っていたHP分のダメージを技を使った相手に与える。'], 
    ['トレース', '場に出た時、相手と同じ特性になる。相手が2体いる場合はランダムにどちらかの特性が選ばれる。相手の特性が『ARシステム』『イリュージョン』『かがくのちから』『かわりもの』『きずなへんげ』『ぎょぐん』『じんばいったい』『スワームチェンジ』『ぜったいねむり』『ダルマモード』『てんきや』『トレース』『ばけのかわ』『バトルスイッチ』『フラワーギフト』『マルチタイプ』『リミットシールド』『レシーバー』の場合は効果がなく、相手が別の特性のポケモンとなった時に発動する。'], 

    ['ぶきよう', '持っている道具の効果が発揮されない。'], 
    ['マジックガード', '直接のダメージ以外を受けない。具体的には、『どく』『やけど』状態や特性『さめはだ』『てつのトゲ』『とびだすなかみ』『ヘドロえき』『ゆうばく』、天気『あられ』『すなあらし』、技『あくむ』『うずしお』『からではさむ』『サンダープリズン』『しめつける』『ステルスロック』『すなじごく』『トラバサミ』『のろい』『はじけるほのお』『ふんじん』『ほのおのうず』『ほのおのちかい』『まきつく』『まきびし』『マグマストーム』『まとわりつく』『やどりぎのタネ』によるダメージ、反動のある技による反動ダメージや失敗時に受けるダメージ、『ニードルガード』『ふんじん』によるダメージ、道具『いのちのたま』『くっつきバリ』『くろいヘドロ』『ゴツゴツメット』の効果によるダメージを受けない。ただし『こんらん』『じばく』『だいばくはつ』『わるあがき』などには影響しない。'], 
    ['ものひろい', '毎ターン終了時に、そのターンに相手や味方(相手が優先)が消費した道具を拾って自分のものにする。自分が道具を持っていない時のみ発動する。『だっしゅつボタン』『ふうせん』には効果がない。／道具を持っていない時、戦闘後に10%の確率で道具を拾ってくる。戦闘に参加しなくてもよい。レベルに応じて拾ってくる道具が変化する。'], 
    ['りんぷん', '技の追加効果を受けない。'], 
    ['レシーバー', '場にいる味方のポケモンが『ひんし』状態になった時、自分の特性がそのポケモンと同じ特性になる。場から離れると元に戻る(ダブルバトル用)。味方の特性が『ARシステム』『イリュージョン』『かがくのちから』『かわりもの』『きずなへんげ』『ぎょぐん』『スワームチェンジ』『ぜったいねむり』『ダルマモード』『てんきや』『トレース』『ばけのかわ』『バトルスイッチ』『ふしぎなまもり』『フラワーギフト』『マルチタイプ』『リミットシールド』『レシーバー』の場合は効果がない。']
]