from django.shortcuts import render

from django.http import HttpRequest, HttpResponse

posts = [
    {
        'id': 1,
        'title': 'Let\'s explore python',
        'content': 'Python is an interpreted, high-level, general-content programming language. It is widely used in the fields of web development, data science, and machine learning.',
    },
    {
        'id': 2,
        'title': 'Let\'s explore javascript',
        'content': 'Javascript is an interpreted, high-level, general-content programming language. It is widely used in the fields of web development.',
    },
    {
        'id': 3,
        'title': 'Django is the best web framework',
        'content': 'Django is used by almost every big tech company like Facebook, Google, YouTube, Instagram, etc.',
    },
]

# Create your views here.

def home(request: HttpRequest):
    HTML = ''

    for post in posts:
        HTML += f'''
            <div>
                <h1>{post['id']} - {post['title']}</h1>
                <p>{post['content']}</p>
            </div>
        '''

    return HttpResponse(HTML)

def post(request: HttpRequest, id: str):
    HTML = ''
    HTML += f'''
        <div>
            <h1>{id}</h1>
        </div>
    '''

    return HttpResponse(HTML)