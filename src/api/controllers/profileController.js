module.exports.profile_get = (req, res, next) => {
    res.status(200).json({message: 'Good Get'})
};

module.exports.profile_udpate = (req, res, next) => {
    res.status(200).json({message: 'Good update'})
};

module.exports.profile_destroy = (req, res, next) => {
    res.status(200).json({message: 'Good delete'})
};
