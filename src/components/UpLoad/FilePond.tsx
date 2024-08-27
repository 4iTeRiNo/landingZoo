import React from "react";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const FilePondField = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="file"
        control={control}
        render={({ onChange, value }) => (
          <FilePond
            files={value}
            allowMultiple
            allowImageTransform
            // imageCropAspectRatio={"1:1"}
            onupdatefiles={onChange}
            labelIdle="Добавить изображение"
          />
        )}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default FilePondField;
