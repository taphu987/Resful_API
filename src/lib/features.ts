class APIfeatures {
    query: any;
    queryString: any;
    constructor(query: any, queryString: any) {
        this.query = query; // Products.find()
        this.queryString = queryString; // req.query
    }

    paginating = () => {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 5;

        const skip = limit * (page - 1);

        this.query = this.query.limit(limit).skip(skip);
        return this;
    };

    sorting = () => {
        const sort = this.queryString.sort || '-createdAt';

        this.query = this.query.sort(sort);

        return this;
    };

    searching = () => {
        const search = this.queryString.search;

        if (search) {
            this.query = this.query.find({
                $text: { $search: search },
            });
        } else {
            this.query = this.query.find();
        }

        return this;
    };

    filtering = () => {
        const queryObject = { ...this.queryString };

        const excludedFields = [];

        for (let key in queryObject) {
            const regex = /_gte|_gt|_lt|_lte|_regex/gi;
            if (key.search(regex) < 1) {
                excludedFields.push(key);
            }
        }

        excludedFields.forEach((field) => delete queryObject[field]);

        let queryStr = '';

        Object.keys(queryObject).forEach((key, index) => {
            let str = JSON.stringify(key)
                .replace('_', '": {"$')
                .concat(`: "${queryObject[key]}"}`);

            if (index < Object.keys(queryObject).length - 1) {
                queryStr += str + ', ';
            } else {
                queryStr += str;
            }
        });
        console.log(queryStr);

        // queryStr = queryStr.replace(
        //     /\b(gte|gt|lte|lt|regex)\b/g,
        //     (match) => '$' + match,
        // );

        const newQuery = JSON.parse(`{${queryStr}}`);

        this.query = this.query.find(newQuery);

        return this;
    };

    counting = () => {
        this.query = this.query.count();

        return this;
    };
}

export { APIfeatures };
