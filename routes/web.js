const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/customers/orderController")
const AdminOrderController = require("../app/http/controllers/admin/orderController")
const statusController = require('../app/http/controllers/admin/statusController')
// const Order = require("../app/models/order");

//middlewares
const guest = require('../app/http/middlewares/guest');
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')

function initRoutes(app) {
    app.get('/', homeController().index)
    
    //cart route
    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)
    // app.post('/increase-pizza', cartController().increase)
    // app.post("/remove-cart", cartController().remove);
    
    //login route
    app.get('/login',guest, authController().login)
    app.post('/login', authController().postLogin)
    
    //register route
    app.get('/register',guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    //customer route
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)

    //Admin routes
    app.get('/admin/orders', admin , AdminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports = initRoutes;