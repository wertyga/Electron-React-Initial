import mongoose from 'mongoose';
import shortid from 'shortid';
import crypto from 'crypto';

const SessionSchema = new mongoose.Schema({
    token: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        index: '1d'
    }
});

SessionSchema.static('saveToken', function(name) {
    const token = crypto.createHmac('sha256', shortid.generate()).update(name).digest('hex');
    return this({ token }).save();
});
SessionSchema.static('findByTokenAndRemove', function(token) {
    return this.findOne({ token }).then(session => {
        return session.remove();
    })
});


export default mongoose.model('session', SessionSchema);