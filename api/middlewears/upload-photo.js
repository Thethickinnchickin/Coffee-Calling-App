// const aws = require('aws-sdk');
// const multer = require('multer');
// const multers3 = require('multer-s3'); 

// aws.config.update({
//     secretAccessKey: process.envAWSSecretKey,
//     accessKeyId: process.env.AWSAccessKeyId
// });

// const s3 = new aws.S3();

// const upload = multer({
//     storage: multers3({
//         s3: s3,
//         bucket: 'e-comm-site',
//         acl: 'public-read',
//         metadata: (req, file, cb) => {
//             if(file){
//                 cb(null, { fieldName: file.fieldname})               
//             } else {
//                 next();
//             }
//         },
//         key: (req, file, cb) => {
//             cb(null, Date.now().toString())
//         }
//     })
// })


// module.exports = upload;

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage} = require('multer-storage-cloudinary');



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'RestaurantReview',
        allowedFormates: ['jpeg', 'png', 'jpg']     
    }

})

module.exports = {
    cloudinary,
    storage
}
