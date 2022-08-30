import vision from "@google-cloud/vision";
async function quickstart() {
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    // Performs label detection on the image file
    const [result] = await client.textDetection('./test_sudal.jpeg');
    console.log(result);
}
quickstart();