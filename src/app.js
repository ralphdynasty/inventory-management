var express = require ('express')
var path = require('path')
var hbs = require('hbs')


var app = express()
const port = process.env.PORT || 3000

const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//console.log(publicDirPath)

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirPath))

app.get('', (req, res) =>{
	res.render('index')
})

app.get('/options', (req, res) =>{
	res.render('options',{
		title:'options'
	})
})

app.get('/add_new', (req, res) =>{
	res.render('add_new',{
		title:'Add New Item'
	})
})

app.get('/make_purchase', (req, res) =>{
	res.render('make_purchase',{
		title:'Make A Purchase'
	})
})


app.listen(port, ()=>{
	console.log('Server is running on port '+port)
}) 