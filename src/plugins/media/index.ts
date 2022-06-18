import { Config } from "payload/config";

import update from "lodash/update";

// import collections
import Avatars from "./collections/avatars";
import Covers from "./collections/covers";
import Fonts from "./collections/fonts";

export default function Media(config: Config): Config {
    config = update(config, 'collections', (collections: Config['collections']) => {
        if(!collections)
            collections = [];

        return collections.concat(
            Avatars,
            Covers,
            Fonts
        );
    });

    return config;
}