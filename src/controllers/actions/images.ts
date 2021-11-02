import fs from "fs";
import { s3 } from "../..";

// ################## UPLOAD ######################

type TUploadImageAWSParams = {
  path: string;
  filename: string;
  mimetype: string;
};
export const uploadImageAWS = async ({
  path,
  filename,
  mimetype,
}: TUploadImageAWSParams) => {
  const params = {
    ACL: "public-read",
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Body: fs.createReadStream(path),
    ContentType: mimetype,
    Key: `${process.env.AWS_GALLERY_FOLDER_NAME}/${filename}`,
  };
  try {
    return await s3.upload(params).promise();
  } catch (e) {
    throw new Error();
  }
};

// ################## DELETE ######################

type TDeleteImageAWSAWSParams = {
  key: string;
};
export const deleteImageAWS = async ({ key }: TDeleteImageAWSAWSParams) => {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME ?? "",
    Key: key,
  };
  return s3.deleteObject(params).promise();
};
