module.exports.users_getAll = (req, res, next) => {
    res.status(200).json({message: 'Good Get All'})
};

module.exports.user_getById = (req, res, next) => {
    res.status(200).json({message: 'Good get One'})
};

module.exports.user_destroy = (req, res, next) => {
    res.status(200).json({message: 'Good delete'})
};

module.exports.user_udpate = (req, res, next) => {
    res.status(200).json({message: 'Good update'})
};
