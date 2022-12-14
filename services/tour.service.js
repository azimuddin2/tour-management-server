const Tour = require("../models/Tours")

exports.getTourService = async (queries) => {
    const result = await Tour.find({}).skip(queries.skip).limit(queries.limit);
    return result;
};

// post service 
exports.addedDataTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
};

exports.tourGetDataByIdService = async (id) => {
    const result = await Tour.findByIdAndUpdate(id, { $inc: { views: 1 } });
    return result;
};

exports.tourUpdateByIdService = async (tourId, data) => {
    const result = await Tour.updateOne({ _id: tourId }, { $set: data }, { runValidators: true });
    return result;
};

// trending top 3 tour 
exports.trendTopThreeTourService = async () => {
    const result = await Tour.find({}).sort({ views: -1 }).limit(3);
    return result;
}

//  cheapest Least Price 
exports.cheapestLeastPriceService = async () => {
    const result = await Tour.find({}).sort({ price: 1 }).limit(3);
    return result;
}