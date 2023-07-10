import { compare } from "bcryptjs";
import { User } from "../../entities";
import { AppError } from "../../error";
import { TSessionRequest } from "../../interfaces";
import { userRepo } from "../../repositories";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionTokenService = async (
  payload: TSessionRequest
): Promise<string> => {
  const userData: User | null = await userRepo.findOne({
    where: {
      email: payload.email,
    },
  });

  if (!userData) {
    throw new AppError("Invalid credentials", 401);
  }

  const thePasswordIsTheSame = await compare(
    payload.password,
    userData.password
  );

  if (!thePasswordIsTheSame) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: userData.admin,
      id: userData.id,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN!,
      subject: String(userData.id),
    }
  );

  return token;
};

export default createSessionTokenService;
