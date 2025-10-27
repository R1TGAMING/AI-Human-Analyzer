import pickle
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

with open("./models/model.pkl", "rb") as f:
    model = pickle.load(f)

with open("./models/vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)

@app.post("/predict")
def predict():
    data = request.json
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    try:
         text_vector = vectorizer.transform([text])
         predict = model.predict(text_vector)
         predict_prob = model.predict_proba(text_vector)

         return jsonify({
             "status": "success",
             "text": text,
             "data": {
                 "prediction": int(predict[0]),
                 "prediction_text": "AI" if predict[0] == 1 else "Human",
                 "prediction_probability": {
                        "AI": round(float(predict_prob[0][1]), 2),
                        "Human": round(float(predict_prob[0][0]), 2)
                 }
             }
         }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
      app.run()