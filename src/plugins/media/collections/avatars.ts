import { CollectionConfig } from "payload/types";

const Avatars: CollectionConfig = {
    slug: 'avatars',
    fields: [],
    upload: {
        staticURL: '/avatars',
        staticDir: '../public/avatars',
        mimeTypes: ['image/*']
    }
}

export default Avatars;