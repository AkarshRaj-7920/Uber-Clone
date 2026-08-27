const userModel = require('../Models/user.model')

exports.createUser = async ({firstName, lastName, email, password}) => {
    if (!firstName || !email || !password) {
        throw new Error(`All these fields are required`);
    }
    const user = await userModel.create({
        fullName: {
            firstName,
            lastName
        },
        email,
        password
    })

    return user;
}