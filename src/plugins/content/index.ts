import { Config } from "payload/config";

import update from "lodash/update";

// import collections
import Affirmations from "./collections/affirmations";
import Categories from "./collections/categories";
import Templates from "./collections/templates";

export default function Content(config: Config): Config {
    config = update(config, 'collections', (collections: Config['collections']) => {
        if(!collections)
            collections = [];

        return collections.concat(
            Affirmations,
            Categories,
            Templates,
        );
    });

    return config;
}