require('dotenv').config()
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
app.use(cors())
app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async (req, res) => {
    const items = req.body.items

    let line_items = []
    items.forEach((item) => {
        line_items.push(
        {
            price: item.id,
            quantity: item.quantity
        }
    )
})  
    // try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            //lineItems: req.body.lineItems,
            line_items: line_items,
            mode: 'payment',
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
            // success_url: "http://localhost:3000/success",
            // cancel_url: "http://localhost:3000/cancel"
        })
        res.send(JSON.stringify({
            url: session.url
        }))
})
app.listen(4000, () => console.log('Server running on port 4000'))