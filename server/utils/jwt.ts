import JWT from 'jsonwebtoken';

type jwtKeyTypes = string;

const secretKey: jwtKeyTypes = process.env.JWT_SECRET || 'MY-SECRET';
const expiresIn: jwtKeyTypes = process.env.JWT_EXPIRES || '1h';


/**
 * ---- Sign the Token ----
 * @param data 
 * @returns 
 */
export const signToken = (data: any): string => {
    return JWT.sign(data, secretKey, { expiresIn });
};


/**
 * ----- Verify Token ----
 * @param token 
 * @returns 
 */
export const verifyToken = (token: string): any | null => {
    try {
        return JWT.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};