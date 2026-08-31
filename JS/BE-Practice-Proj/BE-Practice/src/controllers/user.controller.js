import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apierror.js'
import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/apiresponse.js'

const registerUser = asyncHandler(async (req, res) => {

    const { username, email, fullName, password } = req.body

    if ([username, email, fullName, password].some((fields) => fields?.trim() === '')) {
        throw new ApiError(400, "All the fields are required")
    }

    const existingUser = await User.findOne({
        $or: [{ username }, { email }]
    })
    if (existingUser) {
        throw new ApiError(409, 'user already exist with the email or username')
    }
    console.log("file", req.files)

    const avatarLocalPath = req.files?.avatar[0]?.path
    const coverImageLocalPath = req.files?.coverImage[0]?.path
    if (!avatarLocalPath) {
        throw new ApiError(400, "Avatar is required")
    }
    const uploadAvatar = await uploadOnCloudinary(avatarLocalPath)
    const uploadCoverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!uploadAvatar) {
        throw new ApiError(400, "Failed to upload Avatar in clodinary")
    }

    const user = await User.create({
        fullName,
        username: username.toLowercase(),
        email,
        avatar: uploadAvatar.url,
        coverImage: uploadCoverImage?.url || '',
        password
    })

    const createdUser = user.findById(user._id).select(
        "-password -refreshToken"
    )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(200).json(new ApiResponse(200, createdUser, "User registered Successfully"))


})

export { registerUser }