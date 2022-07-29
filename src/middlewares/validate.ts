import { Request, Response, NextFunction } from 'express';

const checkProductData = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    const { title, price, description, category, image } = req.body;

    const errors = [];

    for (const key in req.body) {
        if (!req.body[key]) {
            errors.push(`Please provide a product ${key}.`);
        }
    }

    if (errors.length > 0) return res.status(401).json({ msg: errors });

    next();
};

export { checkProductData };
