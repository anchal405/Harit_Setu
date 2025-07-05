

import pandas as pd
import numpy as np
import os
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.compose import ColumnTransformer
from sklearn.ensemble import RandomForestRegressor
from sklearn.pipeline import Pipeline
from sklearn.metrics import mean_squared_error
import joblib

# ----------- PATHS -----------
DATA_PATH = "data/augmented_training_data.csv"
MODEL_PATH = "models/price_model.joblib"

# ----------- 1. LOAD DATA -----------
df = pd.read_csv(DATA_PATH)

# ----------- 2. DEFINE FEATURES & TARGET -----------
X = df.drop("price_per_kg", axis=1)
y_raw = df["price_per_kg"]
y = np.log(y_raw)  # log transformation to handle skew

# ----------- 3. DEFINE COLUMNS -----------
categorical_cols = ["crop_type", "residue_type", "state", "district"]
numerical_cols = ["month", "quantity_kg"]

# ----------- 4. PREPROCESSING PIPELINE -----------
preprocessor = ColumnTransformer(
    transformers=[
        ("cat", OneHotEncoder(handle_unknown="ignore"), categorical_cols),
        ("num", "passthrough", numerical_cols)
    ]
)

# ----------- 5. FULL MODEL PIPELINE -----------
model = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("regressor", RandomForestRegressor(n_estimators=100, random_state=42))
])

# ----------- 6. TRAIN-TEST SPLIT -----------
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# ----------- 7. TRAIN THE MODEL -----------
model.fit(X_train, y_train)

# ----------- 8. EVALUATE PERFORMANCE -----------
y_pred_log = model.predict(X_test)
y_pred = np.exp(y_pred_log)  # convert back from log
rmse = np.sqrt(mean_squared_error(np.exp(y_test), y_pred))
print(f" Model trained successfully.")
print(f" RMSE: {rmse:.4f} ₹/kg")

# ----------- 9. SAVE THE MODEL -----------
os.makedirs("models", exist_ok=True)
joblib.dump(model, MODEL_PATH)
print(f" Model saved to: {MODEL_PATH}")

