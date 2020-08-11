export class Contact {

    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '',
        public _id?: string,
    ) {
    }

    setId?() {
        // Implement your own set Id
        // this._id = makeId()
        this._id= Math.random().toString(16).slice(2)
    }
}