import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },

        category: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

productsSchema.index({ title: 'text', description: 'text', category: 'text' });

const Products = mongoose.model('Products', productsSchema);

export default Products;
