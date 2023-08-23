import mongoose from 'mongoose'
const cartSchema = new mongoose.Schema({
  productID: String,
  productName: String,
  Description: String,
  DescriptionDetail: String,
  Address: String,
  Phone: String,
  Fax: String,
  WebsiteUrl: String,
  Picture: {
    PictureUrl1: String,
    PictureDescription1: String,
    PictureUrl2: String,
    PictureDescription2: String,
    PictureUrl3: String,
    PictureDescription3: String
  },
  Position: {
    PositionLon: Number,
    PositionLat: Number
  },
  Class: String,
  Class1: String,
  Class2: String,
  Class3: String,
  Spec: String,
  ServiceInfo: String,
  ParkingInfo: String,
  City: String,
  UpdateTime: String,
  Level: String,
  Location: String,
  Organizer: String,
  StartTime: String,
  EndTime: String,
  OpenTime: String,
  productCategory: String,
  productCity: String
})
const schema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users',
    required: [true, '缺少使用者']
  },
  date: {
    type: Date,
    default: Date.now
  },
  cart: {
    type: [cartSchema],
    default: [],
    validate: {
      validator (value) {
        return Array.isArray(value) && value.length > 0
      },
      message: '行程不能為空'
    }
  }
}, { versionKey: false })

export default mongoose.model('orders', schema)
