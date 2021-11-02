import AWS from "aws-sdk";

const credentialsAWS = {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SERCRET_ACCESS_KEY,
};
export const s3 = new AWS.S3(credentialsAWS);
