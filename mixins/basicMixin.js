import md5 from 'js-md5'
import config from '../nuxt.config'

const basicMixin = {
  data() {
    return {
      PUBLIC_KEY: config.marvel_app.PUBLIC_KEY,
      PRIVATE_KEY: config.marvel_app.PRIVATE_KEY,
      loading: false,
      hash: md5.create()
    }
  },
  methods: {

  },
}

export default basicMixin