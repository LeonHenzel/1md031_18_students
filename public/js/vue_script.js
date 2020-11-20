var socket = io();

var menu = new Vue({
  el: "#mainSection",
  data:{
    burgers: food,
    email: "",
    name: "",
    street: "",
    house: "",
    gender: "",
    payment: "",
    paymentOptions: ["Credit Card", "PayPal", "Swish", "Klarna", "Blood"],
    customerInfo : [],
    gotClicked: false,
    orderList: [],
    confirmedOrderList: [],
    orders: {},
    coordinates:{x:-20, y:-20},
    count: 0,
    orderId: 0,
    ci: [],
  },
  created:{

  },
  methods:{
    displayOrder: function(event) {
    let offset = { x: event.currentTarget.getBoundingClientRect().left,
                   y: event.currentTarget.getBoundingClientRect().top}
    this.coordinates = { x: event.clientX-10-offset.x,
                         y: event.clientY-10-offset.y}
    }, 

    logCredentials: function updateInfo(){
      this.confirmedOrderList = this.orderList
      this.gotClicked = true
      this.customerInfo = []
      this.customerInfo.push({value: "Name: "+this.name})
      this.customerInfo.push({value: "Email: "+this.email})
      /*this.customerInfo.push({value: "Street: "+ this.street +" "+ this.house})*/
      this.customerInfo.push({value:"Payment by: "+ this.payment})
      this.customerInfo.push({value:"Gender: "+this.gender})
      this.customerInfo.push({value:"Deliver to: "+this.coordinates.x + "x / "+ this.coordinates.y+"y"})


      socket.emit("addOrder", {orderId: this.count++,
        details: { x: this.coordinates.x
                  ,y: this.coordinates.y },
        orderItems: this.confirmedOrderList,
        customerInfo: ["name: " + this.name, "email: " + this.email,
                      "payment: " + this.payment, "gender: " + this.gender,
                      "Order: " + this.confirmedOrderList]
                    });

      return
    }
  }
})
