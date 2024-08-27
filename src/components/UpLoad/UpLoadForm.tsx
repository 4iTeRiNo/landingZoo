"use client";

import UploadFile from "./UpLoadFile";

export default function UploadForm() {
  return (
    <form action={UploadFile} className="flex w-full flex-col gap-4 pt-3">
      <label htmlFor="file" className="flex w-full flex-row gap-x-3">
        <span>Upload a file</span>
        <input type="file" name="file" placeholder="Upload a file" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
