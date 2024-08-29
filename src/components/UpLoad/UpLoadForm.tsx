"use client";

import UploadFile from "./UpLoadFile";

export default function UploadForm() {
  return (
    <form
      action={UploadFile}
      className="flex w-full relative flex-col gap-4 pt-3"
    >
      <span className=" text-blue-700 cursor-pointer left-7">
        Добавить изображение
      </span>
      <label
        htmlFor="file"
        className="flex relative w-full flex-row gap-x-3 z-10  cursor-pointer"
      >
        {}
        <input
          type="file"
          name="file"
          className=" z-10 relative hover:cursor-pointer [type=file:opacity-0]  "
        />
      </label>
    </form>
  );
}
