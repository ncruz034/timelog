
export class Order {
    _id: {};
    orderNumber: { type: String };
    date: { type: Date };
    client: { type: String };
    project: {type: String};
    description: {type: String};
    isBilled: {type: Boolean};
    status: { type: String};
    time: {};
}
