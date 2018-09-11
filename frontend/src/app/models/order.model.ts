
export interface Order {
    id: {type:String},
    date: {type:Date},
    cient: {type:String},
    project: {type:String},
    description: {type:String},
    isBilled: {type:Boolean},
    status:{type:String}
}