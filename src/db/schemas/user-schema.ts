import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    chatId: { type: String, required: true },
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    timezone: {
      type: Number,
    },
    schedule: {
      type: String,
    },
  },
  { timestamps: true },
);
