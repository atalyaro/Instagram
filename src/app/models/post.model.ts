export default class PostModel {
    static counter = 1
    public id: number
    public like: boolean = false
    constructor(
        public image: string,
        public description: string
    ) {
        this.id = PostModel.counter
        PostModel.counter++
    }

    toggleLike() {
        this.like = !this.like
    }
}