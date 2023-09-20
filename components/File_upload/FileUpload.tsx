"use client"

import { useFormik, FormikProps } from "formik";
import { FileUploadValue } from "@/types/forms";
import { fileUploadSchema } from "@/schemas";

const FileUpload = () => {

    const { values, setFieldValue, handleSubmit }: FormikProps<FileUploadValue> = useFormik<FileUploadValue>({
        initialValues: {
            file: null
        },
        validationSchema: fileUploadSchema,
        onSubmit: async (values, actions) => {
            console.log(values.file);
        }
    });

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                    File upload
                </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <label className="mb-3 block text-black dark:text-white">
                        Attach file
                    </label>
                    <input
                        type="file"
                        className="mb-5 w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                        id="file"
                        onChange={(e) => setFieldValue("file", e.target.files?.[0])}
                    />
                    <button type="submit" className={`flex w-full justify-center rounded bg-primary p-3 font-medium text-gray ${false ? "cursor-not-allowed opacity-50" : ""}`}>
                        Upload
                    </button>
                </form>
            </div>
        </div>
    )
}

export default FileUpload
