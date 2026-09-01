import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'

/*(async function () {

    // Configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINAY_NAME,
        api_key: process.env.CLOUDINAY_API_KEY,
        api_secret: process.env.CLOUDINAY_API_SECRET
    });

    // Upload an image
    const uploadResult = await cloudinary.uploader
        .upload(
            'https://res.cloudinary.com/demo/', {
            public_id: 'shoes',
        }
        )
        .catch((error) => {
            console.log(error);
        });

    console.log(uploadResult);

    // Optimize delivery by resizing and applying auto-format and auto-quality
    const optimizeUrl = cloudinary.url('folder', {
        fetch_format: 'auto',
        quality: 'auto'
    });

    console.log(optimizeUrl);

    // Transform the image: auto-crop to square aspect_ratio
    const autoCropUrl = cloudinary.url('shoes', {
        crop: 'auto',
        gravity: 'auto',
        width: 500,
        height: 500,
    });

    console.log(autoCropUrl);
})();*/
// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file
        const response = await cloudinary.uploader
            .upload(
                localFilePath, {
                resource_type: 'auto',
            })
        //file has been uploaded
        console.log('file has been uploaded successfully', response.url);
        console.log('cloud res', response);

         fs.unlinkSync(localFilePath)
        return response

    } catch (err) {
            console.log("Cloudinary upload error:", err);

        fs.unlinkSync(localFilePath) // removes the locally saved temporary file as the upload operation has been failed
        return null
    }
}

export { uploadOnCloudinary }