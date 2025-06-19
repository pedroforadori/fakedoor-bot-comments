
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, platform } = req.body;
    const filePath = path.join(process.cwd(), "data", "emails.json");
    const fileData = await fs.readFile(filePath, "utf-8").catch(() => "[]");
    const entries = JSON.parse(fileData);
    const alreadyExists = entries.some(entry => entry.email === email && entry.platform === platform);
    if (!alreadyExists) {
      entries.push({ email, platform, date: new Date().toISOString() });
      await fs.writeFile(filePath, JSON.stringify(entries, null, 2));
    }
    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
