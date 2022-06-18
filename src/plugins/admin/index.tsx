import { Config } from "payload/config";

import update from "lodash/update";

// import collections
import Users from "./collections/users";

// import components
import Logo from "./components/logo";
import Icon from "./components/icon";

export default function Admin(config: Config): Config {
    config = update(config, 'collections', (collections: Config['collections']) => {
        if(!collections)
            collections = [];

        return collections.concat(
            Users
        );
    });

    config = update(config, ['admin', 'user'], () => Users.slug);
    config = update(config, ['admin', 'components'], (value) => {
        if(!value)
            value = {};

        // set logo
        value = update(value, ['graphics', 'Logo'], () => Logo);
        // set icon (admin logo)
        value = update(value, ['graphics', 'Icon'], () => Icon);

        return value;
    });

    return config;
}