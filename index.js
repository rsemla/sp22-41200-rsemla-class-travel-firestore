const {Firestore} = require("@google-cloud/firestore");

exports.travelFirestore = async (message, context) => {

    const firestore = new Firestore();
    const incomingMessage = Buffer.from(message.data, 'base64').toString('utf-8');
  
    const parsedMessage = JSON.parse(incomingMessage);
  
    console.log(`Decoded message: ${JSON.stringify(parsedMessage)}`);
    console.log(`Email address: ${parsedMessage.email_address}`);

    const travelData = {
        email: parsedMessage.email_address,
        data: incomingMessage
    }

    // WRITE THE JSON OBJECT TO FIRESTORE
    var collectionRef = firestore.collection('travel');
    var documentRef = await collectionRef.add(travelData);
    console.log(`Document created: ${documentRef.id}`);
};

