// จับทุก path ที่ไม่มี route อื่น (เช่น /.well-known/... จาก Chrome DevTools) แล้วส่ง 404
export function loader() {
  throw new Response(null, { status: 404, statusText: "Not Found" });
}

export default function CatchAll() {
  return null;
}
