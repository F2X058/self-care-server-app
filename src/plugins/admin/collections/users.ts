import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
    slug: 'users',
    fields: [
        {
            name: 'avatar',
            type: 'upload',
            relationTo: 'avatars',
        },
        {
            name: 'role',
            type: 'select',
            options: [
                {
                    label: 'Admin',
                    value: 'admin',
                },
                {
                    label: 'Menager',
                    value: 'menager',
                },
                {
                    label: 'Coach',
                    value: 'coach',
                },
                {
                    label: 'User',
                    value: 'user'
                }
            ],
            required: true,
        },
        {
            name: 'name',
            type: 'text',    
        },
        {
            name: 'surname',
            type: 'text',    
        },
    ],
    auth: true,
    admin: {
        useAsTitle: 'email',
    }
}

export default Users;