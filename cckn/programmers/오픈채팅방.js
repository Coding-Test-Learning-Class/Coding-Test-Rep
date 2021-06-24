const postfix = {
  Enter: "님이 들어왔습니다.",
  Leave: "님이 나갔습니다.",
};

function solution(record) {
  const _record = record.map((row) => {
    const [method, id, nickname] = row.split(" ");
    return { method, id, nickname };
  });

  const db = new Map();
  _record.forEach((r) => {
    if (r.nickname) db.set(r.id, r.nickname);
  });

  return _record
    .filter((r) => r.method !== "Change")
    .map((r) => `${db.get(r.id)}${postfix[r.method]}`);
}
