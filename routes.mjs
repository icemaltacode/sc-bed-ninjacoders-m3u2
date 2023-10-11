import error from './src/handlers/error.mjs';
import main from './src/handlers/main.mjs';
import newsletter from './src/handlers/newsletter.mjs';
import photoContest from './src/handlers/photocontest.mjs';
import cart from './src/handlers/cart.mjs';
import admin from './src/handlers/admin.mjs';

export default (app, adminRoute) => {
    // Admin
    // Admin >>> Main
    adminRoute.get('/', admin.dashboard);
    
    // Admin >>> Product Management
    adminRoute.get('/products', admin.products);
    adminRoute.get('/api/product/:id', admin.api_getProduct);
    adminRoute.get('/api/products', admin.api_getProducts);
    adminRoute.put('/api/product', admin.api_upsertProduct);
    adminRoute.delete('/api/product/:id', admin.api_deleteProduct);

    // Admin >>> Login
    adminRoute.post('/login', admin.checkLogin);

    // Main Routes
    app.get('/', main.home);
    app.get('/about', main.about);
    app.get('/colormode/:mode', main.colorMode);
    app.get('/masterclass', main.masterclass);

    // Cart Routes
    app.get('/cart', cart.cartPage);
    app.post('/add-to-cart', cart.addToCart);
    app.post('/change-cart-item-qty', cart.changeCartItemQty);
    app.post('/delete-from-cart', cart.deleteFromCart);
    app.post('/checkout', cart.checkout);

    // Newsletter Routes
    app.get('/newsletter', newsletter.newsletterPage);
    app.post('/api/newsletter-signup', newsletter.newsletterSignup);
    app.get('/newsletter/archive', newsletter.newsletterArchive);

    // Setup Photo Contest Routes
    app.get('/contest/setup-photo', photoContest.setupPhotoContestPage);
    app.post('/api/setup-photo-contest/:year/:month', photoContest.setupPhotoContest);

    // Error handling
    app.use(error.notFound);
    app.use(error.serverError); 
};

