"use server";

import fs from "node:fs/promises";
import { revalidatePath } from "next/cache";

async function UploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  await fs.writeFile(`./public/${file.name}`, buffer);

  revalidatePath("/");
}

export default UploadFile;
