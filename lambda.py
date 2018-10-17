import json

wordmap = {};


def _createWordMap():
    wordmap["Hello"] = ["How are you doing?", "Greetings", "Nice to meet you!"]
    wordmap["Hey"] = ["Yo!"]
    wordmap["I have a question"] = ["How may I help you?"]
    wordmap["Thank you"] = ["You are welcome"]


def lambda_handler(event, context):
    _createWordMap();
    print(event["messages"]);
    for message in event["messages"]:
        text = message["unstructured"]["text"]

    message = wordmap[text]
    return response(message, 200)


def response(message, status_code):
    return {
        'statusCode': str(status_code),
        'message': message,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
    }
