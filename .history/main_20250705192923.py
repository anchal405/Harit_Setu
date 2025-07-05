from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd

# Load trained model
model = joblib.load("models/price_model.joblib")

# FastAPI app
app = FastAPI(title="HaritSetu AI Price Predictor with Suggestions")

# Input schema
class CropInput(BaseModel):
    crop_type: str
    residue_type: str
    state: str
    district: str
    month: int
    quantity_kg: int

# 🔥 Rule-based suggestion function
def suggest_use(residue_type: str):
    suggestions = {
        "straw": "biofuel or composting",
        "husk": "biochar or packaging material",
        "stem": "fiber-based packaging",
        "leaves": "vermicomposting or mulching",
        "pod": "bioplastic raw material",
        "shell": "briquettes or biochar",
        "stalk": "compressed board or paper pulp",
        "pulp": "mushroom cultivation"
    }
    return suggestions.get(residue_type.lower(), "general composting")

# POST endpoint
@app.post("/predict_price")
def predict_price(data: CropInput):
    # Prepare input
    input_df = pd.DataFrame([{
        "crop_type": data.crop_type,
        "residue_type": data.residue_type,
        "state": data.state,
        "district": data.district,
        "month": data.month,
        "quantity_kg": data.quantity_kg
    }])

    # Predict price (log → exp)
    log_price = model.predict(input_df)[0]
    final_price = round(float(np.exp(log_price)), 2)

    # Suggest best use
    suggestion = suggest_use(data.residue_type)

    return {
        "predicted_price_per_kg": final_price,
        "unit": "INR/kg",
        "suggested_use": suggestion
    }



