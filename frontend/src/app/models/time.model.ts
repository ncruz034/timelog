export class Time {
    user_id: {type:String },
    date: {type: Date = new Date().toDateString()},
    orderNumber: {type:String},
    time: {type:Number},
    description:{type:String}
}
