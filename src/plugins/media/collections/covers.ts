import { CollectionConfig } from "payload/types";

const Covers: CollectionConfig = {
    slug: 'covers',
    fields: [],
    upload: {
        staticURL: '/covers',
        staticDir: '../public/covers',
        mimeTypes: ['image/*']
    }
}

export default Covers;