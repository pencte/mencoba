let latest = {};

export function setData(data) {
  latest = data;
}

export default function handler(req, res) {
  const cookie = req.headers.cookie || "";
  if (!cookie.includes("auth=owner")) {
    return res.status(403).json({ error: "unauthorized" });
  }
  res.status(200).json(latest);
}
