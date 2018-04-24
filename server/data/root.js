import User from '../mongoose/User'

const Root = {
    allUsers: () => User.find({}, (error, users) => users),
    allTags: () => User.distinct('tags', (error, tags) => console.log(tags)),
}

export default Root
