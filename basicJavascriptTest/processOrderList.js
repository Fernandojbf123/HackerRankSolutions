const orderList = [
                {id:1, state:undefined},
                {id:2, state:undefined},
                {id:3, state:undefined}
]

const orderId = 3;
const state = "Processing"

function processOrderList (orderList,orderId,state) {

    // let ids = orderList.map(obj => obj.id)
    // let status = orderList.map(obj => obj.status);

    let updatedOrderList = orderList.map( obj => {
        if(obj.id === orderId){
            obj.state=state
            return obj
        }
        return obj
    },state)
    console.log(updatedOrderList)

    let filteredObjectList = updatedOrderList.filter (obj => obj.state != "Delivered")
    orderList=[...filteredObjectList]
}

processOrderList(orderList,orderId,state)

