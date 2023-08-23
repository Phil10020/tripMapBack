import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '缺少名稱']
  },
  price: {
    type: Number,
    required: [true, '缺少價格'],
    min: [0, '價格太低']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  description: {
    type: String,
    required: [true, '缺少說明']
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['衣服', '食品', '3C', '遊戲'],
      message: '分類錯誤'
    }
  },
  sell: {
    type: Boolean,
    required: [true, '缺少上架狀態']
  }
}, { versionKey: false })

export default mongoose.model('products', schema)
