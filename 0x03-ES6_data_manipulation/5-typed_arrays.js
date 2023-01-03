export default function createInt8TypedArray(lenghth, position, value) {
  const buffer = new ArrayBuffer(lenghth);
  const view = new DataView(buffer, 0);
  if (position > lenghth - 1) throw Error('position outside range');
  view.setInt8(position, value);
  return view;
}
