const { Schema, model } = require("mongoose");

const favouriteSchema = new Schema(
  {
    favourite: {
      type: Boolean,
      default: false,
    },
    blogId: {
      type: Schema.Types.ObjectId,
      ref: "blog",
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);
const Favourite = model("favourite", favouriteSchema);

module.exports = Favourite;
