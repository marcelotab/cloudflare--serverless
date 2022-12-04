const cloudinary = require('cloudinary').v2;

const uploadFile = async(path) => {
    try {
        initConfig();
        const result = await cloudinary.uploader.upload(path, { tags: 'basic_sample' });
        console.log(`File upload successfully ${result}`);
        return result;
    }catch (error) {
        console.log(`Error to try upload file in Storage ${JSON.stringify(error)}`);
    }
}

const initConfig = () => {
    cloudinary.config({
        cloud_name: 'dygjebdcm',
        api_key: '543499842484256',
        api_secret: 'ZohCNwKrVTqZVMeG-RCApe1k9sw'
    })
}
module.exports = {
    uploadFile,
}