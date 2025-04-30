from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/chat', methods=['GET', 'POST'])
def chat():
    if request.method == 'POST':
        cpf = request.form.get('cpf')
        # você pode usar o CPF mais tarde se quiser
        return render_template('chat.html', cpf=cpf)
    return render_template('chat.html')

if __name__ == '__main__':
    app.run(debug=True)
