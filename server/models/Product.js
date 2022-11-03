const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        maxlength: 50
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        default: 0
    },
    images: {
        type: Array,
        default: []
    },
    sold: {
        type: Number,
        maxlength: 100,
        default: 0
    },
    types: {
        type: Number,
        default: 1
    },
    views: {
        type: Number,
        default: 0
    }
}, { timestamps: true })

productSchema.index({
    title: 'text',
    description: 'text'
}, {
    //title을 5배 더 중요하게 생각해서 검색(mongo DB 기능)
    //설정하지 않으면 default 값이 1이다
    weights: {
        title: 5,
        description: 1
    }
})
const Product = mongoose.model('Product', productSchema);

module.exports = { Product }