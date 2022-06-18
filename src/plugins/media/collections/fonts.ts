import { CollectionConfig } from "payload/types";

const Fonts: CollectionConfig = {
    slug: 'fonts',
    fields: [],
    upload: {
        staticURL: '/fonts',
        staticDir: '../public/fonts',
        mimeTypes: ['font/*'],
    }
}

export default Fonts;