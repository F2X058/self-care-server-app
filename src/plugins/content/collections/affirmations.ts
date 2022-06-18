import config from "../../../payload.config";

import { CollectionConfig } from "payload/types";

const Affirmations: CollectionConfig = {
    slug: 'affirmations',
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
                const number = await fetch(`${config.serverURL}/api/affirmations?sort=-code`)
                    .then(response => response.json())
                    .then(response => response.docs[0])
                    .then(response => response ? Number(response.code.substring(1)) : 0)
                return "A" +  String(number + 1).padStart(7, "0");
            },
        },
        {
            name: 'male',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'female',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'default',
            type: 'textarea',
            localized: true,
        },
        {
            name: 'premium',
            type: 'checkbox',
            admin: {
                position: 'sidebar',
            },
            defaultValue: false
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: ['categories'],
            hasMany: true,
            required: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'coach',
            type: 'relationship',
            relationTo: 'users',
            hasMany: false,
            required: true,
            admin: {
                position: 'sidebar',
            },
            defaultValue: async({ user }) => {
                const role = await fetch(`${config.serverURL}/api/users/${user.id}`)
                    .then(response => response.json())
                    .then(response => response.role);

                console.log(['admin', 'menager', 'coach'].includes(role));

                if(['admin', 'menager', 'coach'].includes(role))
                    return user.id;
            },
            filterOptions: () => {
                return ({
                    role: {
                        in: ['admin', 'menager', 'coach']
                    }
                })
            }
        }
    ],
}

export default Affirmations;