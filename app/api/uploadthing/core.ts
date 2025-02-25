// import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

const handleAuth = async () => {
    // const { userId } = await auth();
    // if(!userId) {
    //     throw new Error("Unauthorized");
    // }
    // return { userId };
}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    image: f({ image: {maxFileSize: "4MB", maxFileCount: 1 }})
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
    attachment: f(["image"])
    // .middleware(() => handleAuth())
    .onUploadComplete(() => {})
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
