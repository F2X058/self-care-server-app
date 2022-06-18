import config from "../../../payload.config";

import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'code'
    },
    fields: [
        {
            name: 'code',
            type: 'text',
            unique: true,
            required: true,
            defaultValue: async() => {
                const number = await fetch(`${config.serverURL}/api/categories?sort=-code`)
                    .then(response => response.json())
                    .then(response => response.docs[0])
                    .then(response => response ? Number(response.code.substring(1)) : 0)
                return "C" +  String(number + 1).padStart(7, "0");
            }
        },
        {
            name: 'name',
            type: 'text',
            localized: true,
        },
        {
            name: 'cover',
            type: 'upload',
            relationTo: 'covers',
        },
        {
            name: 'premium',
            type: 'checkbox',
            admin: {
                position: "sidebar"
            },
            defaultValue: false
        }
    ],
}

export default Categories;