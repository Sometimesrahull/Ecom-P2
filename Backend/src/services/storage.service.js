const imagekit = require("imagekit");
const {v4:uuidv4} = require("uuid");

const imageKit = new imagekit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT,
});


async function uploadImage(fileBuffer){
    const result = await imageKit.upload({
        file:fileBuffer,
        fileName:uuidv4(),
        folder:"products"
    });
    return result;
}
module.exports={uploadImage};