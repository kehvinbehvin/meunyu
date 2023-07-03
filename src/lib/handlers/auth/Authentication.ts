import jwt from 'jsonwebtoken';

class JWTAuthentication {
  private secretKey: string;

  constructor() {
    this.secretKey = (process.env.SECRET_KEY as string) || 'secret';
  }

  generateToken(payload: any): string {
    return jwt.sign(payload, this.secretKey);
  }

  decodeToken(token: string) {
    return jwt.verify(token, this.secretKey);
  }
}

export const jwtAuthentication = new JWTAuthentication();
