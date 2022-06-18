import config from "../../../payload.config";

import { CollectionConfig } from "payload/types";

const Templates: CollectionConfig = {
    slug: 'templates',
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
                const number = await fetch(`${config.serverURL}/api/templates?sort=-code`)
                    .then(response => response.json())
                    .then(response => {
                        console.log(response);
                        return response;
                    })
                    .then(response => response.docs[0])
                    .then(response => response ? Number(response.code.substring(1)) : 0)
                return "T" +  String(number + 1).padStart(7, "0");
            },
        },
        {
            name: 'name',
            type: 'text',
            localized: true,
        },
        {
            name: 'font',
            type: 'upload',
            relationTo: 'fonts',
        },
        {
            name: 'cover',
            type: 'upload',
            relationTo: 'covers',
        },
        {
            name: 'premium',
            type: 'checkbox',
            defaultValue: false,
            admin: {
                position: 'sidebar'
            }
        }
    ],
}

export default Templates;