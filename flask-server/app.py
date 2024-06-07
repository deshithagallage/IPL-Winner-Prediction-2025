from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

model = pickle.load(open('model.pkl', 'rb'))

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    # Extract the data from the request
    batting_team = data.get('battingTeam')
    bowling_team = data.get('bowlingTeam')
    city = data.get('city')
    runs_left = data.get('runsLeft')
    balls_left = data.get('ballsLeft')
    wickets_left = data.get('wicketsLeft')
    target = data.get('target')

    current_run_rate = np.where(
        120-balls_left > 0, 
        ((target-runs_left)*6) / (120-balls_left), 
        0
    )
    
    required_run_rate = np.where(
        balls_left > 0, 
        (runs_left*6) / balls_left, 
        np.where(runs_left > 0, 1e6, 0)
    )

    features = [[batting_team, bowling_team, city, runs_left, balls_left, wickets_left, current_run_rate, required_run_rate, target]]

    columns = ['batting_team', 'bowling_team', 'city', 'runs_left', 'balls_left',
       'wickets_left', 'current_run_rate', 'required_run_rate', 'target']

    season_24 = pd.DataFrame(features, columns=columns)

    pred = model.predict_proba(season_24)[0][1] * 100

    result = {
        'batting_team': batting_team,
        'bowling_team': bowling_team,
        'prediction': pred
    }

    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
