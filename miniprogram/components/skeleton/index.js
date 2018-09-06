/*
 * @Author: Lac
 * @Date: 2018-08-22 23:00:48
 * @Last Modified by: Lac
 * @Last Modified time: 2018-08-22 23:02:12
 */

Component({
  properties: {
    // 几条数据 1-10
    cardAmount: {
      type: Number,
      value: 3
    },

    // 颜色
    color: {
      type: String,
      value: '#dfdfdf'
    },

    // 背景颜色
    backgroundColor: {
      type: String,
      value: '#fff'
    },

    // 自定义卡片样式
    cardStyle: {
      type: String,
      value: ''
    },

    // 几条横线 1-4
    strokeAmount: {
      type: Number,
      value: 3
    },

    // 横线尺寸 rpx
    strokeSize: {
      type: Number,
      value: 20
    },

    // 是否显示封面（灰色方块）
    cover: {
      type: Boolean,
      value: true
    },

    // 封面位置 left right
    coverPosition: {
      type: String,
      value: 'left'
    },
    // 封面图尺寸 rpx
    coverSize: {
      type: Number,
      value: 200
    }
  },

  data: {
    tempCardList: [],
    strokeList: []
  },

  methods: {

  },

  attached () {
    let { cardAmount, strokeAmount } = this.properties

    let tempCardList = [...Array(cardAmount).keys()]
    let strokeList = [...Array(strokeAmount).keys()]
    this.setData({
      tempCardList: tempCardList,
      strokeList: strokeList
    })
  }
})
