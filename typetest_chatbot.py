import os
from flask import Flask, request, render_template, jsonify
from openai import OpenAI

app = Flask(__name__)

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

questions = [
    {"question": "나에게 맞는 회사란?", "options": ["복지를 누리며 마음 맞는 동료와 일하는 곳", "내가 기여한 만큼 금전적 보상을 받는 곳"]},
    {"question": "취업 준비 중 두 회사에 붙었다. 나의 선택은?", "options": ["안정적인 대기업", "성장 가능성이 높은 스타트업"]},
    {"question": "내가 더 중요시하는 것은?", "options": ["내 전문성의 증가", "협업을 통한 성과"]},
    {"question": "프로젝트와 휴가가 겹쳤을 때", "options": ["아쉽지만 인수인계 하고 떠난다", "믿고 맡길 수 없으니 휴가중에 틈틈이 업무를 챙긴다"]},
    {"question": "이런 회사는 싫어", "options": ["연봉은 높지만 꼰대가 가득", "연봉은 낮지만 사람이 좋아"]},
    {"question": "난 이런 일이 더 좋아", "options": ["나 혼자서도 잘 해낼 수 있는 일", "여러 사람과 협업해서 시너지를 내는 일"]},
    {"question": "퇴근 10분전 새로운 프로젝트", "options": ["내일 얘기하자", "바로 회의하자"]},
    {"question": "나에게 중요한 건", "options": ["연봉, 명예", "도전, 성장"]},
    {"question": "이직하려는 회사는", "options": ["주3회 재택근무, 연봉인상5%", "재택근무없음, 연봉인상30%"]},
    {"question": "난 이게 더 중요해", "options": ["유명한, 안정적인", "도전, 최초"]},
    {"question": "새 팀장님으론", "options": ["일 잘하지만 정시퇴근", "워커홀릭이지만 배울 점 많음"]},
    {"question": "회사에서 10년차..", "options": ["전문가가 될래", "매니저가 될래"]}
]

def analyze_preferences_with_gpt(responses):
    # Create a prompt for ChatGPT based on the user responses
    prompt = "사용자는 다음과 같은 질문들에 각각 이렇게 대답했어:\n\n"
    for i, q in enumerate(questions):
        prompt += f"Q: {q['question']}\nA: {q['options'][responses[i]]}\n\n"
    prompt += "사용자의 답변을 바탕으로 사용자에게 가장 맞는 회사 유형을 추천해서 한 단어로 말해줘 (대기업, 중소기업, 스타트업):"
    print(prompt)
    print(type(prompt))
    # OpenAI API 호출
    response = client.chat.completions.create(
        model="gpt-3.5-turbo",  
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        max_tokens=50
    )
    print(response)
    return response.choices[0].message.content

@app.route('/')
def home():
    return render_template('index.html', questions=questions)

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json
    print(data)
    responses = [int(data[q['question']]) for q in questions]
    print(responses)
    recommended_company = analyze_preferences_with_gpt(responses)
    return jsonify({"message": f"당신은 이런 회사가 어울려요 : {recommended_company}"})

if __name__ == "__main__":
    app.run(debug=True)
