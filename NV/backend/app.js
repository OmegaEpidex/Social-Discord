app = Flask(__name__, template_folder='frontend/public')

@app.route('/')
def index():
    return render_template('/index.html')

def run_flask_app():
    app.run(host='0.0.0.0', port=8080)