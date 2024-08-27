"use client";

import UploadFile from "./UpLoadFile";

export default function UploadForm() {
  return (
    <form action={UploadFile} className="flex flex-col gap-4">
      <label htmlFor="file">
        <span>Upload a file</span>
        <input type="file" name="file" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
