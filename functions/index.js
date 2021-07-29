const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const admin = require('firebase-admin');
const serviceAccount = require('./sweet-dialog-20393f78cf50.json');

admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const { executeQueries } = require('./dialogflow')


exports.sweetDialogBot = functions.https.onRequest((request, response) => {
    return cors(request, response, async () => {
        let { message, sessionId, languageCode } = request.body || request.query;
        try {
            let result = await executeQueries('sweet-dialog', sessionId, message, languageCode || "en-IN");
            response.send(result.toString());
        } catch (e) {
            response.send(e.toString());
        }
    });
});
