// 40X - Client Side Error
// 50X - Server Side Error 

module.exports = {
    ERROR_STATUS_ARRAY: [
        {
            code:1002,
            msg: "cannot fetch record list",
            data:"cannot fetch record list"
        },
        {
            code: 401,
            msg: "userId or privateKey is wrong.",
            data: "userId or privateKey is wrong."
        },
        {
            code: 402,
            msg: "Mandatory Parameter Empty.",
            data: "Mandatory Parameter Empty."
        },
        {
            code: 403,
            msg: "Mandatory Parameter Missing.",
            data: "Mandatory Parameter Missing."
        },
        {
            code: 404,
            msg: "User already registered.",
            data: "User already registered."
        },
        {
            code: 405,
            msg: "Your password is incorrect.",
            data: "Your password is incorrect."
        },
        {
            code: 406,
            msg: "Please verify your email.",
            data: "Please verify your email."
        },
        {
            code: 407,
            msg: "User Not Exist.",
            data: "User Not Exist."
        },
        {
            code: 408,
            msg: "Verification code was valid for 24 hours, Please click on resend.",
            data: "Verification code was valid for 24 hours, Please click on resend."
        },
        {
            code: 409,
            msg: "Verification code not exists, Please click on resend.",
            data: "Verification code not exists, Please click on resend."
        },
        {
            code: 410,
            msg: "User blocked by admin.",
            data: "User blocked by admin."
        },
        {
            code: 411,
            msg: "User already added.",
            data: "User already added."
        },
        {
            code: 412,
            msg: "Error in password generator.",
            data: "Error in password generator."
        },
        {
            code: 413,
            msg: "Verification code eror",
            data: "verification code are not match please try again."
        },
        {
            code: 414,
            msg: "Token Error",
            data: "Invalid token found."
        },
        {
            code: 415,
            msg: "Token not found",
            data: "Token not found in request perameter."
        },
        {
            code: 416,
            msg: "User not verified",
            data: "Your are not verified."
        },
        {
            code: 417,
            msg: "Authentication error.",
            data: "You are not authorized to perform this action."
        },
        {
            code: 500,
            msg: "Internal Server Error.",
            data: "Internal Server Error."
        },
        {
            code: 501,
            msg: "Data Not Found.",
            data: "Data Not Found."
        },
        {
            code: 502,
            msg: "JWT token Error",
            data: "Error occure while genrating user token."
        },
        {
            code: 503,
            msg: "Database error",
            data: "Database operation error."
        },
        {
            code: 504,
            msg: "Mail error",
            data: "Error occure while sending mail."
        },
        {
            code: 505,
            msg: "Error in file deleteing",
            data: "File deleteing error."
        },
    ]
};