from flask import Flask, render_template

app = Flask(__file__)

@app.route("/")
def index():
    return render_template("blush.html")


if __name__ == "__main__":
    app.run(debug=True)