import mongoose, { Model } from "mongoose";

export interface IUser {
  username?: string;
  fullName?: string;
  password?: string;
  email: string;
  avatar?: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new mongoose.Schema<IUserDocument>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      default: function (this: IUserDocument) {
        return this.username;
      },
    },
    password: {
      type: String,
      default: "123456",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export const User: Model<IUserDocument> =
  mongoose.models?.Users || mongoose.model<IUserDocument>("Users", userSchema);
