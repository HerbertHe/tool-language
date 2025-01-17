/**
 * @class
 * @extends Language
 */
class Italiano extends Language
{
    /**
     * @constructor
     * @public
     */
    constructor()
    {
        super();
    }

    /**
     * @return {Map}
     * @method
     * @public
     */
    createMapping ()
    {
        return new Map([
            ["{{プレビューのON/OFF}}", "Anteprima on/off"],
            ["{{フォント枠サイズ}}", "Dimensione della cornice del carattere"],
            ["{{フォント枠カラー}}", "Colore della cornice del carattere"],
            ["{{オニオンスキン}}", "Pelle di cipolla"],
            ["{{バケツツール}}", "Strumenti a secchiello"],
            ["{{ペンツール}}", "Strumento penna"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Doppio clic per aggiungere un punto di curva"],
            ["{{選択ツール}}", "Strumenti di selezione"],
            ["{{Shape変形ツール}}", "Strumento di trasformazione della forma"],
            ["{{テキストツール}}", "Text Tool"],
            ["{{短形ツール}}", "Strumento di testo"],
            ["{{楕円ツール}}", "Strumento Ellisse"],
            ["{{角丸矩形ツール}}", "Strumento Rettangolo arrotondato"],
            ["{{塗りのカラー}}", "Colore di riempimento"],
            ["{{線のカラー}}", "Colore del tratto"],
            ["{{線の太さ}}", "Larghezza della corsa"],
            ["{{プロジェクトデータの読込}}", "Caricamento dei dati del progetto"],
            ["{{プロジェクトデータを保存}}", "Salvare i dati del progetto"],
            ["{{書き出し}}", "Esportazione"],
            ["{{Discordへ移動}}", "Vai su discordia"],
            ["{{バグ報告}}", "Segnalazioni di bug"],
            ["{{設定}}", "Impostazione"],
            ["{{タブを追加}}", "Aggiungere una scheda"],
            ["{{タブの一覧を表示・移動}}", "Visualizzare e spostarsi attraverso l'elenco delle schede"],
            ["{{スクリプトを追加}}", "Aggiungere uno script"],
            ["{{キーフレームを追加}}", "Aggiungere un keyframe"],
            ["{{空のキーフレームを追加}}", "Aggiungere un keyframe vuoto"],
            ["{{フレームを追加}}", "Aggiungere una cornice"],
            ["{{フレームを削除}}", "Cancellare la cornice"],
            ["{{再生}}", "Gioca"],
            ["{{停止}}", "Fermare"],
            ["{{ループ設定}}", "Impostazione del loop"],
            ["{{レイヤーを追加}}", "Aggiungere uno strato"],
            ["{{レイヤーを削除}}", "Cancellare il livello"],
            ["{{全てのレイヤーをハイライト}}", "Evidenzia tutti i livelli"],
            ["{{全てのレイヤーを非表示}}", "Nascondi tutti i livelli"],
            ["{{全てのレイヤーをロック}}", "Blocca tutti i livelli"],
            ["{{比率を固定}}", "Rapporto fisso"],
            ["{{ステージの幅}}", "Larghezza del palco"],
            ["{{背景色}}", "Colore di sfondo"],
            ["{{ステージの高さ}}", "Altezza del palco"],
            ["{{フレームレート}}", "Frame Rate"],
            ["{{シンボル名}}", "Nome del simbolo"],
            ["{{イージング設定}}", "Impostazione di rilassamento"],
            ["{{ビデオの音量設定}}", "Impostazione del volume video"],
            ["{{自動再生}}", "Riproduzione automatica"],
            ["{{テキストエリアのボーダー設定}}", "Impostazione del bordo dell'area di testo"],
            ["{{テキスト入力設定}}", "Impostazione dell'inserimento del testo"],
            ["{{フォント選択}}", "Seleziona il carattere"],
            ["{{自動サイズ調整}}", "Regolazione automatica delle dimensioni"],
            ["{{フォントスタイルタイプ}}", "Tipo di stile di carattere"],
            ["{{行揃え}}", "Allineare l'impostazione"],
            ["{{改行設定}}", "Impostazione Newline"],
            ["{{スクロール設定}}", "Impostazione dello scorrimento"],
            ["{{フォントサイズ}}", "Dimensione del carattere"],
            ["{{フォントカラー}}", "Colore del carattere"],
            ["{{行間}}", "Spazio di linea"],
            ["{{文字幅}}", "Larghezza del carattere"],
            ["{{左マージン}}", "Margine sinistro"],
            ["{{右マージン}}", "Margine destro"],
            ["{{カラー種別の選択}}", "Seleziona un tipo di colore"],
            ["{{背景画像の選択}}", "Selezionare un'immagine di sfondo"],
            ["{{カラーポインターを追加}}", "Aggiungere i puntatori di colore"],
            ["{{カラー値}}", "Colore"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Larghezza dell'oggetto di selezione"],
            ["{{選択対象のX座標}}", "Coordinata X dell'oggetto di selezione"],
            ["{{選択対象の高さ}}", "Altezza dell'oggetto di selezione"],
            ["{{選択対象のY座標}}", "Coordinata Y dell'oggetto di selezione"],
            ["{{選択対象の幅の伸縮}}", "scaleX dell'oggetto selezionato"],
            ["{{選択対象を回転}}", "Ruotare l'oggetto"],
            ["{{選択対象の高さの伸縮}}", "scalaY dell'oggetto selezionato"],
            ["{{アルファオフセット(-255〜255)}}", "Offset alfa(-255〜255)"],
            ["{{赤(0%-100%)}}", "Rosso(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Offset rosso(-255〜255)"],
            ["{{緑(0%-100%)}}", "Verde(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Offset Verde(-255〜255)"],
            ["{{青(0%-100%)}}", "Blu(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Offset Blu(-255〜255)"],
            ["{{ブレンドモード}}", "Modalità di fusione"],
            ["{{フィルターを選択}}", "Seleziona un filtro"],
            ["{{フィルターを追加}}", "Aggiungere un filtro"],
            ["{{サウンドを追加}}", "Aggiungere un suono"],
            ["{{フィルターを表示・非表示する}}", "Mostrare e nascondere i filtri"],
            ["{{フィルターを削除}}", "Cancellare il filtro"],
            ["{{水平方向にぼかす}}", "Sfocatura orizzontale"],
            ["{{垂直方向にぼかす}}", "Sfocatura verticale"],
            ["{{フィルター強度}}", "Forza del filtro"],
            ["{{フィルター角度}}", "Angolo del filtro"],
            ["{{シャドウのアルファ}}", "Ombra alfa"],
            ["{{シャドウのカラー}}", "Colore dell'ombra"],
            ["{{フィルター距離}}", "Distanza del filtro"],
            ["{{ハイライトのカラー}}", "Colore in evidenza"],
            ["{{ハイライトのアルファ}}", "Evidenziare l'alfa"],
            ["{{グラデーションカラー}}", "Colore sfumato"],
            ["{{グラデーションのアルファ}}", "Gradiente alfa"],
            ["{{タブの移動・名前を変更}}", "Spostare/rinominare le schede"],
            ["{{プロジェクトを閉じる}}", "Chiudere il progetto"],
            ["{{上下に移動}}", "Sposta su e giù"],
            ["{{レイヤー変更(ダブルクリック)}}", "Cambio di livello (doppio clic)"],
            ["{{レイヤーをハイライト}}", "Strato di evidenziazione"],
            ["{{レイヤーを非表示}}", "Nascondere lo strato"],
            ["{{レイヤーをロック}}", "Bloccare il livello"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Curve Pointer (doppio clic per attivare/disattivare)"],
            ["{{インスタンス名}}", "Nome dell'istanza"],
            ["{{ライブラリ内の検索}}", "Cerca nella biblioteca"],
            ["{{フレームラベル}}", "Etichetta del telaio"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Se il progetto non viene salvato, i dati del progetto in questa scheda non possono essere recuperati. Vuoi cancellare la scheda?"]
        ]);
    }
}