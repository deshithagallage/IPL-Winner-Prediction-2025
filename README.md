# IPL Data Analysis & Winner Prediction 2025

This project aims to develop a machine learning model to predict the match winners of the Indian Premier League (IPL) 2025 matches. Additionally, it includes comprehensive data-driven analysis to derive insights from historical IPL data from 2008 to 2024, including team performance, player statistics, and match outcomes. The project also features a user-friendly interface for users to interact with the model, visualize predictions, and explore analytical insights.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Data Analysis](#data-analysis)
- [Installation](#installation)
- [Usage](#usage)
- [Data Collection](#data-collection)
- [Model Development](#model-development)
- [User Interface](#user-interface)

## Introduction

The IPL Winner Prediction 2025 project is designed to predict the outcomes of IPL matches using advanced machine learning techniques and to provide data-driven insights from historical data. By analyzing historical data, the model can forecast the potential winners of future matches. The repository includes all necessary scripts and documentation to replicate the project.

## Features

- **Data Analysis**: Analytical scripts and notebooks to derive insights from the data.
- **Data Collection and Preprocessing**: Scripts to gather and clean IPL data from various sources.
- **Model Development**: Code for building, training, and evaluating different machine learning models.
- **User Interface**: A web application to input match details, display predictions, and explore insights.
- **Documentation**: Detailed documentation and instructions for running the project.

## Data Analysis

The `documentation` directory contains Jupyter notebooks for performing exploratory data analysis (EDA) and deriving insights from the historical IPL data. This includes:

- Team performance analysis
- Player statistics and performance trends
- Seasonal analysis
- Match outcome patterns and key factors

A detailed project report with results is included in the `documentation` directory. This report summarizes the findings from the data analysis and provides actionable insights.

## Installation

To get started with the project, clone the repository and follow the steps below:

### Prerequisites

- Python 3.8 or higher
- Node.js
- npm or yarn

### Downloading the Model

- Access my public notebook's output file [here](https://www.kaggle.com/code/deshitha210173t/ipl-data-analysis-2025-winner-prediction-model/output).
- Locate the `new_model.pkl` file in the `output` folder and download.
- Move the `new_model.pkl` file to the `flask-server` directory.

### Backend Setup (Flask)

1. Navigate to the backend directory:
   ```sh
    cd .\flask-server\
    ```
   
3. Create a virtual environment:
    ```sh
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

4. Install the required packages:
    ```sh
    pip install -r requirements.txt
    ```

5. Run the Flask server:
    ```sh
    flask run
    ```

### Frontend Setup (React)

1. Navigate to the frontend directory:
    ```sh
    cd .\ipl-prediction\
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the React application:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage

Once the backend and frontend servers are running, you can interact with the application via the web interface. Enter the match details to get the prediction for the IPL 2025 match winners and explore various data-driven insights.

## Data Collection

Data for this project is collected from the [IPL Complete Dataset](https://www.kaggle.com/datasets/patrickb1912/ipl-complete-dataset-20082020), an open-source dataset available on Kaggle. The data includes comprehensive information about IPL matches, teams, players, and match outcomes from 2008 to 2024.

## Model Development

The code for building, training, and evaluating the machine learning model can be found in the public notebook available [here](https://www.kaggle.com/code/deshitha210173t/ipl-data-analysis-2025-winner-prediction-model). This notebook explores various aspects of IPL data analysis and winner prediction model, providing insights into team performance, player statistics, and match outcome patterns.

Feel free to explore the notebook to understand the methodologies and techniques used in developing the prediction model for IPL 2025 matches. This includes:
- Feature engineering
- Model selection
- Hyperparameter tuning
- Model evaluation

## User Interface

The `ipl-prediction` directory contains the React code for the web application. Users can input match details through the interface, view the predicted winner, and explore various analytical insights derived from the data.
