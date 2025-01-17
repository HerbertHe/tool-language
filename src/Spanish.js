/**
 * @class
 * @extends Language
 */
class Spanish extends Language
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
            ["{{プレビューのON/OFF}}", "Activación/desactivación de la vista previa"],
            ["{{フォント枠サイズ}}", "Tamaño del marco de la fuente"],
            ["{{フォント枠カラー}}", "Color del marco de la fuente"],
            ["{{オニオンスキン}}", "Piel de cebolla"],
            ["{{バケツツール}}", "Herramientas para cubos"],
            ["{{ペンツール}}", "Herramienta de la pluma"],
            ["{{ダブルクリックでカーブポイントが追加されます}}", "Haga doble clic para añadir un punto de curva"],
            ["{{選択ツール}}", "Herramientas de selección"],
            ["{{Shape変形ツール}}", "Herramienta de transformación de formas"],
            ["{{テキストツール}}", "Herramienta de texto"],
            ["{{短形ツール}}", "Herramienta Rectángulo"],
            ["{{楕円ツール}}", "Herramienta Elipse"],
            ["{{角丸矩形ツール}}", "Herramienta Rectángulo Redondeado"],
            ["{{塗りのカラー}}", "Color de relleno"],
            ["{{線のカラー}}", "Color del trazo"],
            ["{{線の太さ}}", "Anchura de la carrera"],
            ["{{プロジェクトデータの読込}}", "Carga de los datos del proyecto"],
            ["{{プロジェクトデータを保存}}", "Guardar los datos del proyecto"],
            ["{{書き出し}}", "Exportar"],
            ["{{Discordへ移動}}", "Ir a la discordia"],
            ["{{バグ報告}}", "Informes de errores"],
            ["{{設定}}", "Configuración"],
            ["{{タブを追加}}", "Añadir una pestaña"],
            ["{{タブの一覧を表示・移動}}", "Ver y desplazarse por la lista de pestañas"],
            ["{{スクリプトを追加}}", "Añadir una secuencia de comandos"],
            ["{{キーフレームを追加}}", "Añadir un fotograma clave"],
            ["{{空のキーフレームを追加}}", "Añadir un fotograma clave vacío"],
            ["{{フレームを追加}}", "Añadir un marco"],
            ["{{フレームを削除}}", "Borrar el marco"],
            ["{{再生}}", "Juega a"],
            ["{{停止}}", "Detener"],
            ["{{ループ設定}}", "Ajuste del bucle"],
            ["{{レイヤーを追加}}", "Añadir una capa"],
            ["{{レイヤーを削除}}", "Eliminar la capa"],
            ["{{全てのレイヤーをハイライト}}", "Resaltar todas las capas"],
            ["{{全てのレイヤーを非表示}}", "Ocultar todas las capas"],
            ["{{全てのレイヤーをロック}}", "Bloquear todas las capas"],
            ["{{比率を固定}}", "Relación fija"],
            ["{{ステージの幅}}", "Anchura del escenario"],
            ["{{背景色}}", "Color de fondo"],
            ["{{ステージの高さ}}", "Altura del escenario"],
            ["{{フレームレート}}", "Velocidad de fotogramas"],
            ["{{シンボル名}}", "Nombre del símbolo"],
            ["{{イージング設定}}", "Ajuste de la flexibilización"],
            ["{{ビデオの音量設定}}", "Ajuste del volumen de vídeo"],
            ["{{自動再生}}", "Reproducción automática"],
            ["{{テキストエリアのボーダー設定}}", "Configuración del borde del área de texto"],
            ["{{テキスト入力設定}}", "Ajuste de la entrada de texto"],
            ["{{フォント選択}}", "Selección de fuentes"],
            ["{{自動サイズ調整}}", "Ajuste automático del tamaño"],
            ["{{フォントスタイルタイプ}}", "Tipo de letra"],
            ["{{行揃え}}", "Ajuste de la alineación"],
            ["{{改行設定}}", "Ajuste de la nueva línea"],
            ["{{スクロール設定}}", "Ajuste de desplazamiento"],
            ["{{フォントサイズ}}", "Tamaño de la fuente"],
            ["{{フォントカラー}}", "Color de la fuente"],
            ["{{行間}}", "Espacio de la línea"],
            ["{{文字幅}}", "Anchura de los caracteres"],
            ["{{左マージン}}", "Margen izquierdo"],
            ["{{右マージン}}", "Margen derecho"],
            ["{{カラー種別の選択}}", "Seleccione un tipo de color"],
            ["{{背景画像の選択}}", "Seleccionar una imagen de fondo"],
            ["{{カラーポインターを追加}}", "Añadir punteros de color"],
            ["{{カラー値}}", "Color"],
            ["{{アルファ(0%-100%)}}", "Alpha(0%-100%)"],
            ["{{アルファ値}}", "Alpha"],
            ["{{選択対象の幅}}", "Anchura del objeto de selección"],
            ["{{選択対象のX座標}}", "Coordenada X del objeto de selección"],
            ["{{選択対象の高さ}}", "Altura del objeto de selección"],
            ["{{選択対象のY座標}}", "Coordenada Y del objeto de selección"],
            ["{{選択対象の幅の伸縮}}", "scaleX del objeto seleccionado"],
            ["{{選択対象を回転}}", "Girar el objeto"],
            ["{{選択対象の高さの伸縮}}", "escalaY del objeto seleccionado"],
            ["{{アルファオフセット(-255〜255)}}", "Desplazamiento alfa(-255〜255)"],
            ["{{赤(0%-100%)}}", "Rojo(0%-100%)"],
            ["{{赤オフセット(-255〜255)}}", "Compensación roja(-255〜255)"],
            ["{{緑(0%-100%)}}", "Verde(0%-100%)"],
            ["{{緑オフセット(-255〜255)}}", "Compensación verde(-255〜255)"],
            ["{{青(0%-100%)}}", "Azul(0%-100%)"],
            ["{{青オフセット(-255〜255)}}", "Offset azul(-255〜255)"],
            ["{{ブレンドモード}}", "Modo de fusión"],
            ["{{フィルターを選択}}", "Seleccione un filtro"],
            ["{{フィルターを追加}}", "Añadir un filtro"],
            ["{{サウンドを追加}}", "Añadir un sonido"],
            ["{{フィルターを表示・非表示する}}", "Mostrar y ocultar filtros"],
            ["{{フィルターを削除}}", "Eliminar el filtro"],
            ["{{水平方向にぼかす}}", "Desenfoque horizontal"],
            ["{{垂直方向にぼかす}}", "Desenfoque vertical"],
            ["{{フィルター強度}}", "Fuerza del filtro"],
            ["{{フィルター角度}}", "Ángulo del filtro"],
            ["{{シャドウのアルファ}}", "Sombra Alfa"],
            ["{{シャドウのカラー}}", "Color de la sombra"],
            ["{{フィルター距離}}", "Distancia del filtro"],
            ["{{ハイライトのカラー}}", "Color de realce"],
            ["{{ハイライトのアルファ}}", "Resaltar Alpha"],
            ["{{グラデーションカラー}}", "Color degradado"],
            ["{{グラデーションのアルファ}}", "Gradiente Alfa"],
            ["{{タブの移動・名前を変更}}", "Mover/Renombrar pestañas"],
            ["{{プロジェクトを閉じる}}", "Cerrar el proyecto"],
            ["{{上下に移動}}", "Subir y bajar"],
            ["{{レイヤー変更(ダブルクリック)}}", "Cambio de capa (doble clic)"],
            ["{{レイヤーをハイライト}}", "Capa de resaltado"],
            ["{{レイヤーを非表示}}", "Ocultar capa"],
            ["{{レイヤーをロック}}", "Bloquear la capa"],
            ["{{カーブポインター(ダブルクリックでON/OFF)}}", "Puntero de curva (doble clic para activar/desactivar)"],
            ["{{インスタンス名}}", "Nombre de la instancia"],
            ["{{ライブラリ内の検索}}", "Buscar en la biblioteca"],
            ["{{フレームラベル}}", "Etiqueta del marco"],
            ["{{プロジェクトが保存されていない場合、このタブのプロジェクトデータを復旧する事はできません。タブを削除しますか？}}", "Si el proyecto no se guarda, los datos del proyecto en esta pestaña no se pueden recuperar. ¿Desea eliminar la pestaña?"]
        ]);
    }
}