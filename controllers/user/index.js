const User = require("../../models/user")

exports.userCreation = async (req, res) => {

    console.log("the user", req.body)

    const user = await User.create(req.body)

    return res.status(200).json({
        data: user
    })

}