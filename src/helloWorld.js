const {uploadFile} = require("./upload");
const cloudinary = require('cloudinary').v2;

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const filePath = ''
    await uploadFile(filePath);
    return new Response(`Hello response ${JSON.stringify(request)}`);
  }catch (error) {
    console.log(error)
  }

}