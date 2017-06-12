export default {
	name: 'hello',
	data () {
		return {
			msg: [],
			channelName: '',
			eventName: ''
		}
	},
	methods: {
		connect(name, eventName) {
			if(!name || !eventName)
				return false

			Echo.channel(name).listen(eventName, (e)=>{
				console.info('Connected to ' + name + ' channel to ' + eventName + ' event')
				this.msg.push(e)
			})
		},
		leave(name) {
			Echo.leave(name);
			console.info('Channel ' + name + ' was leaved')
		},
		cleanStory() {
			this.msg = []
		}
	}
}