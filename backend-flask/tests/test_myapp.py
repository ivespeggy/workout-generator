# tests/test_app.py
import pytest
from my_app import app as flask_app
import json


@pytest.fixture
def app():
    yield flask_app

@pytest.fixture
def client(app):
    return app.test_client()

def test_hello_world(client):
    # prepare data
    data = {"email": "dongpei1198@outlook.com"}

    # send request to route
    response = client.post('/login', data=json.dumps(data), content_type='application/json')
    # assert response code
    assert response.status_code == 200
    # validate data
    assert response.json == {"message": "logged in successfully"}
