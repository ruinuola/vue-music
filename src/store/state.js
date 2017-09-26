import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  // 实际播放列表
  sequenceList: [],
  // 播放模式
  mode: playMode.sequence,
  // 当前播放的索引
  currentIndex: -1,
  disc: {},
  topList: {}
}

export default state
