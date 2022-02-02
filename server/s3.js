require('dotenv').config()
const S3 = require('aws-sdk/clients/s3');
const fs = require('fs')

const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyID = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const profile = process.env.AWS_PROFILE

const s3 = new S3 ({
    region,
    accessKeyID,
    secretAccessKey
})

//uploads a photo

function uploadFile(file) {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams={
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    
    return s3.upload(uploadParams).promise()
    
}
exports.uploadFile = uploadFile

//downloads a photo

function getFileStream (fileKey) {
    const downloadParams={
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}
exports.getFileStream = getFileStream