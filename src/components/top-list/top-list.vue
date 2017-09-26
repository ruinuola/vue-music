<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
//  import {getTopList} from 'api/rank'
//  import {ERR_OK} from 'api/config'
//  import {playlistMixin} from 'common/js/mixin'

  export default {
//    mixins: [playlistMixin],
    computed: {
      title() {
        return this.topList.topTitle
      },
      bgImage() {
        return this.topList.picUrl
      },
      ...mapGetters([
        'topList'
      ])
    },
    methods: {
//      handlePlaylist(playlist) {
//        const bottom = playlist.length > 0 ? '60px' : ''
//        this.$refs.rank.style.bottom = bottom
//      },
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease

  .slide-enter, .slide-leave-to
    transform:
</style>
