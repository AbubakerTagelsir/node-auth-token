const router = require('express').Router();

const authRoutes = require('./auth');
const testRoutes = require('./test');

router.get('/', (req,res)=>{
    return res.send({message: `Server Running !!!!`});
})

router.use('/auth', authRoutes);

router.use('/test', testRoutes);

module.exports = router;