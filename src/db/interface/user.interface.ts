import mongoose from 'mongoose';

export interface User extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly chatId: string;
  readonly coordinates: {
    latitude: Number;
    longtitude: Number;
  };
  readonly timezone: Number;
  readonly scheadule: string;
}
