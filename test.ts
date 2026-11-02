// VR1: 6=3V, 5=P0, 4=GND
//
// P0ゾーン:
// 0～30     : 4側の新ストローク
// 31～469   : 4側の停止帯
// 470～553  : 中央
// 554～992  : 6側の停止帯
// 993～1023 : 6側の新ストローク
//
// 発音後に一度中央へ戻ったら、次にどちらへ倒しても停止だけ行います。
// 停止後は一度中央へ戻してから、次の深いストロークを受け付けます。
guitarchord.setDelay(100)
guitarchord.assignChord(guitarchord.ChordButton.NoButton, guitarchord.Chord.C)
guitarchord.assignChord(guitarchord.ChordButton.Button1, guitarchord.Chord.G)
guitarchord.assignChord(guitarchord.ChordButton.Button2, guitarchord.Chord.Am)
guitarchord.assignChord(guitarchord.ChordButton.Button1Button2, guitarchord.Chord.F)
