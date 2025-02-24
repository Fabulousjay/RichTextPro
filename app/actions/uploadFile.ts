"use server"

import { v2 as cloud, UploadApiResponse } from 'cloudinary'

cloud.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
})

export const uploadFile = async (data: FormData): Promise<UploadApiResponse | undefined> => {
    const file = data.get("file");
    console.log(file)

    if (!(file instanceof File) || !file.type.startsWith("image")) {
        throw new Error("Invalid file type");

    }

    const buffer = Buffer.from(await file.arrayBuffer())

    return new Promise((resolve, reject) => {
        const uploadStream = cloud.uploader.upload_stream({ folder: "rich-editor" }, (error, result) => {
            if (error) reject(error);
            else resolve(result)
        });

        uploadStream.end(buffer);

    })
}


export const readAllImages = async () => {
    try {
        const { resources } = await cloud.api.resources({
            prefix: "rich-editor",
            resource_type: "image",
            type: "upload"
        }) as { resources: UploadApiResponse[] }

        return resources.map(({ secure_url }) => secure_url)
    } catch (error) {
        console.log(error)
    }
return []

}

