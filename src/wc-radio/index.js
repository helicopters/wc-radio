import Vue from 'vue'
import tpl from './tpl'

export default {
	install (Vue, options={}) {
		Vue.component('wcRadio', Vue.extend(tpl))
	}
}