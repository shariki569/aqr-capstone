import jwt from 'jsonwebtoken'

export const  validateToken = async (token) => {
    try {
        let errMessage; 
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET,
            function (err, decoded){
                if (err){
                    throw new Error(err)
                }else {
                    return decoded;
                }
            })

            return decodeToken
    } catch (error) {
        throw new Error(err)
    }
}